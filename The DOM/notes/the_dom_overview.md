# The DOM Overview

## The Document Object Model (DOM)

The DOM is an object-oriented representation of an HTML doc. It represents a document (usually HTML) as a hierarchy of nodes that provide a way of interacting with a webpage in order to modify its structure, style, or content, via a programming language (usually JavaScript).

All web pages consist of a [[Hierarchy of Nodes|hierarchal tree of nodes]]. Every node represents a special type of [[Node Properties]].

The DOM is not a part of JavaScript. It is a Web API made available by the browser. It is most commonly utilized by JavaScript but can be accessed in other ways.

## A Hierarchy of Nodes

See [Hierarchy of Nodes](./hierarchy_of_nodes.md) for more info.

- The DOM is a hierarchal tree structure of nodes representing an HTML document.
- DOM nodes come in different types:
  - nodes that represent HTML tags
  - nodes that represent test
- Text nodes can be empty (**empty nodes**) or contain text.
- An HTML document does not necessarily display each node in the DOM visually
  - The browser may insert missing nodes from an invalid HTML document.
  - empty nodes will generally not be represented visually in the browser.

## Node Properties

See [Node Properties](./node_properties.md) for more info.

| Property Name | Description | Additional Info |
|---|---|---|
| `nodeName` | returns a string that points to the node's type | HTML tags will be the tag uppercased, text nodes: `"#text"`, comment nodes: `"#comment"`. |
| `nodeType` | returns a number that corresponds to a node type constant. | For example, a text node returns `3` which corresponds to the value stored at `Node.TEXT_NODE` |
| `nodeValue` | references the value of a node | Element nodes don't have values but Text nodes do. |
| `textContent` | represents the textual context inside all child nodes. | Because `nodeValue` returns `null` when called on an Element (HTML) node, we can use the `textContent` property to access all text from child nodes contained within the Element.  |

## Determining the Type of a Node

See [Determining the Type of a Node](./determing_the_type_of_a_node.md) for more info.

| Tool | When to Use | Description |
|---|---|---|
| `Object.getPrototypeOf` | whenever applicable | This method can be used if returned the prototype object of the node in question is sufficient |
| `toString` or `String` | in the browser console | both are methods |
| `instanceof` or `tagName` | in a program | one is an operator the other a property |

## Traversing Nodes

See [Traversing Nodes](./traversing_nodes.md) for more info.

- Nodes on the DOM are connected by a number of built-in properties that point between parent nodes and child nodes.
- A live collection is a collection that automatically updates to reflect changes in the DOM.

| Parent Node Properties | Value |
|---|---|
| `childNodes` | a _live collection_ of all child nodes |
| `firstChild` | `childNodes[0]` or `null` |
| `lastChild` |  `childNodes[childNodes.length -1]` or `null` |

| Child Node Properties | Value |
|---|---|
| `parentNode` | immediate parent of this node |
| `nextSibling` | `parentNode.childNodes[n + 1]` or `null` |
| `lastSibling` |  `parentNode.childNodes[n + -]` or `null` |

## Element Attributes

See [Element Attributes](./element_attributes.md) for more info.

**Element attribute properties for getting/setting properties:**
| Method | Description | Return Value |
|---|---|---|
| `getAttribute(name)` | retrieves the value of attribute `name` | value of attribute as string |
| `setAttribute(name, newValue` | set value of attribute `name` to `newValue` | `undefined` |
| `hasAttribute(name)` | checks if element has attribute `name` | `true` or `false` |

**Special element attribute properties:**
| Name | Description |
|---|---|
| `id` | built-in property for accessing the `id` attribute |
| `className` | built-in property for accessing the `class` attribute |
| `name` | built-in property for accessing the `name` attribute |
| `title` | built-in property for accessing the `title` attribute |
| `value` | built-in property for accessing the `value` attribute |

**classList is a special attribute property:**
| Name | Description |
|---|---|
| `classList` | returns an array-like object of all classes set to an element |

**The `classList` property returns an array-like object that has these special properties and methods:**
| Name | Description |
|---|---|
| `add(name)` | Add class `name` to element |
| `remove(name` | Remove class `name` from element |
| `toggle(name)` | Add class `name` to element if it doesn't exist, remove if it does |
| `contains(name)` | Return `true` or `false` depending on whether element has class `name` |
| `length` | The number of classes the element belongs to |

