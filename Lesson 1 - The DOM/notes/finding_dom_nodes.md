# Finding DOM Nodes

## Finding an Element by Id

There are many times we will need to find an element by way of an element's `id`. The `getElementById` method on the `document` provides this behavior.  

| Method | Return Value |
|---|---|
| `document.getElementById(id)` | element with given `id` |

```html
<!doctype html>
<html lang="en-US"> 
  <head> 
    <title>On the River</title> 
  </head> 
  <body> 
    <p id="content">The sun is low</p> 
  </body> 
</html>
```

We can retrieve a reference to the DOM element for the `<p>` tag like so:

```node
document.getElementById('conent');
// <p id="content">...</p>
```

## Finding More Than One Element

More often than needing to reference a single DOM Element, we'll need to reference all DOM Elements that meet certain criteria. Since an `id` value is unique to an individual Element we'll need to walk the tree and use the relationship properties on each node to access its siblings, children, and parent.

| Method | Return Value |
|---|---|
| `document.getElementsByTagName(tagName)` | `HTMLCollection` or `NodeList` of matching elements |
| `document.getElementsByClassName(className)` | `HTMLCollection` or `NodeList` of matching elements |

A JS `HTMLCollection` and `nodeList` is an array-like collection, which means it has a length property and elements can be accessed by their non-zero based property. Because they are not true arrays they do not have access to `Array.prototype` methods, like `forEach`.

## Using CSS Selectors

We can also use CSS selectors to find elements.

These methods accept:

- an HTML tag name in string form.
- an element `id` attribute value in string form.
- an element `className` attribute value in string form.

| Method | Return value |
|---|---|
| `document.querySelector(selectors)` | matching element or `null` |
| `document.querySelectorAll(selectors)` | `NodeList` of matching elements |

The first method returns the first element that matches one of the selectors passed in, while the second returns all matching elements in an array-like collection. These methods are accessible for all `Elements`.
