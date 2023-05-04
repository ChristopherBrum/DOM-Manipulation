function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let secondsEnd = callbacks.length * 2;
  let secondsElapsed = 0;

  callbacks.forEach(callback => {
    let randomSeconds = Math.floor(Math.random() * secondsEnd * 1000);
    setTimeout(callback, randomSeconds);
  });

  const timeLogger = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);

    if (secondsElapsed >= secondsEnd) {
      clearInterval(timeLogger);
    }
  }, 1000)
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6