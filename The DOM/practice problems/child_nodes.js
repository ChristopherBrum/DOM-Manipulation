function childNodes(id) {
  let parent = document.getElementById(id);
  let directCount = parent.childNodes.length;
  let indirectCount = -1;

  function walk(node) {
    indirectCount += 1;

    for (let i = 0; i < node.childNodes.length; i += 1) {
      walk(node.childNodes[i]);
    }
  }

  walk(parent);
  return [directCount, indirectCount - directCount];
}


// sample output
console.log(childNodes(1));
// = [9, 12]
console.log(childNodes(4));
// = [3, 1]
console.log(childNodes(9));
// = [1, 1]