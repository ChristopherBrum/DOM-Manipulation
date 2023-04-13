// Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

document.querySelector('html').addEventListener('click', (event) => {
  const conatiner = document.querySelector('#container')
  
  if (conatiner.contains(event.target)) {
    conatiner.style = 'display: none';
  }
});

// document.querySelector('#container').addEventListener('click', event => {
//   event.stopPropagation();
// });