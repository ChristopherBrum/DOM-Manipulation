/*
- save currently selected image to selectedImage variable
- save main image tag to mainImage variable

- add event listener to each img holding thumbnail images
	- if selected:
		- remove selected class from selectedImage
		- add selected class to clicked image
		- set selectedImage to clicked image
		- replace the src attribute to the clicked images src attribute value

- figure out the animation portion of the assignment. 
	- css animations?
	- JS animations? 
*/

// document.addEventListener('DOMContentLoaded', () => {
// 	let mainImage;
// 	let selectedImage;

// 	function addImageListener(currentImage) {
// 		currentImage.addEventListener('click', (e) => {
// 			// swap the selected class from previously selected image to currently selected image
// 			selectedImage.classList.remove('selected');
// 			currentImage.classList.add('selected')
// 			// set newly selected image to selectedImage
// 			selectedImage = currentImage;

// 			// replace the mainImage elements src value with the currentImages src value
// 			fadeAndSwapMainImage(currentImage);
// 		});
// 	}

// 	document.querySelectorAll('img').forEach(currentImage => {
// 		if (currentImage.title) {
// 			// add listener to each img element with a title attribute
// 			addImageListener(currentImage);

// 			// if image element has the class selected, set to the selectedImage variable
// 			if (currentImage.classList.contains('selected')) {
// 				selectedImage = currentImage;
// 			}
// 		} else {
// 			// the image element without a title attribute will be set to the mainImage variable
// 			mainImage = currentImage;
// 		}
// 	});

// 	function fadeAndSwapMainImage(currentImage) {
// 		let imageContainer = document.querySelector('figure');
		
// 		imageContainer.classList.add('fade-out');
// 		setTimeout(() => {
// 			mainImage.setAttribute('src', currentImage.getAttribute('src'));
// 			imageContainer.classList.add('fade-in');
// 		}, 300);
// 		imageContainer.classList.remove('fade-in');
// 	}
// });

document.addEventListener('DOMContentLoaded', () => {
	let mainImage;
	let selectedImage;

	function addImageListener(currentImage) {
		currentImage.addEventListener('click', (e) => {
			selectedImage.classList.remove('selected');
			currentImage.classList.add('selected')
			selectedImage = currentImage;
			fadeAndSwapMainImage(currentImage);
		});
	}

	document.querySelectorAll('img').forEach(currentImage => {
		if (currentImage.title) {
			addImageListener(currentImage);

			if (currentImage.classList.contains('selected')) {
				selectedImage = currentImage;
			}
		} else {
			mainImage = currentImage;
		}
	});

	function fadeAndSwapMainImage(currentImage) {
		const slideShow = document.querySelector('figure');
		
		slideShow.classList.add('fade-out');
		setTimeout(() => {
			mainImage.setAttribute('src', currentImage.getAttribute('src'));
			slideShow.classList.add('fade-in');
		}, 300);
		slideShow.classList.remove('fade-in');
	}
});