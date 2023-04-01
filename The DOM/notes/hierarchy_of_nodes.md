# Hierarchy of Nodes

The DOM is a hierarchal tree structure of nodes representing an HTML document.

If we look at the simple HTML below...

```html
<html>
  <h1>Hello, world!</h1>
  <p>This is a small <em>web page</em>.</p>
</html>
```

...we can think of its tree structure of nodes looking something like this:

![](https://d3905n0khyu9wc.cloudfront.net/images/simple_node_types.png "DOM diagram showing node type")

DOM nodes also come in different types.

- Elements that represent HTML tags and...
- Text nodes that represent text or whitespace that appears in a document.

Text nodes can be thought of as either containing text or containing nothing except for whitespace. We can think of nodes only containing whitespace as **empty nodes**. Even though we are differentiating the two, all text nodes are the same. Empty nodes often arise before and after HTML tags when we `return` to the next line and/or `tab` to indent our HTML code. These empty nodes are _not_ represented visually in the web browser.

The image below shows the `nodeValue` of each text node:

![](https://d3905n0khyu9wc.cloudfront.net/images/text_node_contents/text_node_contents.png@half.png "DOM diagram showing text node contents")
