function getWeather() {
	return new Promise(function(resolve, reject) {
		fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
			.then((response) => response.json())
			.then((data) => resolve(data.properties.periods[0].shortForecast))
			.catch((err) => reject(err));
	});
}

function onSuccess(weather) {
	console.log(weather);
}

function onError(error) {
	console.log('Error:', error);
}

getWeather()
	.then(onSuccess)
	.catch(onError);