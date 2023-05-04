/*

- function converts the DOM(starting from body) to a nested array
- each element is represented a --> [element tagName, [array of children]]
  - (array of children) --> [ element tagName, [array of grandchildren]]
  - etc
- if an element contains no children, their array should be empty
---
- every 'generation' will be contained within its own nested array
  - array lvl 1 --> 'body', and an array of body's children
  - array lvl 2 --> contains all children of body
  - array lvl 3 --> each individual child of body, an array of each childs children

High-level:
- check if the parent element has children
- if the parent element has children, set the value of children to an array ([parerntElement, [children]])
  - otherwise set it to an empty array ([parentElement, []])
- check if any of the children are parents
- if there are repeat the process from step one

*/

function getChildren(node) {
  if (node.children.length > 0) {
    return [...node.children];
  } else {
    return [];
  }
}

function nodesToArr(node=document.body) {  
  let elementName = node.tagName;
  let children = getChildren(node);
  let outerArray = [elementName, children];

  console.log(outerArray)
}

console.log(nodesToArr());
// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

