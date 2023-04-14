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

// const ls = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve('Launch School'), 2000),
//   setTimeout(() => reject("Error: Not Launch School"), 2000);
// })

// ls.then((value) => console.log(value))
//   .catch((value) => console.log(value));

// const promise = new Promise(function (resolve, reject) {
//   resolve("I am a Promise");
// });

// promise.then(value => console.log(value));
// console.log("I am NOT a Promise");

// const promise1 = new Promise((resolve, reject) => {
//   console.log("foo");
//   resolve();
//   console.log("bar");
// });

// promise1.then(() => {
//   console.log("baz");
// });

// console.log("qux");

// const promise = new Promise((resolve, reject) => {
//   console.log("foo");
//   reject();
//   console.log("bar");
// });

// promise
//   .then(() => {
//     console.log("baz");
//   })
//   .catch(() => {
//     console.log("qux");
//   });

// console.log("abc");

// const promise = new Promise(res => res(1));
// promise
//   .then((num) => {
//     console.log(num);
//     return num + 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 3;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 4;
//   })
//   .finally((num) => {
//     console.log(num);
//     return num + 5;
//   });

// const promise = new Promise((resolve, reject) => {
//   resolve("Got it!");
//   reject("Oops.");
//   resolve("Again!");
//   console.log("hiiii")
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function after1s(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 1000);
//   });
// }

// async function test(input) {
//   const a = await after1s(2);
//   const b = await after1s(3);
//   return input * a * b;
// }

// test(3).then((value) => console.log(value));

// function after1s(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 1000);
//   });
// }

// async function test(input) {
//   const a = await after1s(2);
//   const b = await after1s(3);
//   return input * (await a) * (await b);
// }

// test(3).then((value) => console.log(value));

// function after1s(x, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, ms);
//   });
// }

// async function test1(input) {
//   const a = await after1s(2, 2000);
//   const b = await after1s(3, 2000);
//   return input * a * b; // 2 * 2 * 3 --> 12
// }

// async function test2(input) {
//   const a = await after1s(2, 1000);
//   const b = await after1s(3, 1000);
//   return input * a * b; // 3 * 2 * 3 --> 18
// }

// test1(2).then((value) => console.log(value)); // 12 
// test2(3).then((value) => console.log(value)); // 18 

// const testPromise = () => Promise.resolve("1");

// function test1() {
//   let x = testPromise()
//   console.log(x)
//   x.then((result) => console.log(result));
//   console.log("2");
// }

// function test2() {
//   console.log("3");
// }

// test1();
// test2();

// const test = Promise.resolve("A");

// (async () => {
//   try {
//     console.log(test);
//   } catch {
//     console.log("E");
//   } finally {
//     console.log("B");
//   }
// })();

// const test = Promise.reject("A");

// (async () => {
//   try {
//     console.log(await test);
//   } catch {
//     console.log("E");
//   } finally {
//     console.log("B");
//   }
// })();

// let p = new Promise((resolve, reject) => {
//   let value = Math.random();
//   if (value < 0.75) {
//     resolve(value);
//   } else {
//     reject(value);
//   }
// });

// p.resolve(value => console.log(`In range: ${value}`))
//  .reject(value => console.log(`Out of range: ${value}`));

// p.then(value => console.log(`In range: ${value}`))
//  .catch(value => console.log(`Out of range: ${value}`));

// async function showResult(p) {
//   try {
//     console.log(`In range: ${p}`)
//   } catch (error) {
//     console.log(`Out of range: ${error}`);
//   }
// }

// showResult(p);

// const download1 = new Promise((resolve, reject) => {
//   // code to download image 1
//   resolve('Image 1 downloaded');
// });

// const download2 = new Promise((resolve, reject) => {
//   // code to download image 2
//   resolve('Image 2 downloaded');
// });

// const download3 = new Promise((resolve, reject) => {
//   // code to download image 3
//   resolve('Image 3 downloaded');
// });

// Promise.all([download1, download2, download3])
//        .then(messages => messages.forEach(message => console.log(message)));

// const download1 = new Promise((resolve, reject) => {
//   // code to download image 1
//   resolve('Image 1 downloaded');
// });

// const download2 = new Promise((resolve, reject) => {
//   // code to download image 2
//   resolve('Image 2 downloaded');
// });

// const download3 = new Promise((resolve, reject) => {
//   // code to download image 3
//   resolve('Image 3 downloaded');
// });

// Promise.race([download1, download2, download3])
//        .then(message => console.log(message));

// let obj = {
//   names: ['Sue', 'Kim', 'Bob'],
//   [Symbol.iterator]() {
//     return {
//       list: this.names,
//       index: this.names.length,
//       next() {
//         if (this.index === 0) return { done: true };
//         this.index -= 1;
//         return {
//           done: false,
//           value: this.list[this.index],
//         }
//       }
//     };
//   }
// };

