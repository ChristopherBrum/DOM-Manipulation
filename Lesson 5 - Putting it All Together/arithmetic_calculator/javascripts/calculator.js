/*
- grab current value of input "first-number" on keydown
- grab current value of select option "operator" on selection
- grab current value of input "second-number" on keydown

- determine the selected operator
- on "click"
	- perform the appropriate operation on the numbers
	- display the result in the "result" header 
*/

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	const firstInput = document.querySelector('#first-number');
	const secondInput = document.querySelector('#second-number');
	const dropdown = document.querySelector('#operator');
	const result = document.querySelector('#result');

	const Calculate = {
		'+': (first, second) => first + second,
		'-': (first, second) => first - second,
		'*': (first, second) => first * second,
		'/': (first, second) => (first / second).toFixed(1),
	}

	firstInput.addEventListener('focus', () => {
		if (firstInput.value === '0') firstInput.value = '';
	});

	firstInput.addEventListener('focusout', () => {
		if (firstInput.value === '') firstInput.value = '0';
	})

	secondInput.addEventListener('focus', () => {
		if (secondInput.value === '0') secondInput.value = '';
	});

	secondInput.addEventListener('focusout', () => {
		if (secondInput.value === '') secondInput.value = '0';
	})
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let firstNum = Number(firstInput.value, 10) || 0;
		let secondNum = Number(secondInput.value, 10) || 0;
		let operation = Calculate[dropdown.value]
		let finalCalculation = operation(firstNum, secondNum);
		
		result.textContent = String(finalCalculation);
	})
});