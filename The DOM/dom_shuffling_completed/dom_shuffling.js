// swap the header and main elements
let main = document.querySelector('main');
let footer = document.querySelector('footer');
footer.insertAdjacentElement('beforebegin', main);

// Add h1 to header not to main
let h1 = document.querySelector('h1');
let header = document.querySelector('header');
let nav = document.querySelector('nav');
header.insertBefore(h1, nav);

// console.log(h1, header)
let content = document.getElementById('content').firstElementChild;
let figures = document.querySelectorAll('figure');

for (let i = figures.length - 1; i >= 0; i -= 1) {
  content.appendChild(figures[i]);
}
