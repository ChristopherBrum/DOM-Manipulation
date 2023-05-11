/*
- write a function that:
	- retrieve all of the available schedules from API call 
	- if 1 or more schedules are available
		- tally the number of schedules for each staff member
		- alert the user of the results as: "key: value" pairs
			- the staff_id will be the key in the format of 'staff {id}'
			- the count of schedules as the value
	- otherwise
		- alert user that there are currently no schedules available for booking

	- if 5 or more seconds have elapsed since the request was made
		- cancel retrieval and alert the user to try again

	- alert the user of the completion of the request, regardless of success or failure
*/

// Using XMLHttpRequest
function getAvailableSchedules() {
	const request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:3000/api/schedules');
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	request.timeout = 5000;
	request.responseType = 'json';

	request.onload = (e) => {
		const schedules = request.response;
		const staffTally = {};
		const staffTallyFormatted = [];

		if (schedules.length > 0) {
			schedules.forEach(schedule => {
				const staffId = schedule['staff_id'];
				staffTally[staffId] = (staffTally[staffId] + 1) || 1; 
			});

			for (let staffId in staffTally) {
				staffTallyFormatted.push(`staff_${staffId}: ${staffTally[staffId]}`);
			}

			alert(staffTallyFormatted.join('\n'));
		} else {
			alert('There are currently no schedules available.');
		}			
	};

	request.ontimeout = (e) => {
		alert('Request timed out. Please try again.')
	};

	request.onloadend = () => {
		alert('Request is complete.')
	};

	request.send();
}

getAvailableSchedules()

