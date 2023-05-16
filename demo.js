document.addEventListener('DOMContentLoaded', () => {
	const div = document.querySelector('div');

	function logEventTarget(event) {
		console.log(event.target);
	}
	
	div.addEventListener('click', logEventTarget);
})