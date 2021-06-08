import {addNotes, functionForm, modalFunction} from './templates.js';
import {footerFunction, footerIcons} from './footerLogin.js';


const Login = () => {
  const form = functionForm();
  const modal = modalFunction();
  const main = document.createElement('main');
  main.innerHTML = form + modal;
  main.className = 'container-fluid';
  const divLogin = document.createElement('div');
  divLogin.id = 'divContainer';
  const footer = footerFunction();

  divLogin.appendChild(main);
  divLogin.appendChild(footer);

  return divLogin;
};

const Home = () => {
  const main = document.createElement('main');
  main.innerHTML = addNotes();
  const footer = footerIcons();
  const divContent = document.createElement('divContent');
  divContent.id = 'divContent';
  divContent.appendChild(main);
  divContent.appendChild(footer);

  return divContent;
};

const Courses = () => {
  const main = document.createElement('main');
  main.innerHTML = '<h1>hola, estos son los cursos</>';
  const footer = footerIcons();
  const divContent = document.createElement('divContent');
  divContent.id = 'divContent';
  divContent.appendChild(main);
  divContent.appendChild(footer);

  return divContent;
};

const Services = () => {
  const main = document.createElement('main');
  main.innerHTML = '<h1>hola, estos son los servicios</>';
  const footer = footerIcons();
  const divContent = document.createElement('divContent');
  divContent.id = 'divContent';

  divContent.appendChild(main);
  divContent.appendChild(footer);

  return divContent;
};

export  {Login, Home, Courses, Services};
