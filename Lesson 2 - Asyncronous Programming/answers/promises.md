# Promises

Think of it like a ride-handling app. When you request a ride the driver makes a _promise_ to pick you up. While you're waiting the ride is _pending_. In the future, if all goes to plan the driver will _resolve_ to pick you up, _then_ take you somewhere at which point your ride has been _fulfilled_. But, in some cases, the driver might _reject_ your ride, in which case you'll need to _catch_ one somewhere else. Either way, the final request is now finally _settled_.

A promise represents a value that is unknown now but may become known in the future. It manages an asynchronous value.

**Create a Promise:**

- When you first create a Promise you will pass it a callback function called an _executor_, which defines when to resolve or reject the promise.
- This is where you will kick off your asynchronous code.
- If the asynchronous code produces the expected value, then we will call the `resolve` method.
- If it doesn't, then the `reject` method will be called.
- Prior to `resolve` or `reject` being invoked, the promise is considered to be _pending_. Once `resolve` or `reject` is invoked, the promise will be considered _fulfilled_.

```js
const ride = new Promise((resolve, reject) => {
  if (some condition....) {
    resovle(pass in values if needed)
  } else {
    reject(pass in values as needed)
  }
})
```

**Consume a Promise:**

- The Promise is waiting for the asynchronous value to be fulfilled, once that occurs it will call the `then` method. And the callback passed to `then` will be executed.
- If there is an exception, the promise will be rejected and we can invoke the `catch` method which will execute a callback to handle the exception.
- You also have the option to invoke the `finally` method on the promise which will always execute regardless of whether the promise is resolved or rejected.

```js
ride
  .then(value => {
    console.log(value);
    // ...more code
  })
  .catch(error => {
    console.log(error);
    // ...more code
  })
  .finally(() => {
    console.log('all settled!');
  })
```

- Each of these methods returns a promise, which means you can handle multiple asynchronous operations in a row if you desire.

```js
promise
  .then(...)
  .then(...)
  .then(...)
  .catch()
```
