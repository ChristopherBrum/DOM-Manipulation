/*
- "add more schedules" button will add another schedule template to the page
- bottom of the page will have a "submit" button to submit the filled out schedules

- a schedule will consist of 
	- a numbered schedule title ("schedule 1", "schedule 2", etc)
	- staf name (drop down)
	- a date
	- a time
- inputs must all be filled in or an alert will be raised ("check your inputs")
- if adding schedules is successful, raise alert "Schedules added"
*/

// grab all staff member names and add to a drop down element
function populateDropDown(selectContainer) {
	let staffSelect;

	fetch('/api/staff_members')
	.then((response) => response.json())
	.then((staffMembers) => {
		const select = document.createElement('select');
		select.classList.add('select-container', 'schedule-input');
		
		for (let staff of staffMembers) {
			const option = document.createElement('option');
			option.setAttribute('value', String(staff.id));
			option.textContent = staff.name;
			select.appendChild(option);
		}

		staffSelect = select;
		selectContainer.appendChild(staffSelect);
	})
	.catch((err) => console.log(err));

	return staffSelect;
}

function isInvalidinput(input) {
	return input.trim().length === 0;
}

function addSchedules(schedules) {
	const json = JSON.stringify(schedules);

	fetch('/api/schedules', {
		method: 'POST',
		body: json,
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then((response) => {
		if (response.status === 201) {
			alert('Schedule(s) added successfully');
		} else {
			console.log(`Status Code: ${response.status}, ${response.statusText}`);
		}
	}).catch((err) => {
		console.log(err);
	});
}

function formatScheduleData(inputValues) {
	let [staffId, date, time] = inputValues;
	return {
		staff_id: staffId,
		date,
		time,
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const addAdditionalScheduleButton = document.getElementById('add-schedule');
	const submitNewSchedulesButton = document.getElementById('submit-schedules');
	const selectContainer = document.getElementById('select-container');
	let staffSelect = populateDropDown(selectContainer);

	// add additional schedule form
	addAdditionalScheduleButton.addEventListener('click', (e) => {
		e.preventDefault();
		const scheduleTemplate = document.querySelector('.schedule-container');
		const clone = scheduleTemplate.cloneNode(true);
		scheduleTemplate.parentElement.appendChild(clone);
	});

	// create new schedules for staff members
	submitNewSchedulesButton.addEventListener('click', (e) => {
		e.preventDefault();
		const scheduleForms = document.querySelectorAll('.schedule-container');
		const newSchedules = [];
		scheduleForms.forEach((form) => {
			const inputs = form.querySelectorAll('.schedule-input');
			let inputValues = [];
			for (let i = 0; i < inputs.length; i += 1) {
				if (isInvalidInput(inputs[i].value)) {
					alert('Check your inputs');
					return;
				}
				inputValues.push(inputs[i].value);
			}
			newSchedules.push(formatScheduleData(inputValues));
		});
		addSchedules({schedules: newSchedules});
	});
});