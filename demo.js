document.addEventListener('DOMContentLoaded', () => {
	// const promise = new Promise(function(resolve, reject) {
	// 	const data = fetch('https://api.weather.gov/products');
	// 	resolve(data);	
	// });

	// promise
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.log(err))
	// 	.finally(() => console.log("it's over now"));

	const request = new XMLHttpRequest();
	request.open('GET', 'https://api.weather.gov/points/39.7456,-97.0892');
	
	document.addEventListener('load')
});