**style property:**
| Name | Description |
|---|---|
| `style` | References a `CSSStyleDeclaration` Object that allows us to directly alter any CSS property |

## Finding DOM Nodes

See [Finding DOM Nodes](./finding_dom_nodes.md) for more info.

**Finding a single element:**
| Method | Return Value |
|---|---|
| `document.getElementById(id)` | element with given `id` |

**Finding more than one element:**
| Method | Return Value |
|---|---|
| `document.getElementsByTagName(tagName)` | `HTMLCollection` or `NodeList` of matching elements |
| `document.getElementsByClassName(className)` | `HTMLCollection` or `NodeList` of matching elements |

**Using CSS selectors:**
These methods accept:

- an HTML tag name in string form.
- an element `id` attribute value in string form.
- an element `className` attribute value in string form.
| Method | Return value |
|---|---|
| `document.querySelector(selectors)` | matching element or `null` |
| `document.querySelectorAll(selectors)` | `NodeList` of matching elements |

## Traversing Elements

See [Traversing Elements](./traversing_elements.md) for more info.

- Many times we do not want to traverse all nodes, such as text and comment nodes, and would prefer to traverse only elements.  
- We can still access and update the text of an element with the `textContent` property.
- It is generally safer to wrap any text that will be altered or modified inits own element, such as a `span` or `div`.

| Parent Element Properties | Value |
|---|---|
| `children` | _Live collection_ of all child elements |
| `firstElementChild` | `children[0]` or `null` |
| `lastElementChild`  | `children[children.length - 1]` or `null` |
| `childElementCount` | `children.length` |

| Child Element Properties | Value |
|---|---|
| `nextElementSibling` | `parentNode.children[n + 1]` or `null` |
| `previousElementSibling` | `parentNode.children[n - 1]` or `null` |

## Creating and Moving Nodes

See [Creating and Moving Nodes](./creating_and_moving_nodes.md) for more info.

**Creating a node:**
There are two main ways of creating new nodes:

- create a new empty node with the `document.create*` methods
- clone an existing node hierarchy

| Node Creation Pattern | Return value |
|---|---|
| `document.createElement(tagName)` | A new Element node |
| `document.createTextNode(text)` | A new Text node |
| `node.cloneNode(deepClone)` | returns a copy of `node` |

- If `deepClone` is `true`, `cloneNode` makes a copy of `node` and _all of its descendants_ but if `deepClone` is `false` it only copies `node`.

**Adding nodes to the DOM:**

- No Node may appear more than once in the DOM. Any node attempting to be inserted/added to the DOM when it already exists will be _removed from the original location_. This means you can remove an existing node by inserting it elsewhere within the DOM

Append, insert, or replace nodes:
| Parent Node Method | Description |
|---|---|
| `parent.appendChild(node)` | Append `node` to the end of `parent.childNodes` |
| `parent.insertBefore(node, targetNode)` | Insert `node` in `parent.childNodes` before `targetNode` |
| `parent.replaceChild(node, targetNode)` | Remove `targetNode` from `parent.childNodes` and insert `node` in its place |

Insert a node before, after, or within an Element:
| Element Insertion Method | Description |
|---|---|
| `element.insertAdjacentElement(position, newElement` | Inserts `newElement` at `position` relative to `element` |
| `element.insertAdjacenttext(position, text)` | Inserts text node that contains `text` at `position` relative to `element` |

In the above method, `position` must be one of the following String values:
| Position | Description |
|---|---|
| `"beforebegin"` | Before the element |
| `"afterbegin"` | Before the first child of the element |
| `"beforeend"` | After the last child of the element
| `"afterend"` | After the element

**Removing a node from the DOM:**
| Element Method | Description |
|---|---|
| `node.remove()` | Remove `node` from the DOM |
| `parent.removeChild(node)` | Remove `node` from `parent.childNodes` |

## The Browser Object Model (BOM)

See [this](https://www.codingninjas.com/codestudio/library/javascript-bom) for more info.

We can access other components of the browser using JS that go beyond the page contents via the BOM. Things like:

- The windows used to display web pages
- The browser's history
- Sensors, such as location
