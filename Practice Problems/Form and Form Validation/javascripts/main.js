/*
Create a sign-up form that validates each field when it loses focus.

The form should have the following controls:
- First Name
- Last Name
- Email
- Password
- Phone
- The form should also have a submit button with the value of "Sign Up".

Validation Rules
- The first name, last name, password, and email fields are all required.
- The phone number is optional.
- Password must be at least 10 characters long.
- Phone number must use US-style numbers: 111-222-3333.
- Email should conform to the constraint validation pattern .+@.+ (see below).

Functionality
- When a form field loses focus, validate the field value against the validation rule for that field. If the value is not valid, display a red error message to the right of the field. You may also want to add a red border to the input element. The error message should describe what the program expects, e.g., "The password is required."
- When a field with an error regains focus, the message should disappear. It should not reappear after the user corrects the field.
- When the user clicks the Submit button, don't send the form to the server if it has any validation errors. Instead, display an error message at the top of the page that says "Fix errors before submitting this form."
- The form validation error message should disappear when the user corrects all fields with an error.

Implementation
- You should not use the built-in error message mechanism. You can disable them with the form element's novalidate attribute.
- Use HTML5 constraint validation API and the pattern attribute to implement validations. MDN has a nice article on form validation. Read the section on constraint validation API.

*/

function isEmptyInput(input, flashElement) {
	if (input.trim().length < 1 && flashElement.id != 'phone-flash') {
		flashElement.textContent = 'Input cannot be empty';
		return true;
	}
}

function isInvalidEmail(email, flashElement) {
	if (isEmptyInput(email, flashElement)) return true;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		flashElement.textContent = 'Email is incorrectly formatted';
		return true;
	}
}

function isInvalidPassword(password, flashElement) {
	if (isEmptyInput(password, flashElement)) return;
	if (password.length < 10) {
		flashElement.textContent = 'Password must be at least 10 characters long';
		return true;
	}
}

function isInvalidPhone(phone, flashElement) {
	if (phone.length === 0) return;
	const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
	if (!phoneNumberRegex.test(phone)) {
		flashElement.textContent = 'Phone number should be formatted: 123-456-7890';
		return true;
	}
}

function removeSubmitErrorMessage() {
	const messageElement = document.getElementById('submit-error');
	if (messageElement) messageElement.remove();
}

function validateAllInputs() {
	const inputs = document.querySelectorAll('input');
	const validationMethods = [isEmptyInput, isEmptyInput, isInvalidEmail, isInvalidPassword, isInvalidPhone];
	let invalidInputFound = false;

	inputs.forEach((input, index) => {
		const flashId = input.id + '-flash';
		const flashElement = document.getElementById(flashId);
		
		if (validationMethods[index](input.value, flashElement)) {
			invalidInputFound = true;
		}
	});

	return invalidInputFound;
}

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');

	form.addEventListener('focusin', (e) => {
		if (e.target.tagName === 'BUTTON') return;
		const targetElement = e.target;
		const flashId = targetElement.id + '-flash'
		const flashElement = document.getElementById(flashId);
		flashElement.textContent = '';
	});

	form.addEventListener('focusout', (e) => {
		if (e.target.tagName === 'BUTTON') return;
		const targetElement = e.target;
		const targetInput = targetElement.value.trim();
		const flashId = targetElement.id + '-flash';
		const flashElement = document.getElementById(flashId);

		if (isEmptyInput(targetInput, flashElement)) return;

		switch (targetElement.id) {
			case 'email':
				isInvalidEmail(targetInput, flashElement);
				break;
			case 'password':
				isInvalidPassword(targetInput, flashElement);
				break;
			case 'phone':
				isInvalidPhone(targetInput, flashElement);
				break;
		}
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const invalidInputFound = validateAllInputs();

		if (invalidInputFound) {
			removeSubmitErrorMessage();
			const paragraph = document.createElement('p');
			paragraph.classList.add('flash');
			paragraph.id = 'submit-error';
			paragraph.textContent = 'Form cannot be submitted until errors are corrected.';
			const firstChild = form.firstChild;
			form.insertBefore(paragraph, firstChild);
		} else {
			removeSubmitErrorMessage();
			alert('Form submitted!');
		}
	})
});