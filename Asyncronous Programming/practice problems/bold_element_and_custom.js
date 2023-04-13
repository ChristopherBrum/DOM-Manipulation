// Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8">
//     <title>Bold Element + Custom</title>
//   </head>
//   <body>
//     <section>Hello World</section>
//     <p>Greetings!</p>
//   </body>
// </html>

////////////////////////////////////////

function makeBold(element, callback) {
  element.style.fontWeight = 'bold';
  if (callback && typeof callback === 'function') {
    callback(element);
  }
}

let sectionElement = document.querySelector('section');

makeBold(sectionElement, function(elem) {
  elem.classList.add('highlight');
});

console.log(sectionElement.classList.contains('highlight'));
// true
console.log(sectionElement.style.fontWeight);
// "bold"

////////////////////////////////////////
// SOLUTION USING CUSTOM EVENT

function makeBold(element, callback) {
  element.style.fontWeight = 'bold';
  if (callback && typeof callback === 'function') {
    callback(element);
  }
}

let sectionElement = document.querySelector('section');
const myEvent = new CustomEvent('bolded');

sectionElement.addEventListener('bolded', e => {
  makeBold(sectionElement, (sectionElement, elem => {
    elem.classList.add('highlight')
  }));
})

sectionElement.dispatchEvent(myEvent);

console.log(sectionElement.classList.contains('highlight'));
// true
console.log(sectionElement.style.fontWeight);
// "bold"

////////////////////////////////////////
// REFACTORED CUSTOM EVENT 

let sectionElement = document.querySelector('section');

function makeBold(element, callback) {
  element.style.fontWeight = 'bold';
  const myEvent = new CustomEvent('bolded');

  element.dispatchEvent(myEvent);
}

sectionElement.addEventListener('bolded', e => {
  e.target.classList.add('highlight');
})

makeBold(sectionElement)


console.log(sectionElement.classList.contains('highlight'));
// true
console.log(sectionElement.style.fontWeight);
// "bold"