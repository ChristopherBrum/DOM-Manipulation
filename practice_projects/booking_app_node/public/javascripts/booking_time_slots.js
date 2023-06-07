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
	dropdown.classList.add('select-container', 'schedule-input');

	openTimeSlots.forEach((timeSlot) => {
		const name = staffMembers.find((staff) => staff.id === timeSlot.staff_id).name;
		const option = document.createElement('option');
		option.setAttribute('value', String(timeSlot.id));
		option.textContent = `${name} | ${timeSlot.date} | ${timeSlot.time}`;
		dropdown.appendChild(option);
	});

	const dropdownContainer =	document.getElementById('open-timeslot-dropdown');
	dropdownContainer.appendChild(dropdown);
}

document.addEventListener('DOMContentLoaded', () => {
	loadDropdown();
	const bookTimeSlotSubmit = document.getElementById('book-timeslot');
	
	bookTimeSlotSubmit.addEventListener('click', (e) => {
		const dropdown = document.getElementById('open-timeslot-dropdown');
		console.log(dropdown.value)
	})
});