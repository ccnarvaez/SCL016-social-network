import {Home, Login, Courses, Services} from '../views.js';
import {navBar, navBarLogin} from '../navbar.js';

// SUMMARY: This module binds hash reference to the view related to the anchor text clicked on navigation bar or to signup and login processes

// Calling reference in HTML document
const content = document.getElementById('root');
const navHome = navBar();
const navLogin = navBarLogin();

const router = (route) => {
  // Navigation bar login
  content.innerHTML = '';
  if (route === '') {
    content.appendChild(navLogin);
  } else if (route === '#/') {
    content.appendChild(navLogin);
  } else {
    content.appendChild(navHome);
  }
  // Setting relation between hash and views
  switch (route) {
    case '#/': {
      return content.appendChild(Login());
    }
    case '': {
      return content.appendChild(Login());
    }
    case '#/Inicio': {
      return content.appendChild(Home());
    }
    case '#/Cursos': {
      return content.appendChild(Courses());
    }
    case '#/Servicios': {
      return content.appendChild(Services());
    }
    default: {
      return console.log('ERROR 404');
    }
  }
};

export default router;
