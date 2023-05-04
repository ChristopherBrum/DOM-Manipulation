# Steps to Set up an Event Handler

1. **Identify the event needing to be handled**. User actions('click', 'keydown', etc.), the page lifecycle, etc.
2. **Identify the element that will receive the event**. Depends on the event. It could be a button, an input field, or any other element on the page.
3. **Define a function to call when this event occurs**. This function is passed as a single argument (an event object).
4. **Register the function as an event listener**. Ties the previous 3 points together.

---

## Where can we obtain additional information about an event when creating an event handler?

- The argument of an event listener/handler will be passed an `Event` object that has special properties that we can access within the handler. Such as:
  - `type` -- the name of the event (i.e., 'click')
  - `currentTarget` -- the current object that the `Event` object is on (i.e., the object that had the event listener attached to it)
  - `target` -- the object that the event occurred on (i.e., the element "clicked" by the user)

---

## What's the difference between the `target` and `currentTarget` properties of an `Event` object?

- The `target` property returns the element that the event occurred. For example, if an event listener is attached to a `div` element that contains a `p` element and we click on the `p` element, `p` would be returned by `target` as it is the element in which the "click" event occurred.
- The `currentTarget` property will return the element to which the listener was attached.

---

## What is the value of `this` within a handler when using a function expression? What about an arrow function?

- When using a function expression `this` will reference the element that the listener was attached to.
- When using an arrow function `this` will reference the `window` object in the browser.
