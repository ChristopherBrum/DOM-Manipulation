document.addEventListener('DOMContentLoaded', async (e) => {
	const figures = document.querySelectorAll('figure');
	const container = document.getElementById('container');
	let hoverTimeout;

	figures.forEach((figure) => {
		const figCaption = figure.children[1];
		const img = figure.children[0];
		figCaption.textContent = img.getAttribute('alt')
	});
});