# Promises and Async/Await Practice Problems

1. Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Launch School')
  }, 2000);
});

promise
  .then(text => {
    console.log(text);
  });
```

2. Create a Promise that rejects with a value of "Error: Not Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's rejected value by using the .catch method.​

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Not Launch School')
  }, 2000);
});

promise
  .catch(text => {
    console.log(text);
  });
```

