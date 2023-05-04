// Given the following markup, implement distinct context menus for the main and the sub areas of the web page. You can represent a context menu as an alert box that displays the name of the respective area (i.e., alert("sub")). Only one context menu should appear when the event occurs.

/* 
<main>
  Main Area
  <section id="sub">
    Sub Area
  </section>
</main> 

main, #sub {
  padding: 15px;
}

main {
  width: 100%;
  height: 200px;
  background: blue;
  color: white;
}

#sub {
  position: relative;
  top: 100px;
  left: 15px;
  background: red;
  height: 50px;
  width: 50%;
}
*/

document.addEventListener('DOMContentLoaded', (e) => {
  const main = document.querySelector('main');
  
  main.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (e.target.nodeName === "MAIN") {
      alert('MAIN');
    } else if (e.target.nodeName === "SECTION") {
      alert('SECTION');
    }
  });
});
