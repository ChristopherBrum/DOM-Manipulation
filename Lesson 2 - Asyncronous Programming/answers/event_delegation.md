# Event Delegation

- Event delegation is a strategy that takes advantage of event propagation by attaching an event listener to a parent element/grandparent element/element higher up the DOM tree to watch for events occurring on any child element, or element further down the DOM tree hierarchy.  
- This allows us to:
  - add new elements to the DOM without needing to explicitly add listeners to each new element as they're created.
  - make our code more performative by not needing to attach an individual listener to every element that may trigger an event.
- This can be complicated if we have a parent element with _many_ children elements. As identifying each individual child element within the single event listener can become difficult.

- Start by attaching event listeners to each individual element. As code grows in size/complexity, delegation may become beneficial to reduce the number of handlers needed.

## What Problesm does Event Delegation Address?

1. You can't add an event listener to DOM and must wait for the `DOMContentLoaded` event to fire.
2. You must add event listeners to the DOM manually when you add new elements to the page after the `DOMContentLoaded` event has fired.
3. Adding listeners to many elements can be slow and can make your code difficult to maintain.

- **Event Delegation** provides solutions for these problems.
