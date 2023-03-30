// window.addEventListener('load', function(event) {
  
//   function walk(node, callback) {
//     callback(node);

//     for (let index = 0; index < node.childNodes.length; index += 1) {
//       walk(node.childNodes[index], callback);
//     }
//   }

//   // Write a JavaScript function that returns the p elements in the DOM represented by this HTML:
//   // function getElementsByTagName(tagName) {
//   //   let paragraphs = [];

//   //   walk(document.body, node => {
//   //     if (node.nodeName === tagName) {
//   //       paragraphs.push(node);
//   //     }
//   //   });

//   //   return paragraphs;
//   // }

//   // Write a JavaScript function that adds the class article-text to every <p> tag in this HTML:

//   function addClassNameToParagraphsInCollection(collection) {
//     for (let i = 0; i < collection.length; i += 1) {
//       let nodes = collection[i].childNodes;
//       for (let index = 0; index < nodes.length; index += 1) {
//         if (nodes[index].nodeName === 'P') {
//           nodes[index].classList.add('article-text');
//         }
//       }
//     }
//   }
  
//   let collection = document.getElementsByTagName('DIV');
//   addClassNameToParagraphsInCollection(collection);
// });