// console.log([...obj]); // ['Bob', 'Kim', 'Sue']

// function longDelay() {
//   for (let i = 1; i <= 10; i += 1) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
// }

// longDelay()

// 1, 5, 9, 13, 2, 10, 6, 14

// g, f, d, z, n, s, q

// function afterNSeconds(callback, seconds) {
//   let ms = seconds * 1000;
//   setTimeout(callback, ms);
// }

// afterNSeconds(() => console.log('Butt farts'), 2);

// function startCounting() {
//   let count = 0;
  
//   return setInterval(() => {
//     count += 1;
//     console.log(count);
//   }, 1000);
// }

// let countId = startCounting();

// function stopCounting() {
//   clearInterval(countId);
// }

// document.addEventListener("DOMContentLoaded", event => {
//   const div = document.querySelector('.x');

//   document.body.addEventListener('mousemove', event => {
//     div.style.top = String(event.clientY) + 'px';
//     div.style.left = String(event.clientX) + 'px';
//   });

//   document.body.addEventListener('keydown', event => {
//     const horizontal = document.querySelector('.horizontal');
//     const vertical = document.querySelector('.vertical');
//     let color;

//     if (event.key === 'b' || event.key === 'B') {
//       color = 'blue';
//     } else if (event.key === 'g' || event.key === 'G') {
//       color = 'green';
//     } else if (event.key === 'r' || event.key === 'R') {
//       color = 'red';
//     }

//     if (color) {
//       horizontal.style.background = color;
//       vertical.style.background = color;
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', event => {
//   const textarea = document.body.querySelector('textarea');

//   textarea.addEventListener('keydown', function(event) {
//     let chars = textarea.value.length;
//     let remainingChars = 140 - chars;
//     const paragraph = document.querySelector('.counter');
//     let invalid = remainingChars < 0;

//     paragraph.textContent = String(remainingChars) + ' characters remaining';

//     if (invalid) {
//       paragraph.classList.add('invalid');
//     } else {
//       paragraph.classList.remove('invalid');
//     }

//     console.log(this);
//   })
// });

// console.log("Synchronous #1");

// setTimeout(_ => console.log("Timeout #2"), 0);

// Promise.resolve().then(_ => console.log("Promise #3"));

// console.log("Synchronous #2");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Error: Not Launch School')
//   }, 2000);
// });

// promise
//   .catch(text => {
//     console.log(text);
//   });

// const promise = new Promise(function (resolve, reject) {
//   resolve("I am a Promise");
// });

// promise.then(value => console.log(value));
// console.log("I am NOT a Promise");

// const promise1 = new Promise((resolve, reject) => {
//   console.log("foo");
//   resolve();
//   console.log("bar");
// });

// promise1.then(() => {
//   console.log("baz");
// });

// console.log("qux");

// const promise = new Promise((resolve, reject) => {
//   console.log("foo");
//   reject();
//   console.log("bar");
// });

// promise
//   .then(() => {
//     console.log("baz");
//   })
//   .catch(() => {
//     console.log("qux");
//   });

// console.log("abc");

// const promise = new Promise((res, reject) => reject(1));
// promise
//   .then((num) => {
//     console.log(num);
//     return num + 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 3;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 4;
//   })
//   .catch((param) => {
//     console.log('reject ' + String(param));
//     return () => { console.log('reject callback') }
//   })
//   .finally((num) => {
//     console.log(num);
//     return num + 5;
//   });

//   // logs 1, 3, 6, undefined

// const promise = new Promise((resolve, reject) => {
//   resolve("Got it!");
//   reject("Oops.");
//   resolve("Again!");
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function after1s(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 1000);
//   });
// }

// async function test(input) {
//   const a = await after1s(2);
//   const b = await after1s(3);
//   const c = await after1s(4);
//   return input * a * b * c;
// }

// let start = new Date() 
// let startTime = start.getTime();

// test(3).then((value) => {
//   console.log(value)
//   let end = new Date() 
//   let endTime = end.getTime();
//   console.log(endTime - startTime);
// });


// function after1s(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 1000);
//   });
// }

// async function test(input) {
//   const a = await after1s(2);
//   const b = await after1s(3);
//   return input * (await a) * (await b);
// }

// test(3).then((value) => console.log(value));

// function after1s(x, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, ms);
//   });
// }

// async function test1(input) {
//   const a = await after1s(2, 2000);
//   const b = await after1s(3, 2000);
//   return input * a * b;
// }

// async function test2(input) {
//   const a = await after1s(2, 1000);
//   const b = await after1s(3, 1000);
//   return input * a * b;
// }

