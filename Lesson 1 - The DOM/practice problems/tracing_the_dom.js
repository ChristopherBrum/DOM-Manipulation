function findSiblings(id) {
  let siblings = document.getElementById(id).parentNode.children;
  return [...siblings].filter(node => node.tagName !== 'SCRIPT')
}

function formatTreeNames(tree) {
  return tree.map(array => array.map(node => {
    return node.tagName;
  }));
}

function domTreeTracer(id) {
  let currentSiblings = findSiblings(id);
  let tree = [currentSiblings];

  while (currentSiblings[0].id !== '1') {
    currentSiblings = findSiblings(currentSiblings[0].parentNode.id);
    tree.push(currentSiblings);
  }

  return formatTreeNames(tree);
}

console.log(domTreeTracer(1));
// [["ARTICLE"]]
console.log(domTreeTracer(2));
// [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22));
// [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]