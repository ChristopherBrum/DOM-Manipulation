/*
- similar to the Array.prototype.slice method but for a DOM tree
- two args
  - a start index which is the parent nodes id attribute
  - end index which is the child nodes id attribute
- retuns an array of tagNames

- the childId is inclusive
- the end index/childid doesn't have to be the innermost child node
- only consider element nodes
- only nodes that have body as an anncestor
- if the parentId or childId is not in the DOM, return undefined
- if there is not path connecting the two elements, return undefined
*/

function invalidId(id) {
  return document.getElementById(id) === null
}

function sliceTree(parentId, childId) {
  if (invalidId(parentId) || invalidId(childId)) return undefined;
  const slicedTree = [];
  let currentId = String(childId);
  let parentFound = false;

  do {
    let node = document.getElementById(currentId);
    slicedTree.unshift(node.tagName);
    currentId = node.parentElement.id;
    if (Number(parentId) === Number(currentId)) parentFound = true;
  } while (Number(parentId) <= Number(currentId))

  return parentFound ? slicedTree : undefined;
}

console.log(sliceTree(1, 4));
// ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// undefined
console.log(sliceTree(2, 5));
// undefined
console.log(sliceTree(5, 4));
// undefined
console.log(sliceTree(1, 23));
// ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// ["SECTION", "P", "SPAN", "STRONG", "A"]