# Traversing Nodes

Nodes on the DOM are connected by a number of built-in properties that point between parent nodes and child nodes. All DOM nodes that represent Elements have parent and child nodes, but the DOM structure will dictate whether any of the child nodes are of a `null` value.

## Parent Node Properties

| Parent Node Properties | Value |
|---|---|
| `childNodes` | a _live collection_ of all child nodes |
| `firstChild` | `childNodes[0]` or `null` |
| `lastChild` |  `childNodes[childNodes.length -1]` or `null` |

A live collection is a collection that automatically updates to reflect changes in the DOM.

## Child Node Properties

| Child Node Properties | Value |
|---|---|
| `parentNode` | immediate parent of this node |
| `nextSibling` | `parentNode.childNodes[n + 1]` or `null` |
| `lastSibling` |  `parentNode.childNodes[n + -]` or `null` |

![[Screenshot 2023-03-22 at 1.55.04 PM.png]]

## Walking the Tree

Walking the tree refers to visiting every child, grandchild, etc. that has a relationship with a given node. We generally use a recursive function to accomplish this, but it can be achieved using a non-recursive function.

When walking the tree, we don't use arrays we use DOM nodes.Each "smaller" or "inner" argument is a child of the current node.

```node
function walk(node, callback) {
  callback(node);
  let children = node.childNodes;
    
  for (let index = 0; index < children.length; index += 1) {
    walk(children[index], callback);
  }
}
  
walk(document, node => { console.log(node) });
```
