/*
- create markup
- fetch schedule data
	- add to dropdown
	- add dataset for schedule id
	- send DELETE request
	- delete the option from the dropdown
- fetch booking data
	- add to dropdown
	- add dataset for schedule id
	- send DELETE request
	- delete the option from the dropdown
*/

async function fetchAllStaffMembers() {
	try {
		const response = await fetch('/api/staff_members');
		if (response.status === 200) {
			return await response.json();
		} else {
			console.log('Error fetching staff members:', response.status)
		}
	} catch (err) {
		console.log(err)
	}
}

async function fetchSchedules() {
	try {
		const response = await fetch('/api/schedules');
		let schedules;
		if (response.status === 200) {
			return await response.json();
		} else {
			console.log('Error fecthig schedules:', response.status);
		}
	} catch (err) {
		console.log(err);
	}
}

function filterUnbookedSchedules(schedules) {
	return [...schedules].filter((schedule) => {
		return schedule.student_email === null;
	});
}

function filterBookedSchedules(schedules) {
	return [...schedules].filter((schedule) => {
		return schedule.student_email;
	});
}

function populateDropdown(data, idName, className, staffMembers) {
	const select = document.createElement('select');
	select.id = idName;

	data.forEach((dataPoint) => {
		const option = document.createElement('option');
		option.classList.add(className);
		if (idName === 'schedules-dropdown') {
			option.dataset.scheduleId = dataPoint.id;
		} else if (idName === 'bookings-dropdown') {
			option.dataset.bookingId = dataPoint.id;
		}
		const staffName = staffMembers.filter((member) => member.id === dataPoint.staff_id)[0].name;
		option.textContent = `${staffName} | ${dataPoint.student_email || 'NOT BOOKED'} | ${dataPoint.date} | ${dataPoint.time}`;
		select.appendChild(option);
	})

	return select;
}

async function createScheduleCancellationDropdown(staffMembers, schedules) {
	// const dropdownContainer = document.getElementById('cancel-schedule-dropdown');
	// const label = dropdownContainer.children[0];
	// const childElements = dropdownContainer.querySelectorAll('*');
	// childElements.forEach((child) => {
	// 	child.remove();
	// });
	// dropdownContainer.appendChild(label);
	schedules = filterUnbookedSchedules(schedules);
	const schedulesDropdown = populateDropdown(schedules, 'schedules-dropdown', 'schedules-dropdown-option', staffMembers);
	document.getElementById('cancel-schedule-dropdown').append(schedulesDropdown);
}

async function createBookingCancellationDropdown(staffMembers, schedules) {
	const bookings = filterBookedSchedules(schedules);
	const bookingsDropdown = populateDropdown(bookings, 'bookings-dropdown', 'bookings-dropdown-option', staffMembers);
	document.getElementById('cancel-booking-dropdown').append(bookingsDropdown);
}

async function deleteSchedule(id) {
	try {
		let message;
		const response = await fetch('/api/schedules/' + id, {
			method: 'DELETE',
		});
	
		if (response.status === 204) {
			alert('Booking deleted');
		} else {
			message = await response.text();
			console.log(message);
		}
	
		return message;
	} catch (err) {
		console.log(err);
	}
}

async function removeBooking(id) {
	try {
		let message;
		const bookingCancellationResponse = await fetch('/api/bookings/' + id, {
			method: 'PUT',
		})
	
		if (bookingCancellationResponse.status === 204) {
			alert("Booking removed successfully");
		} else {
			message = await response.text();
			console.log(message);
		}

		return message;
	} catch (err) {
		console.log(err);
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	const staffMembers = await fetchAllStaffMembers();
	const schedules = await fetchSchedules();
	createScheduleCancellationDropdown(staffMembers, schedules);
	createBookingCancellationDropdown(staffMembers, schedules);
	const cancelScheduleBtn = document.getElementById('cancel-schedule-btn');
	const cancelBookingBtn = document.getElementById('cancel-booking-btn');

	cancelScheduleBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const select = document.getElementById('cancel-schedule-dropdown').children[1];
		const option = select.options[select.selectedIndex];
		const selectedScheduleId = select.options[select.selectedIndex].dataset.scheduleId;
		
		if (await deleteSchedule(selectedScheduleId)) return;
		console.log('hi')
		option.remove();
	});
	
	cancelBookingBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const select = document.getElementById('cancel-booking-dropdown').children[1];
		const option = select.options[select.selectedIndex];
		const selectedBookingId = select.options[select.selectedIndex].dataset.bookingId;

		if (await removeBooking(selectedBookingId)) return;
		if (await deleteSchedule(selectedBookingId)) return;
		
		option.remove();
	});

});