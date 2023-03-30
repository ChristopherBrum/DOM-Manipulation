function walk(node, callback) {
  callback(node);
  for (let i = 0; i < node.children.length; i += 1) {
    walk(node.children[i], callback);
  }
}

function invalidId(id) {
  return !document.getElementById(id);
}

function invalidNode(node1, node2) {
  return node1.contains(node2) || node2.contains(node1);
}

function nodeSwap(id1, id2) {
  if (invalidId(id1) || invalidId(id2)) { return undefined };
  const node1 = document.getElementById(id1);
  const node2 = document.getElementById(id2);
  
  if (!invalidNode(node1, node2)) {
    const node1Clone = node1.cloneNode(true);
    const node2Clone = node2.cloneNode(true);
    const parent1 = node1.parentElement;
    const parent2 = node2.parentElement;

    parent1.replaceChild(node2Clone, node1);
    parent2.replaceChild(node1Clone, node2);
    return true;
  }
}

// // invalid swaps
// // at least one of the id attributes doesn't exist
// console.log(nodeSwap(1, 20));
// // undefined

// // at least one of the nodes is a "child" of the other
// console.log(nodeSwap(1, 4));
// // undefined
// console.log(nodeSwap(9, 3));
// // undefined


// valid swaps
// one swap
// console.log(nodeSwap(1, 2));

// // multiple swaps
// console.log(nodeSwap(3, 1));
// console.log(nodeSwap(7, 9));