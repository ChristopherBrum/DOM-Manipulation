# Traversing Elements

Often, we want to be able to traverse the DOM while excluding `#text` and `#comment` nodes by just traversing the elements of the DOM or a section of the DOM.

So, instead of having to traverse every node on the DOM like this:

![Connections between DOM Nodes](https://d3905n0khyu9wc.cloudfront.net/images/node_hierarchy2.png)

We can traverse it by its elements like this:
![Connections between DOM Elements](https://d3905n0khyu9wc.cloudfront.net/images/node_hierarchy3.png)

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

Most browsers include these properties in `document`, but some do not. IE does not, instead making them accessible through `document.body`.

## textContent

The above properties exclude all test nodes when traversing the DOM, but we can still access text nodes via the `textContent` property.

```html
<!doctype html> 
<html lang="en-US"> 
  <head> 
    <title>Go Back or Continue</title> 
  </head> 
  <body> 
    <p> 
      You can <a href="?page=2">go back</a> or <a href="/page/3">continue</a>.
    </p>
  </body>
</html>
```

We can grab the first anchor element and reference its text content like so:

```node
> document.querySelector('a').textContent;
// "go back"
```

And change the value like so:

```node
> document.querySelector('a').textContent = 'step backward';
// "step backward"
```

Resulting in this updated HTML code:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>Go Back or Continue</title>
  </head>
  <body>
    <p>
      You can <a href="?page=2">step backward</a> or <a href="/page/3">continue</a>.
    </p>
  </body>
</html>
```

Be aware that replacing text in this was _removes all child nodes from the elemtn and replaces them with a new text node_.

Therefore, this action:

```node
> document.querySelector('p').textContent = "You can't go anywhere.";
// "You can't go anywhere."
```

Will result in this HTML:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>Go Back or Continue</title>
  </head>
  <body>
    <p>You can't go anywhere.</p> 
  </body>
</html>
```

It's generally safer to place the text you need to update within an element, even if that's a bare `span` or `div` element.
