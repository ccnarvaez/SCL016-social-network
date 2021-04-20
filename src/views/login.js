import navLogin from '../components/login/navLogin.js';
import formLogin from '../components/login/formLogin.js';
import modalRegister from '../components/login/modalRegister.js';
import footer from '../components/login/footerLogin.js'

  const nav = navLogin;
  const form = formLogin;
  const modal = modalRegister;

  const header = document.createElement('header');
  header.appendChild(nav);

  const main = document.createElement('main');
  main.innerHTML = form + modal;

  let app = document.getElementById('root');
  
  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
  const login = app;

export default login;


