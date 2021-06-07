import functionForm from '../components/login/formLogin.js';
import modalFunction from '../components/login/modalRegister.js';
import footerFunction from '../components/login/footerLogin.js';

const login = () => {
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

export default login;
