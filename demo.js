// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, etc. Note that the computation of the time is not dependent on when a previous number was logged. This means that for 10 numbers a total of 10 seconds would have passed.

// function delayLog() {
//   for (let i = 1; i <= 10; i += 1) {
//     setTimeout(() => console.log(i), (i * 1000));
//   }
// }

// delayLog();
// 1 second later
// 2 seconds later
// 3 seconds later
// etc...

// f, g, d, z, n, s, q

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, (seconds * 1000));
// }

// function startCounting() {
//   let sequence = function() {
//     let num = 0;

//     return function() {
//       num += 1;
//       console.log(num);
//     }
//   }();

//   return setInterval(sequence, 1000);
// }

// function stopCounting(identifier) {
//   clearInterval(identifier);
// }

// let identifier = startCounting();

// function displayAlert(event) {
//   let message = document.getElementById('message').value;
//   alert(message);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   let button = document.getElementById('alert');
//   button.addEventListener('click', event => {
//     displayAlert();
//     console.log(event);
//   }); 
// });

// let elem1 = document.querySelector('#elem1');
// let elem4 = document.querySelector('#elem4');

// elem1.addEventListener('click', event => alert(event.currentTarget.id), true);
// elem4.addEventListener('click', event => alert(event.currentTarget.id));

// let divs = document.querySelectorAll('.pick');

// for(let index = 0; index < divs.length; index += 1) {
//   divs[index].addEventListener('click', highlightThis, true);
// }
    
// function highlightThis(e) {
//   alert(`${this.className} ${e.currentTarget.tagName}`);
// }

// let elem0 = document.querySelector('#elem0');
// let elem1 = document.querySelector('#elem1');
// let elem4 = document.querySelector('#elem4');

// elem0.addEventListener('click', event => alert(event.currentTarget.id));
// elem1.addEventListener('click', event => alert(event.currentTarget.id), true);
// elem4.addEventListener('click', event => alert(event.currentTarget.id));