import navLogin from '../components/login/navLogin.js';
import functionForm from '../components/login/formLogin.js';
//import modalFunction from '../components/login/modalRegister.js';
import footerFunction from '../components/login/footerLogin.js'

  const nav = navLogin;
  const form = functionForm();
  //const modal = modalFunction();

  const header = document.createElement('header');
  header.appendChild(nav);

  const main = document.createElement('main');
  main.innerHTML = form ;//+ modal;

  let app = document.getElementById('root');
  let footer = footerFunction ();
  
  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
  const login = app;

export default login;
