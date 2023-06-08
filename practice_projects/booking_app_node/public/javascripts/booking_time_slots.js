/*
- create markup and JS to provide functionality to book an available schedule

- form for booking a time slot
	- drop down with "staff name | date | time"
	- email of student

	- check that student (email) exists in DB
		- if yes,
			- book the timeslot
			- alert "booked"
		- otherwise
			- display alert "student does not exist: booking sequence: 1234345"
				- booking sequence should be generated in a way that it can recognize the booking that was being attempted
			- display new form to create a student
				- email
				- name
				- booking sequence
				- submit
			- once filled out and submitted
				- add student to database
				- alert "successfully added new student to the database"
				- book time slot for newly created student
				- alert "booked"

IMPLEMENATION

Setup:
- fetch the AVAILABLE schedules
- create a select element
- attach each available schedule to an option element, labeling with the schedules data
	- each option should be labeled "staff name | date | time"
- append each option element to the select element
- append the select element to the element with the class "booking-form" 

- upon submitting, validate students email
	- if valid
		- update the time slot to have the students email attached
		- refresh the drop down, so that only unbooked time slots are included
		- alert "booked"
	- if invalid
		- generate booking sequence
		- alert "student does not exist: booking sequence: 1234345"
		- create a form to register the student
			- "Please provide new student details"
			- email
			- name 
			- booking sequence
		- submit/create new student
		- alert "successfully added student to the database"
		- automatically resubmit booking of time slot
		- alert


	- populating the dropdown
		- the dropdown should visibly display the "staff name | date | time"
		- the dropdown should have the value of the schedule id


*/

async function fetchAllStaffMembers() {
	let staffData;

	await fetch('/api/staff_members')
		.then((response) => response.json())
		.then((data) => staffData = data)
		.catch((err) => console.log(err));
	
	return staffData;
}

async function fetchOpenTimeSlots(staffMembers) {
	let openTimeSlots = [];

	for (let index in staffMembers) {
		let staff = staffMembers[index];
		
		await fetch(`/api/schedules/${String(staff.id)}`)
			.then((response) => response.json())
			.then((timeSlots) => {
				if (timeSlots.length > 0) {
					timeSlots.forEach((timeSlot) => {
						if (!timeSlot.student_email) {
							openTimeSlots.push(timeSlot);
						}
					})
				}
			})
			.catch((err) => console.log(err));
	}
		
	return openTimeSlots;
}

async function loadDropdown() {
	const staffMembers = await fetchAllStaffMembers();
	const openTimeSlots = await fetchOpenTimeSlots(staffMembers);
	const dropdown = document.createElement('select');
	dropdown.classList.add('select-container', 'booking-input');

	openTimeSlots.forEach((timeSlot) => {
		const name = staffMembers.find((staff) => staff.id === timeSlot.staff_id).name;
		const option = document.createElement('option');
		option.setAttribute('value', String(timeSlot.id));
		option.textContent = `${name} | ${timeSlot.date} | ${timeSlot.time}`;
		dropdown.appendChild(option);
	});

	const dropdownContainer =	document.getElementById('booking-dropdown');
	dropdownContainer.appendChild(dropdown);
}

function removeDropdown() {
	const dropdownContainer =	document.getElementById('booking-dropdown');
	dropdownContainer.innerHTML = '';
	const label = document.createElement('label');
	label.textContent = 'Please select one schedule: ';
	dropdownContainer.appendChild(label);
}

function isInvalidEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isInvalid = !emailPattern.test(email);
	if (isInvalid || isEmptyString(email)) alert('Check that your email is correct');
	return isInvalid;
}

function isEmptyString(value) {
	return value.length < 1;
}

function createRegistrationForm(email, booking_sequence) {
	const container = document.getElementById('registration-container');
	container.innerHTML = '';

	if (!container.classList.contains('registration')) {
		container.classList.add('registration', 'container');
	}

	const header = document.createElement('h2');
	header.textContent = 'Please provide new student details';
	container.appendChild(header);

	['Email', 'Name', 'Booking Sequence'].forEach((description) => {
		const div = document.createElement('div');
		const label = document.createElement('label');
		label.textContent = description + ': ';
		const input = document.createElement('input');
		if (description === 'Email') {
			input.value = email;
		} else if (description === 'Name') {
			input.classList.add('name');
		} else if (description === 'Booking Sequence') {
			input.value = booking_sequence;
		}
		div.append(label, input);
		container.appendChild(div);
	})

	const registrationButton = document.createElement('button');
	registrationButton.textContent = 'Register new student'
	registrationButton.id = 'submit-registration';
	container.appendChild(registrationButton);
}

async function bookTimeSlot(studentData) {
	try {
		const response = await fetch('/api/bookings', {
			method: 'POST',
			body: JSON.stringify(studentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			
		if (response.status === 201 || response.status === 204) {
			alert('Booked');
			reset();
			return;
		} 
			
		const responseMessage = await response.text();
		alert(responseMessage);
		return Number(responseMessage.split(' ').at(-1));
	}	catch (err) {
		console.log(err)
	}

	return booking_sequence;
}

async function registerStudent(studentData) {
	let success;

	try {
		const response = await fetch('/api/students', {
			method: 'POST',
			body: JSON.stringify(studentData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		
		if (response.status === 201 || response.status === 204) {
			alert('Successfully added student to the database');
			success = true;
		} else {
			console.log(response.status);
		}
	} catch (err) {
		console.log(err);
	}

	return success;
}

async function reset() {
	removeDropdown()
	loadDropdown()
	document.getElementById('booking-email').value = '';
	const container = document.getElementById('registration-container')
	container.innerHTML = '';
	container.classList.remove('registration', 'container')
}

document.addEventListener('DOMContentLoaded', () => {
	loadDropdown();
	const bookTimeSlotSubmit = document.getElementById('booking-submit');
	
	bookTimeSlotSubmit.addEventListener('click', async (e) => {
		const inputs = document.querySelectorAll('.booking-input');
		const scheduleId = inputs[0].value;
		const studentEmail = inputs[1].value.trim();
			
		if (isInvalidEmail(studentEmail)) return;

		const bookingData = {
			id: scheduleId,
			student_email: studentEmail,
		};

		const booking_sequence = await bookTimeSlot(bookingData);
		if (booking_sequence) {
			createRegistrationForm(studentEmail, booking_sequence);
			const registrationSubmit = document.getElementById('submit-registration');
			registrationSubmit.addEventListener('click', async () => {
				const studentName = document.querySelector('.name').value.trim();

				if (isEmptyString(studentName)) {
					alert('Check your inputs');
					return;
				} 
	
				const studentData = {
					email: studentEmail,
					name: studentName,
					booking_sequence,
				}

				const registrationSuccessful = registerStudent(studentData);
				if (registrationSuccessful) bookTimeSlot(bookingData);
			});
		}
	});
});
