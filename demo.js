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

// document.addEventListener('DOMContentLoaded', () => {
// 	const request = new XMLHttpRequest();
// 	request.open('GET', 'https://pokeapi.co/api/v2/ability/1/');
// 	request.setRequestHeader('Content-Type', 'application/json');
// 	const json = JSON.stringify({name: 'Chris'});
// 	request.send(json);

// 	request.addEventListener('load', (e) => {
// 		const response = request.response;
		
// 		console.log(response);          // {"effect_changes":[{"effect_entries"...
// 		console.log(response.status);   // 200
// 	});
// })

// function walk(node, callback) {
//   callback(node);                                                   
//   for (let index = 0; index < node.childNodes.length; index += 1) { 
//     walk(node.childNodes[index], callback);
//   }
// }

// walk(document, node => {                          
// 	console.log(node instanceof HTMLElement);
	
// 	if (node instanceof HTMLElement) {
// 		console.log(node);
// 	}
// });







// document.addEventListener('DOMContentLoaded', () => {
// 	function walkList(node) {

// 		if (node instanceof HTMLElement && node.classList.contains('list-group')) {
// 			let childNodes = [...node.childNodes]

// 			for (let i = 0; i < childNodes.length; i += 1) {
// 				console.log(childNodes[i])
// 				if (childNodes[i].tagName === 'LI') {

// 				}
// 			}
// 			// if ()) {
// 			// 	console.log(node.textContent.trim() + ':');
// 			// } else if (node.classList.contains('list-item')) {
// 			// 	console.log('  ' + node.textContent.trim());
// 			// }
// 		}

// 		for (let index = 0; index < node.childNodes.length; index += 1) {
// 			walkList(node.childNodes[index]);
// 		}
// 	}
	
// 	walkList(document.body);
// })

// function getMeSomeWeather() {
// 	return new Promise((resolve, reject) => {
// 		const request = new XMLHttpRequest();
// 		request.open('GET', 'https://api.weather.gov/points/39.7456,-97.0892');
// 		request.responseType = 'json';
		
// 		request.onload = function () {
// 			if (request.status === 200) {
// 				resolve(request.response);
// 			} else {
// 				reject(request.status);
// 			}
// 		};

// 		request.onerror = function () {
// 			reject('Network error');
// 		};

// 		request.send();
// 	});
// }

// getMeSomeWeather()
// 	.then(response => console.log(response))
// 	.catch(error => console.error(error));

document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector("div");
  const divChildren = div.childNodes;

  console.log(divChildren.length); // 10

  const paragraph = document.createElement("p");
  div.appendChild(paragraph);

  console.log(divChildren.length); // 11
})