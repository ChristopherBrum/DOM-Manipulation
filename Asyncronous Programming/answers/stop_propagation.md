# `stopPropagation`

- If we wanted to prevent the invocation of multiple listeners that would otherwise be invoked by an event, we can choose to stop the `Event` object from continuing its normal path of execution along the capturing/bubbling phases using the `stopPropagation` method, available on all `Event` objects.
- This can be beneficial in situations where multiple listeners would normally be fired by a single event, but we want to prevent all but the initial listener from being executed.
  - If we have a "click" event on a parent element as well as a child element and only wanted to allow the child element's listener to execute, we could use `stopPropagation` within the handler for the child element to stop subsequent listeners from being fired.
  - Likewise, if we have a "click" event on a parent element as well as a child element and only wanted to allow the parent element's listener to execute, we could use `stopPropagation` in conjunction with setting the listener's `useCapture` to true so that the parent elements listener is invoked on the capture phase, and subsequent listeners will not be invoked.
- It is best practice to call `stopPropagation` as early as possible within a listener.
