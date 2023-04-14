# The Event Loop

- Check the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop) for a detailed explanation.

As the JS engine executes code synchronously. Code that cannot be executed synchronously will be passed off to a WebAPI while it completes execution. The code passed to the WebAPI will then be placed in a task queue (callback queue) as a message. The event loop continuously monitors the call stack and when the stack is empty it will pop off a message from the task queue and push it onto the call stack to be executed.

## How the event loop works

- When a JS file is run, a main function is created and placed onto _the stack_, which contains all globally scoped artifacts. When a function invocation is encountered, the JS runtime places that function, and its context(containing a reference to all variables in scope), into a frame that goes on top of the stack. Once the code within that function is finished executing the frame is removed, or "popped off", the stack.
- Because JS is single-threaded, only one line of code can be executed at a time. If the code currently being executed is slow, the subsequent code cannot be executed and the slow code is considered to be _blocking_ the rest.
- Although JS itself only has the stack and the heap built-in, the browser allows for different functionality. It allows us to invoke a piece of code asynchronously, by passing a frame to an external WebAPI that will execute the code appropriately and will remove the frame from the stack, and allow the JS code to continue executing.
- Once this asynchronous code is done executing it will be placed into a _callback queue_ as a _callback_. The event loop monitors the stack to determine when it is empty, at which point it will push any callbacks in the queue onto the stack to be executed.  

- Another thing to note: when code is executing synchronously, the browser's ability to re-render with any updates to the DOM is blocked.

## Micro and Macro Task Queue

- Macro tasks (`setTimeout`, `swetInterval`, etc.) will be "called back" on the next event loop.
- Micro tasks (fulfilled promise, etc.) will be "called back" before the start of the next event loop.

```js
console.log("Synchronous #1");
  
setTimeout(_ => console.log("Timeout #2"), 0); // macro task
   
Promise.resolve().then(_ => console.log("Promise #3")); // micro task
  
console.log("Synchronous #4");

// Synchronous #1
// Synchronous #4
// Promise #3
// Timeout #2
```
