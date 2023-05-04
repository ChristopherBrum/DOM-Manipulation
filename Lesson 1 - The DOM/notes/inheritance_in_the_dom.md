# Inheritance in the DOM

We can think of the types further indented to the right will inherit from the type less indented to the left:

- EventTarget
  - Node
    - Text
    - Comment
    - Document
    - Element
      - HTMLElement
        - HTMLAnchorElement
        - HTMLBodyElement
        - HTMLButtonElement
        - HTMLDivElement
        - etc.
      - SVGElement
        - SVGColorElement
        - SVGRectElement
        - etc, etc.

_Nearly every HTML element has its own Element subtype, but not all._

Important things to remember about the different types:

- `EventTarget` provides even handling behavior that enables interactive web apps.
- `Node` provides common behaviors to _all_ nodes.
- `Text` and `Element` are the primary subtypes of `Node`.
  - `Text` nodes contain/hold text.
  - `Element` nodes represent HTML tags.
- Most HTML tags correlate to specific subtypes that inherit from `HTMLElement`.
- There are other element types, such as `SVGElement`.
