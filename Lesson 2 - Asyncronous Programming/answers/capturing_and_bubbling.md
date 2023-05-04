# Capturing and Bubbling

- Capturing and bubbling are two of the 3 phases of event propagation. The third phase being the event finding the target that instigated/created the event.
  - **Capturing phase** -- when an event is fired, an `Event` object is created and passed down to the `window` object, then to the `document` object, then all the way down to the target object for which the event was triggered/fired.
  - **Target phase** -- the `Event` object reaches the element on which the event was fired and invokes its event handler/listener. The target element _may_ not have a listener attached to it directly, as the listener can be attached to a parent element.
  - **Bubbling phase** -- the `Event` object now travels from the _target_ element back up the hierarchy of nodes to the `document` object, and onto the `window` object. The term _"bubbling"_ refers to the fact that the target element may not have a listener attached to it directly, but the event will "bubble up" from the target element to a parent/grandparent/great-grandparent/etc element that does have a listener attached where the listener is actually invoked, then onto `document` and `window`, etc. This allows an event listener to be invoked when elements that do not have a listener are directly attached to them, fire/trigger an event.

- The event element gets dispatched to each element twice; once during the capturing phase, and once during the bubbling phase.
- The actual event listener only gets called/fired in one phase.
- By default, event listeners are invoked on the "bubbling" phase, but can be set to listen on the "capturing" phase by setting the optional argument `useCapture` to `true`.

```js
elem1.addEventListener('click', callbackFunction, true);
```
