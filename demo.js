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

document.addEventListener('DOMContentLoaded', event => {
  const textarea = document.body.querySelector('textarea');

  textarea.addEventListener('keydown', function(event) {
    let chars = textarea.value.length;
    let remainingChars = 140 - chars;
    const paragraph = document.querySelector('.counter');
    let invalid = remainingChars < 0;

    paragraph.textContent = String(remainingChars) + ' characters remaining';

    if (invalid) {
      paragraph.classList.add('invalid');
    } else {
      paragraph.classList.remove('invalid');
    }

    console.log(this);
  })
});