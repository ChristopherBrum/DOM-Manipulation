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

PART 2
- The first and last names aren't validated properly: the user can use numbers in their name. With our current validation rules, the user can get away with using numbers as names. Don't let the user enter invalid characters in these fields.
- Solicit a credit card number as four hyphen-separated 4-digit numbers.

Specifications
- Use the pattern a-zA-Z'\s to validate user input for first and last names. Use the keypress event to prevent the user from entering a character that doesn't match the pattern.
- Add a credit card field to the form. The field should use 4 inputs, all with the same name attribute.
- Each credit card input should have a maximum length of 4 characters.
- Each credit card input should only allow numeric digits.
- The phone number input should only allow numeric digits.
- Use the keydown event to prevent the user from entering non-numeric characters in the credit card inputs.

PART 3
- Validate the credit card inputs to enforce precisely 4 digits in each input.
- Attach an event handler to the first three credit card inputs to automatically change the focus to the next input when the user enters the 4th digit. The last input doesn't need an event handler.

PART 4
- Any data collected from a form will probably get sent to the server. The browser does this automatically using the action attribute and the submit button. With AJAX, we bypass the browser's default behavior and send the data programmatically with the XMLHttpRequest object. For the data to make sense to the server, it must have a format that the server recognizes and understands. In this exercise, you will serialize the sign-up form data into a valid POST request body that is compatible with a content-type of application/x-www-form-urlencoded.

Specifications
- Prevent the default action on the Submit button.
- Add a block element to the bottom of the page with a heading of "Serialized Form". You will render the form data in this block.
- When the user clicks the Submit button, and the data is valid, extract the form data from all fields in the form. Use the data to construct a string of key/value pairs separated by &, e.g., first_name=David&last_name=Shepherd&email=davids%40example.com.
- Make sure each name/value pair is URL-encoded. For instance, in the example above, the email address uses %40 instead of @.
- Concatenate the 4 credit card inputs into a single value before adding it to the request body string.
- Render the form data as text in the block element you created earlier.

*/

