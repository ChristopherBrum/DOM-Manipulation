# Element Attributes

## Getting and Setting Attributes

We can access the different attributes of an Element with the following methods:

| Method | Description | Return Value |
|---|---|---|
| `getAttribute(name)` | retrieves the value of attribute `name` | value of attribute as string |
| `setAttribute(name, newValue` | set value of attribute `name` to `newValue` | `undefined` |
| `hasAttribute(name)` | checks if element has attribute `name` | `true` or `false` |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="./demo.js"></script>
  </head>
  <body>
    <!-- A short comment -->
    <h1>Newsletter Signup</h1>
    <p class="intro" id="simple">
      To receive our weekly emails, enter your email address below.
    </p>
  </body>
</html>
```

```node
// demo.js

let p = document.querySelector("p");

p.hasAttribute('class'); // true
p.hasAttribute('name');  // false

p.getAttribute('class'); // 'intro'
p.getAttribute('name');  // null

p.setAttribute('name', 'intro-paragraph');
p.hasAttribute('name');  // true
p.getAttribute('name');  // 'intro-paragraph'
```

### Attribute Properties

The `getAttribute` and `setAttribute` methods work for all attributes, but we can access _some_ attributes in other ways, too. The DOM exposes the special attributes `id`, `name`, `title`, and `value` as properties of the Element. There is also a special attribute for the class attribute but it is named `className`, as `class` is reserved for [[The Class Syntactic Sugar|the class object creation pattern]].

```node
p.id   // 'simple'
p.className // 'intro'
p.name // 'intro-paragraph'

p.title // undefined
p.title = 'simple-intro'
p.title = // 'simple-intro'
```

### classList Property

If an Element has a class attribute with multiple classes attached it can be difficult to isolate the individual class names from the string that `className` returns. JS provides a `classList` property, which references an array-like object that has some special properties and methods.

| Name | Description |
|---|---|
| `add(name)` | Add class `name` to element |
| `remove(name` | Remove class `name` from element |
| `toggle(name)` | Add class `name` to element if it doesn't exist, remove if it does |
| `contains(name)` | Return `true` or `false` depending on whether element has class `name` |
| `length` | The number of classes the element belongs to |

### style

Element nodes also have a `style` attribute that references a `CSSStyleDeclaration` Object. We can use the `style` attribute to alter any CSS property. When a CSS property contains dashes you must use the camelCased version of that word without the dash. Using the `style` is unusual, as it's generally easier and more organized to accomplish the same thing in your stylesheet.

```node
p.style.color // ''
p.style.color = 'red';
p.style.color // 'red'
```
