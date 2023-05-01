const pageBody = document.querySelector('body');
const pageTitle = document.createElement('h1');
const pageMain = document.createElement('main');

pageMain.classList.add('main');
pageBody.append(pageMain);

pageTitle.textContent = 'Virtual keyboard';
pageTitle.classList.add('main__title');
pageMain.append(pageTitle);