const FormValidator = {
	clearForm: function() {
		const inputs = this.form.querySelectorAll('input');
		inputs.forEach((input) => {
			input.value = '';
		});
	},

	isEmptyInput: function(input, flashElement) {
		if (input.trim().length < 1 && flashElement.id != 'phone-flash') {
			flashElement.textContent = 'Input cannot be empty';
			return true;
		}
	},
	
	isInvalidEmail: function(email, flashElement) {
		if (this.isEmptyInput(email, flashElement)) return true;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			flashElement.textContent = 'Email is incorrectly formatted';
			return true;
		}
	},
	
	isInvalidPassword: function(password, flashElement) {
		if (this.isEmptyInput(password, flashElement)) return;
		if (password.length < 10) {
			flashElement.textContent = 'Password must be at least 10 characters long';
			return true;
		}
	},
	
	isInvalidPhone: function(phone, flashElement) {
		if (phone.length === 0) return;
		const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
		if (!phoneNumberRegex.test(phone)) {
			flashElement.textContent = 'Phone number should be formatted: XXX-XXX-XXXX';
			return true;
		}
	},
	
	removeSubmitErrorMessage: function() {
		const messageElement = document.getElementById('submit-error');
		if (messageElement) messageElement.remove();
	},
	
	validateAllInputs: function() {
		const inputs = document.querySelectorAll('input.validatable');
		const validationMethods = [this.isEmptyInput.bind(this), this.isEmptyInput.bind(this), this.isInvalidEmail.bind(this), this.isInvalidPassword.bind(this), this.isInvalidPhone.bind(this)];
		let invalidInputFound = false;
	
		inputs.forEach((input, index) => {
			const flashId = input.id + '-flash';
			const flashElement = document.getElementById(flashId);

			if (validationMethods[index](input.value, flashElement)) {
				invalidInputFound = true;
			}
		});
	
		return invalidInputFound;
	},

	displayFormData: function(formData) {	
		const parameters = [];
		let ccNumber = '';

		for (const pair of formData.entries()) {
			if (!pair[1]) continue;
			if (pair[0].slice(0, 2) === 'cc') {
				ccNumber += pair[1];
			} else {
				parameters.push(`${pair[0]}=${encodeURIComponent(pair[1])}`);
			}
		}

		if (ccNumber) parameters.push(ccNumber);
		const queryString = parameters.join('&');

		const paragraph = document.createElement('p');
		paragraph.textContent = queryString;
		this.form.appendChild(paragraph);
	},

	addFocusinHandler() {
		this.form.addEventListener('focusin', (e) => {
			if (e.target.tagName === 'BUTTON') return;
			const targetElement = e.target;
			const flashId = /cc/.test(targetElement.id) ? 'cc-flash' : (targetElement.id + '-flash');
			const flashElement = document.getElementById(flashId);
			if (flashElement) flashElement.textContent = '' ;
		});
	},

	addFocusoutHandler: function() {
		this.form.addEventListener('focusout', (e) => {
			if (e.target.tagName === 'BUTTON' || e.target.classList.contains('keypress')) return;
			const targetElement = e.target;
			const targetInput = targetElement.value.trim();
			const flashId = targetElement.id + '-flash';
			const flashElement = document.getElementById(flashId);
	
			if (this.isEmptyInput(targetInput, flashElement)) return;
	
			switch (targetElement.id) {
				case 'email':
					this.isInvalidEmail(targetInput, flashElement);
					break;
				case 'password':
					this.isInvalidPassword(targetInput, flashElement);
					break;
				case 'phone':
					this.isInvalidPhone(targetInput, flashElement);
					break;
			}
		});
	},

	addSubmitHandler() {
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			const invalidInputFound = this.validateAllInputs();
	
			if (invalidInputFound) {
				this.removeSubmitErrorMessage();
				const paragraph = document.createElement('p');
				paragraph.classList.add('flash');
				paragraph.id = 'submit-error';
				paragraph.textContent = 'Form cannot be submitted until errors are corrected.';
				const firstChild = this.form.firstChild;
				this.form.insertBefore(paragraph, firstChild);
			} else {
				this.removeSubmitErrorMessage();
				const formData = new FormData(e.target);
				this.displayFormData(formData);
				this.clearForm();
			}
		});
	},

	addKeypressHandler: function() {
		this.form.addEventListener('keypress', (e) => {
			if (e.target.classList.contains('name-input')) {
				if (/[^a-zA-Z\s-]/.test(e.key)) {
					e.preventDefault();
				}
			} else if (e.target.classList.contains('number-input')) {
				if (/[^0-9]/.test(e.key)) {
					e.preventDefault();
				}
			} else if (e.target.classList.contains('phone-input')) {
				if (/[^0-9-]/.test(e.key)) {
					e.preventDefault();
				}
			}
		});
	},

	addCCInputHandler: function() {
		const inputs = document.querySelectorAll('.keypress');
		const ccParent = inputs[0].parentElement;

		ccParent.addEventListener('keydown', (e) => {
			if (/[^0-9]/.test(e.key) || e.target.value.length >= 4) {
				e.preventDefault();
			}
		});
	},

	addCCAssistHandlers: function() {
		const inputs = document.querySelectorAll('.keypress');

		for (let i = 0; i < 3; i += 1) {
			const currentInput = inputs[i];

			currentInput.addEventListener('keyup', (e) => {
				if (e.target.value.length === 4) {
					e.preventDefault();
					currentInput.nextElementSibling.focus();
				}
			});
		}
	},

	addHandlers: function() {
		this.addFocusinHandler.call(this, this.form);
		this.addFocusoutHandler.call(this, this.form);
		this.addSubmitHandler.call(this, this.form);
		this.addKeypressHandler.call(this);
		this.addCCInputHandler.call(this);
		this.addCCAssistHandlers.call(this);
	},

	init: function() {
		this.form = document.querySelector('form');
		this.addHandlers();
	},
}

document.addEventListener('DOMContentLoaded', () => {
	const formValitadorObj = Object.create(FormValidator).init();
});