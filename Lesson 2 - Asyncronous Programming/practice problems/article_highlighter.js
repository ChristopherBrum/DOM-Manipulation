function extractId(item) {
  const regex = /#([^]*)/;
  const matches = item.children[0].href.match(regex);
  
  if (matches) return matches[0];
  console.log('articleId not found');
}

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');
  const listItems = ul.children;
  const main = document.querySelector('main');
  const mainItems = main.children;

  document.addEventListener('click', (e) => {
    unhighlightAll();
    main.classList.add('highlight');
  });

  for (let i = 0; i < listItems.length; i += 1) {
    let item = listItems[i];
    item.addEventListener('click', (e) => {
      e.stopPropagation()
      unhighlightAll()
      const articleId = extractId(item);
      const targetArticle = document.querySelector(articleId);
      targetArticle.classList.add('highlight');
      item.scrollIntoView();
    }, true);
  }

  for (let i = 0; i < mainItems.length; i += 1) {
    let mainItem = mainItems[i];
    if (mainItem.tagName === 'ARTICLE') {
      mainItem.addEventListener('click', (e) => {
        e.stopPropagation()
        unhighlightAll();
        e.currentTarget.classList.add('highlight');
      }, true);
    }
  }

  function unhighlightAll() {
    [...main.children].forEach(childElement => {
      if ([...childElement.classList].includes('highlight')) {
        childElement.classList.remove('highlight');
      }
    });
    
    if (main.classList.contains('highlight')) {
      main.classList.remove('highlight');
    }
  }
});