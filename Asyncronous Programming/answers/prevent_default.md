# `preventDefault`

- There are times that we may want to prevent the behavior that the browser would perform in response to a user's input. For example, clicking on a link would normally load a new page in the browser. We can prevent this default behavior by using the `preventDefault` method, available on all `Event` objects.
- Any code/behavior defined in a listener that has called `preventDefault` will not be affected by this method.
- It is best practice to call `preventDefault` as early as possible within a listener.
- Things to note about `preventDefault`:
  - The default behavior isn't for the event listener it's attached to, it's for the `Event` object.
  - Default browser behavior occurs after the capture/bubble phases. If multiple listeners are fired off of a single event and one of these listeners invokes `preventDefault`, the default behavior for each event listener fired by the event will be prevented regardless of where `preventDefault` was invoked within the event propagation process.
