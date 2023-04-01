# Determining the Type of a Node

## Nodes and Elements

There are different types of DOM objects: Nodes, Elements, Text, etc. The Element type is broken down into further subtypes. It may be confusing to determine the exact type, so here are some guidelines:

- All DOM objects are Nodes.
- All DOM objects have a type that inherits from Node.
- Element and Text are the most common DOM objects.
- The type is important to know because different types provide different properties and methods that can be used.

![[Screenshot 2023-03-22 at 11.28.18 AM.png]]

## Inheritance in the DOM

See [[Inheritance in the DOM]] for more info.

- A rough layout of DOM inheritance:

```text
- EventTarget (topmost)
  - Node
    - Text
    - Comment
    - Document
    - Element
      - HTMLAnchorElement (< Element < Node < EventTarget)
      - HTMLBodyElement
      - etc.
    - SVGElement
      - SVGColorElement
      - SVGRectangleElement
      - etc.
```

- Nearly every HTML element has its own Element subtype, but not all._
- `EventTarget` provides even handling behavior that enables interactive web apps.
- `Node` provides common behaviors to _all_ nodes.
- `Text` and `Element` are the primary subtypes of `Node`.
  - `Text` nodes contain/hold text.
  - `Element` nodes represent HTML tags.
- Most HTML tags correlate to specific subtypes that inherit from `HTMLElement`.
- There are other element types, such as `SVGElement`.

## Determining the Node Type

One of the simplest ways to determine the type of a node is by using the `Object.getPrototypeOf` method to return the prototype object of the DOM element in question.

```node
> Object.getPrototypeOf(p);
// HTMLParagraphElement {Symbol(Symbol.toStringTag): 'HTMLParagraphElement', onmouseenter: undefined, onmouseleave: undefined, constructor: ƒ}
```

### Additional Ways of Determining the Node Type

#### Best From the Console

Using the `toString` or `String` method can be very useful while in the browser utilizing the console and dev tools. The object returned from calling either of these methods is the node's type name, most of the time.

```node
> p.toString()
// "[object HTMLParagraphElement]"
```

This is not always the case, though. For example, the `HTMLAnchorElement` does not return the same value when `toString` is invoked. The URL from the link is instead returned.

```node
> let a = document.querySelector('a'); 
> a 
// <a href="http://domain.com/page">Page</a> 
> a.toString();
// "http://domain.com/page"
```

One workaround for this is to check the `constructor` property. Depending on the browser this may return additional information that may be clumsy to navigate.

#### Best From a Program

From within the program, it is best to use the `instanceof` operator or the `tagName` property.

The downside of using the `instanceof` operator is that you must specify an HTMLElement with it. Although, if you're just attempting to ensure the node is an Element, you can test it against `Element`.

```node
> p instanceof HTMLParagraphElement
// true

> p instanceof HTMLAnchorElement
// false

> p instanceof Element
// true
```

Referencing the `tagName` property will return the HTML tag name of an Element instead of the actual HTMLElement name.

```node
> p.tagName; 
// "P"
```
