# What does `DOMContentLoaded` used for?

```js
document.addEventListener('DOMContentLoaded', event => {
  // ...
});
```

- The code above registers a **callback** to handle the `'DOMContentLoaded'` event when it's fired on `document`. When the browser fully loads the HTML and builds the DOM, it **fires** the `'DOMContentLoaded'` event on `document`.
- The browser invokes the event handler for `'DOMContentLoaded'` and registers any event listeners contained within it.
- The browser then waits for an event.
