document.addEventListener('DOMContentLoaded', () => {
	const team = document.querySelector('#team');
	const modalX = document.querySelector('#modal-x');
	const modalContainer = document.querySelector('#modal-container');
 
	function showModal(targetElement) {
		const targetName = targetElement.getAttribute('alt');
		const targetImage = targetElement.getAttribute('src');
		document.querySelector('#modal-name').textContent = targetName;
		document.querySelector('#modal-img').setAttribute('src', targetImage);
		modalContainer.removeAttribute('hidden');
	}

	function hideModal() {
		modalContainer.setAttribute('hidden', 'true');
	}

	team.addEventListener('click', (e) => {
		if (e.target.nodeName === 'A') {
			showModal(e.target.firstElementChild);
		} else if (e.target.nodeName === 'IMG') {
			showModal(e.target);
		}
	});

	modalX.addEventListener('click', (e) => {
		hideModal();
	});

	modalContainer.addEventListener('click', (e) => {
		if (e.target === modalContainer) {
			hideModal();
		}
	});
});
