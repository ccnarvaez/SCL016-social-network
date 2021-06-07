// 1. Nav Login
// Create element nav and addition bootstrap class

const navLogin = document.createElement('nav');
navLogin.className = 'navbar navbar-dark bg-dark-green justify-content-center';

const anchorNav = document.createElement('a');
anchorNav.className = 'navbar-brand';

const imgLogo = document.createElement('img');
imgLogo.className = 'img-responsive img-logo-login';
imgLogo.src = '../img/logo2.png';
anchorNav.appendChild(imgLogo);
navLogin.appendChild(anchorNav);

export default navLogin;
