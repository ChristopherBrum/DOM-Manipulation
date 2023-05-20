// function getWeather() {
// 	return new Promise(function(resolve, reject) {
// 		fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
// 			.then((response) => response.json())
// 			.then((data) => resolve(data.properties.periods[0].shortForecast))
// 			.catch((err) => reject(err));
// 	});
// }

// function onSuccess(weather) {
// 	console.log(weather);
// }

// function onError(error) {
// 	console.log('Error:', error);
// }

// getWeather()
// 	.then(onSuccess)
// 	.catch(onError);

document.addEventListener('DOMContentLoaded', () => {
	const request = new XMLHttpRequest();
	request.open('GET', 'https://pokeapi.co/api/v2/ability/1/');
	request.setRequestHeader('Content-Type', 'application/json');
	const json = JSON.stringify({name: 'Chris'});
	request.send(json);

	request.addEventListener('load', (e) => {
		console.log(e.target);          // XMLHttpRequest { ... }
		console.log(e.target.status);   // 200
		console.log(e.target.response); // {"effect_changes":[{"effect_entries"...
	});
})