// test1(2).then((value) => console.log(value)); // 12 after 4 seconds
// test2(3).then((value) => console.log(value)); // 18 after 2 sconds

// const testPromise = () => Promise.resolve("1");

// function test1() {
//   testPromise().then((result) => console.log(result));
//   console.log("2");
// }

// function test2() {
//   console.log("3");
// }

// test1();
// test2();

// const test = Promise.resolve("A");

// (async () => {
//   try {
//     console.log(await test);
//   } catch {
//     console.log("E");
//   } finally {
//     console.log("B");
//   }
// })();

// const test = Promise.reject("A");

// (async () => {
//   try {
//     console.log(await test);
//   } catch {
//     console.log("E");
//   } finally {
//     console.log("B");
//   }
// })();

// function callback1() {
//   console.log('callback1');
// }

// function callback2() {
//   console.log('callback2');
// }

// function callback3() {
//   console.log('callback3');
// }

// function randomizer(...callbacks) {
//   let secondsEnd = callbacks.length * 2;
//   let secondsElapsed = 0;

//   callbacks.forEach(callback => {
//     let randomSeconds = Math.floor(Math.random() * secondsEnd * 1000);
//     setTimeout(callback, randomSeconds);
//   });

//   const timeLogger = setInterval(() => {
//     secondsElapsed += 1;
//     console.log(secondsElapsed);

//     if (secondsElapsed >= secondsEnd) {
//       clearInterval(timeLogger);
//     }
//   }, 1000)
// }

// randomizer(callback1, callback2, callback3);

// // Output:
// // 1
// // 2
// // "callback2"
// // 3
// // "callback3"
// // 4
// // 5
// // "callback1"
// // 6


// // Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

// document.querySelector('html').addEventListener('click', (event) => {
//   const conatiner = document.querySelector('#container')
  
//   if (conatiner.contains(event.target)) {
//     conatiner.style = 'display: none';
//   }
// });

// // document.querySelector('#container').addEventListener('click', event => {
// //   event.stopPropagation();
// // });

///////////////////////

// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';
  
//   if (callback && typeof callback === 'function') {
//     callback(element);
//   }
// }

// let sectionElement = document.querySelector('section');
// const myEvent = new CustomEvent('bolded');

// sectionElement.addEventListener('bolded', e => {
//   makeBold(sectionElement, (sectionElement, elem => {
//     elem.classList.add('highlight')
//   }));
// })

// sectionElement.dispatchEvent(myEvent);

// console.log(sectionElement.classList.contains('highlight'));
// // true
// console.log(sectionElement.style.fontWeight);
// // "bold"

// let sectionElement = document.querySelector('section');

// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';
//   const myEvent = new CustomEvent('bolded');

//   element.dispatchEvent(myEvent);
// }

// sectionElement.addEventListener('bolded', e => {
//   e.target.classList.add('highlight');
// })

// makeBold(sectionElement)


// console.log(sectionElement.classList.contains('highlight'));
// // true
// console.log(sectionElement.style.fontWeight);
// // "bold"

// document.addEventListener('DOMContentLoaded', (e) => {
//   const main = document.querySelector('main');
  
//   main.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     if (e.target.nodeName === "MAIN") {
//       alert('MAIN');
//     } else if (e.target.nodeName === "SECTION") {
//       alert('SECTION');
//     }
//   });
// });

const CLASSIFICATION_OPTIONS = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
}

const ANIMAL_OPTIONS = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

function unhideAll(animals, classifications) {
  [animals, classifications].forEach(selection => {
    [...selection.children].forEach(option => {
      option.removeAttribute('hidden');
    })
  });
}

document.addEventListener('DOMContentLoaded', (e) => {
  const classifications = document.getElementById('animal-classifications');
  const animals = document.getElementById('animals');

  function hideOptions(targetValue, selectionType) {
    unhideAll(animals, classifications) 
    let matchingOptions;
    
    if (selectionType.id === 'animals') {
      matchingOptions = CLASSIFICATION_OPTIONS[targetValue];
    } else if (selectionType.id === 'animal-classifications') {
      matchingOptions = ANIMAL_OPTIONS[targetValue];
    }

    [...selectionType.children].forEach(selectionOption => {
      if (!matchingOptions.includes(selectionOption.value)) {
        selectionOption.setAttribute('hidden', 'true');
      }
    });
  }

  classifications.addEventListener('change', (e) => {
    let targetIndex = e.target.selectedIndex;
    let currentValue = e.target.options[targetIndex].value;
    hideOptions(currentValue, animals);
  });

  animals.addEventListener('change', (e) => {
    let targetIndex = e.target.selectedIndex;
    let currentValue = e.target.options[targetIndex].value;
    hideOptions(currentValue, classifications);
  });
});