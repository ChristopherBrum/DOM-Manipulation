# Creating and Moving Nodes

## Creating New Nodes

| Node Creation Pattern | Return value |
|---|---|
| `document.createElement(tagtName)` | A new Element node |
| `document.createTextNode(text)` | A new Text node |
| `node.cloneNode(deepClone)` | returns a copy of `node` |

There are two main ways of creating new nodes:

- create a new empty node with the `document.create*` methods
- clone an existing node hierarchy

```html
<!doctype html>
<html lang="en-US">
  <head> 
    <title>Empty Page</title>
  </head>
  <body>
  </body>
</html>
```

```js
let paragraph = document.createElement('p');
paragraph.textContent = 'This is a test.';
document.body.appendChild(paragraph);
```

```node
let text = document.createTextNode('This is another test.');
let paragraph = document.createElement('p');
paragraph.appendChild(text);
document.body.appendChild(paragraph);
```

Leads to this HTML:

```html
<!doctype html>
<html lang="en-US">
  <head> 
    <title>Empty Page</title>
  </head>
  <body>
    <p>This is a test</p>
    <p>This is another test</p>
  </body>
</html>
```

If `deepClone` is `true`, `cloneNode` makes a copy of `node` and _all of its descendants_ but if `deepClone` is `false` it only copies `node`. It's important to always specify a value for `deepClone`, as its default values are inconsistent.

```node
paragraph // <p>This is a text</p>

let paragraph2 = paragraph.cloneNode(true);
document.body.appendChild(paragraph2);
```

## Adding Nodes to the DOM

**No Node may appear more than once in the DOM. Any node attempting to be inserted/added to the DOM when it already exists will be _removed from the original location_. This means you can remove an existing node by inserting it elsewhere within the DOM

We can append, insert, or replace nodes with these methods:
| Parent Node Method | Description |
|---|---|
| `parent.appendChild(node)` | Append `node` to the end of `parent.childNodes` |
| `parent.insertBefore(node, targetNode)` | Insert `node` in `parent.childNodes` before `targetNode` |
| `parent.replaceChild(node, targetNode)` | Remove `targetNode` from `parent.childNodes` and insert `node` in its place |

These methods insert a node before, after, or within an Element:
| Element Insertion Method | Description |
|---|---|
| `element.insertAdjacentElement(position, newElement` | Inserts `newElement` at `position` relative to `element` |
| `element.insertAdjacenttext(position, text)` | Inserts text node that contains `text` at `position` relative to `element` |

In the above method, `position` must be one of the following String values:
| Position | Description |
|---|---|
| `"beforebegin"` | Before the element |
| `"afterbegin"` | Before the first child of the element |
| `"beforeend"` | After the last child of the element |
| `"afterend"` | After the element |

## Removing Nodes

Removing a node from the DOM makes it eligible for [[Closures and Function Scope#Garbage Collection|garbage collection]] unless a reference to the node is stored in a variable. An object eligible for garbage collection is inaccessible and is therefore no longer available to your program.

| Element Method | Description |
|---|---|
| `node.remove()` | Remove `node` from the DOM |
| `parent.removeChild(node)` | Remove `node` from `parent.childNodes` |

```node
paragraph.remove()
paragraph2.remove()
```
