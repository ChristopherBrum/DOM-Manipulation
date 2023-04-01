# Node Properties

## HTMLDocument

Within the DOM, a node is a single object in the node tree, which consist of:

- the document itself
- HTML elements
- text (including empty/whitespace text)
- comments

The `document` is the topmost node and represents the entire DOM. It is the parent node of all other nodes.

We can access the `HTMLDocument` in the console, and using the `toString` method is a handy way of checking an object's type. More info about `HTMLDocument` can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument).

```node
> document.toString()
// "[object HTMLDocument]"
```

Because the `HTMLDocument` is the parent node of all other nodes we can use it as a jumping off point to find other nodes.

```node
> let p = document.querySelector("p");
> p
// <p class="intro" id="simple">...</p>
```

## Node Props

Every node shares some common properties:

- **nodeName** - returns a string that points to the node's type.
  - For HTML tags this will be the name of the tag in uppercase.
  - For text nodes, the node name is `"#text"`, even if it's empty.
  - For comment nodes, the node name is `"#comment"`.
- **nodeType** - returns a number that corresponds to a node type constant.
  - Returns `1` for an _element_ representing an HTML tag node (`Node.ELEMENT_NODE`)
  - Returns `3` for a _text_ node (`Node.TEXT_NODE`)
  - Returns `8` for a _comment_ node (`Node.COMMENT_NODE`)
  - Returns `9` for a _document_ node (`Node.DOCUMENT_NODE`)
- **nodeValue** - references the value of a node
  - Element nodes don't have values.
  - Text nodes do have a value.
- **textContent** - represents the textual context inside all child nodes.
  - Because `nodeValue` returns `null` when called on an Element (HTML) node, we can use the `textContent` property to access all text from child nodes contained within the Element.
