// 1. Navigation bar, dynamic creation
// Create element nav and addition bootstrap class
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark-green';

// Create button collapse and set attributes
const buttonCollapse = document.createElement('button');
buttonCollapse.className = 'navbar-toggler';
buttonCollapse.setAttribute('type', 'button');
buttonCollapse.setAttribute('data-toggle', 'collapse');
buttonCollapse.setAttribute('data-target', '#navbarTogglerDemo03');
buttonCollapse.setAttribute('aria-controls', 'navbarTogglerDemo03');
buttonCollapse.setAttribute('aria-expanded', 'false');
buttonCollapse.setAttribute('aria-label', 'Toggle navigation');

// Create span button collapse, setting attributes and logo adition
const spanButtonCollapse = document.createElement('span');
spanButtonCollapse.className = 'navbar-toggler-icon';

buttonCollapse.appendChild(spanButtonCollapse);
const anchor = document.createElement('a');
anchor.className = 'navbar-brand';
anchor.setAttribute('href', '#');
const imgLogo = document.createElement('img');
imgLogo.className = 'img-fluid';
imgLogo.setAttribute('alt', 'logo');
imgLogo.setAttribute('src', '/img/logo2.png');
anchor.appendChild(imgLogo);

// create div menu
const divList = document.createElement('div');
divList.className = 'collapse navbar-collapse';
divList.id = 'navbarTogglerDemo03';

// Section List
const ul = document.createElement('ul');
ul.className = 'navbar-nav mr-auto mt-2 mt-lg-0';
divList.appendChild(ul);

// 2. menu
const arrayLi = ['Inicio', 'Cursos', 'Servicios', 'Puntos Limpios', 'Cerrar Sesión'];

arrayLi.forEach((item) => {
  const li = document.createElement('li');
  li.className = 'nav-item';
  li.id = item;
  const anchorLi = document.createElement('a'); // create anchor for li
  anchorLi.className = 'nav-link';
  anchorLi.textContent = item;
  if (item === 'Cerrar Sesión') {
    anchorLi.setAttribute('href', ''); // route with hashtag
  } else {
    anchorLi.setAttribute('href', `#/${item}`); // route with hashtag
  }
  li.appendChild(anchorLi);
  ul.appendChild(li); // add li to ul
});

divList.appendChild(ul);
nav.appendChild(buttonCollapse);
nav.appendChild(anchor);
nav.appendChild(divList);

export default nav;
