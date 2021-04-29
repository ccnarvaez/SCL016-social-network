import login from '../views/login.js';
import home from '../views/home.js';
import courses from '../views/courses.js';
import services from '../views/services.js';
import navbar from '../components/navbar.js';
import firebase from './firebase.js'
//hash
const assignView = (pathname) => {
  const app = document.getElementById('root');
  const divContentDelete = document.getElementById('divContent'); //div de contenido a reemplazar
  if (divContentDelete) {
    divContentDelete.remove()
  }
  const divContainerDelete = document.getElementById('divContainer2'); //divContainer2 de contenido a reemplazar
  if (divContainerDelete) {
    divContainerDelete.remove()
  }
  const divContainer = document.createElement('div');
  divContainer.id = 'divContainer2'; //contiene menu general
  const nav = navbar;
  const header = document.createElement('header');
  header.appendChild(nav);
  divContainer.appendChild(header);
  app.appendChild(divContainer);
  assignRoute();
  showViews(pathname, divContainer);
}
const assignRoute = () => {
  let path = '';
  const inicio = document.getElementById('Inicio');
  const cursos = document.getElementById('Cursos');
  const servicios = document.getElementById('Servicios');
  const puntosLimpios = document.getElementById('Puntos Limpios');
  const signOut = document.getElementById('Cerrar Sesión');

  signOut.addEventListener('click', () => {
    firebase.signOut();
    history.replaceState(null, 'login', '/');
    path = window.location.pathname;
    // assignView(path); revisar
  });

  inicio.addEventListener('click', e => {
    history.pushState(null, 'Inicio', '/inicio');
    path = window.location.pathname;
    assignView(path);
  });

  cursos.addEventListener('click', e => {
    history.pushState(null, 'Cursos', '/cursos');
    path = window.location.pathname;
    assignView(path)
  });

  servicios.addEventListener('click', e => {
    history.pushState(null, 'Servicios', '/servicios');
    path = window.location.pathname;
    assignView(path);
  });

  puntosLimpios.addEventListener('click', e => {
    history.pushState(null, 'Puntos Limpios', '/puntos-limpios');
    path = window.location.pathname;
    assignView(path);
  });
}
const showViews = (pathname, divContainer) => {

  switch (pathname) {
    case '/':
      divContainer.appendChild(login());
      break;
    case '/inicio':
      divContainer.appendChild(home()); //a divContainer q tiene el menu, le agrego el divContent que viene de home.js
      break;
    case '/cursos':
      divContainer.appendChild(courses());
      break;
    case '/servicios':
      console.log('servicios');
      divContainer.appendChild(services());
      break;
    case '/puntos-limpios':
      console.log('PUNTOS LIMPIOS');
      break;

  }
}
export default assignView;