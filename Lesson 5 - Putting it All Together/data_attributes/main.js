// $(function() {
// 	$('article').hide();
	
// 	$('a').on('click', function(e) {
// 		e.preventDefault();

// 		$('article').each(function(idx) {
// 			let $currentDataBlock = $(this).attr('data-block');
// 			let $currentTargetBlock = $(e.target).attr('data-block');
// 			if ($currentDataBlock === $currentTargetBlock) {
// 				$(this).show();
// 			} else {
// 				$(this).hide();
// 			}
// 		});
// 	});
// });

document.addEventListener('DOMContentLoaded', (e) => {
	let anchors = document.querySelectorAll('a');
	let articles = document.querySelectorAll('article');
	let ul = document.querySelector('ul');

	articles.forEach((article) => {
		article.setAttribute('hidden', 'true');
	});

	ul.addEventListener('click', (e) => {
		let selectedId;

		anchors.forEach((anchor) => {
			let currentDataBlock = anchor.dataset.block;
			if (e.target.dataset.block === currentDataBlock) {
				selectedId = currentDataBlock;
			}
		});

		articles.forEach((article) => {
			if (article.id === selectedId) {
				article.removeAttribute('hidden');
			} else {
				article.setAttribute('hidden', true);
			}
		});
	})
	
});