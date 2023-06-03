/*
- implement a form for adding new staff members
	- add staff via the API
	- should handle the different types of responses

- form
	- email
	- name
- submit button

- when missing one or more inputs
	- alert message: 'Staff cannot be created. Check your inputs'
- when both inputs included
	- add staffmember
	- display alert: 'Successfully created staff with id: __'
*/

function isInvalidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return !emailRegex.test(email) || isInvalidInput(email);
}

const isInvalidInput = (input) => input.trim().length <= 0;

document.addEventListener('DOMContentLoaded', () => {	
	document.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;
		const name = document.getElementById('name').value;

		if (isInvalidEmail(email) || isInvalidInput(name)) {
			alert('Staff cannot be created. Check your inputs')
		}	else {
			const encodedEmailParam = 'email=' + encodeURIComponent(email);
			const encodedNameParam = 'name=' + encodeURIComponent(name);
			const completeParams = encodedNameParam + '&' + encodedEmailParam;

			fetch('/api/staff_members', {
				method: 'POST',
				body: completeParams,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
			}).then((response) => {
				if (response.status === 201) {
					return response.json();
				} else {
					return Promise.reject(response);
				}
			}).then((data) => {
				alert(`Successful created staff with the id: ${data.id}`);
			}).catch((response) => {
				alert(`${response.status}: ${response.statusText}`);
			});

		}
	})
});
