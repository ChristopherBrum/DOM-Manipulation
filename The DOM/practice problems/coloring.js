/*
- create a method that returns all elements at a specific depth from document.body
- the function will take 1 argument, a number representing the depth of the children elements from document.body

document.body
1 - article (script)
2 - header, main, footer (HTMLCollection)

*/

function colorize(...nodes) {
  nodes.forEach(node => node.classList.add('generation-color'));
}

function colorGeneration(generation) {
  if (generation <= 0) return undefined;

  let currentGeneration = document.body.children
  let tempGeneration = [];

  for (let i = 1; i < generation; i += 1) {
    tempGeneration = [...currentGeneration].flatMap(node => {
      return [...node.children];
    });

    currentGeneration = tempGeneration;
    tempGeneration = [];
  }

  colorize(...currentGeneration);
}

// colorGeneration(1);
// colorGeneration(2);
// colorGeneration(3);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(0);