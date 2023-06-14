/*
- Implement a form for adding new staff
	- should have email and name inputs
	- a submit button
- use booking app API to add staff to the database

- alert when no value is passed into email OR name inputs
	- 'Staff cannot be created. Check your inputs'

- does not clear inputs on unsuccessful submission

- when staff created successfully create alert
	- 'Successfully created staff with id: 14'

- clears form on successful submission
*/

// Using jQuery, Promises, and XML
function invalidInputs(staffEmail, staffName) {
	return (staffEmail === '' || staffName === '');
}

$().ready(() => {
	$('button').click((e) => {
		e.preventDefault();
		const staffEmail = $('#email').val().trim();
		const staffName = $('#staff-name').val().trim();

		if (invalidInputs(staffEmail, staffName)) {
			alert('Staff cannot be created. Check your inputs');
			return;
		} 

		const promise = new Promise((res, rej) => {
			const request = new XMLHttpRequest();
			request.open('POST', 'http://localhost:3000/api/staff_members');
			request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

			request.addEventListener('load', (e) => {				
				if (request.status === 201) {
					const responseBody = JSON.parse(request.response);
					res(responseBody.id);
					$('#email').val('')
					$('#staff-name').val('')
				} else {
					rej();
				}
			});

			let data = { name: staffName, email: staffEmail };
			let json = JSON.stringify(data);
			request.send(json);
		});

		promise
			.then((id) => alert(`Successfully created staff with id: ${String(id)}`))
			.catch(() => alert('Staff cannot be created. Check your inputs'));
	});
});