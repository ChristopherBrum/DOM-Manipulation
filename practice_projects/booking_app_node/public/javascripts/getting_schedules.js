/*
- create function to retrieve all available schedules
- if 1+ schedules are available
	- tally the schedules for each staff member
	- create an alert that displays each staff members id as a key, and the number of schedules as the value: 'staff {id}'
- if there are no schedules
	- alert the user that there are currently no schedules for booking

- if the request takes more than 5 seconds to respond
	- cancel the request
	- inform the user to try again

- inform the user of the completion of the request regardless of its success/failure

*/

function createScheduleAlerts(schedules) {
	const staff = {};
	for (let schedule of schedules) {
		staff[schedule.staff_id] = staff[schedule.staff_id] || 0;
		staff[schedule.staff_id] += 1;
	}

	for (let staff_id in staff) {
		alert(`staff ${staff_id}: ${staff[staff_id]}`)
	}
}

//////// XHR ////////

// document.addEventListener('DOMContentLoaded', () => {
// 	function fetchAllSchedules() {
// 		const request = new XMLHttpRequest();
// 		request.open('GET', 'http://localhost:3000/api/schedules');
// 		request.timeout = 5000;
// 		request.responseType = 'json';

// 		request.onload = () => {
// 			const schedules = request.response;
// 			if (schedules) {
// 				createScheduleAlerts(schedules);
// 			} else {
// 				alert('There are currently no schedules available for booking');	
// 			}
// 		};

// 		request.ontimeout = () => {
// 			alert('Request timed out. Please try again.');
// 		};

// 		request.addEventListener('loadend', () => {
// 			alert('The request has completed.');
// 		});

// 		request.send();
// 	}

// 	fetchAllSchedules();
// });

//////// PROMISES ////////

// document.addEventListener('DOMContentLoaded', () => {
// 	function fetchAllSchedules() {
// 		const promise = new Promise((resolve, reject) => {
// 			const request = new XMLHttpRequest();
// 			request.open('GET', 'http://localhost:3000/api/schedules');
// 			request.timeout = 5000;
// 			request.responseType = 'json';

// 			request.addEventListener('load', () => {
// 				resolve(request.response);
// 			});

// 			request.addEventListener('error', (e) => {
// 				reject(e);
// 			})

// 			request.addEventListener('timeout', () => {
// 				resolve('Request timed out. Please try again.');
// 			});

// 			request.addEventListener('loadend', () => {
// 				alert('The request has completed.');
// 			});

// 			request.send();
// 		});

// 		promise
// 			.then((response) => {
// 				if (typeof response === 'object') {
// 					createScheduleAlerts(response);
// 				} else {
// 					alert(response);
// 				}
// 			})
// 			.catch((e) => alert(e));
// 	}

// 	fetchAllSchedules();
// })


//////// ASYNC/AWAIT ////////

async function allSchedules() {
	const controller = new AbortController();
	const controllerId = setTimeout(() => controller.abort(), 5000);

	const response = await fetch('http://localhost:3000/api/schedules', {
		signal: controller.signal,
	});
	
	clearTimeout(controllerId);

	const json = await response.json();
	return json;
}

document.addEventListener('DOMContentLoaded', () => {
	async function fetchAllSchedules() {
		try {
			const schedules = await allSchedules()
			createScheduleAlerts(schedules);
		} catch (e) {		
			if (e.name === 'AbortError') {
				alert('Request timed out. Please try again.');
			} else {
				console.log(`Error: ${e}`);
			}
		} finally {
			alert('The request has completed.');
		}
	}

	fetchAllSchedules();
});