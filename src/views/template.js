import navbar from './navbar.js';
//import navLogin from './navLogin.js';
import login from './login.js';

//Navigation bar template

const barTemplate = () => {
    // Nav bar template
    const header = document.querySelector('header');
    const containerMain = document.getElementById('container');
    const nav = navbar;
    header.appendChild(navLogin);
    containerMain.innerHTML = login;

    // const testNav = document.createElement('h1');
    // testNav.textContent = 'Hola!';

    // // Footer
    //  const footer = document.getElementById('footer');
    //  const createDiv1 = document.createElement('div');
    //  footer.appendChild(createDiv1);
     
    //  const createDiv2 = document.createElement('div');
    //  footer.appendChild(createDiv2);
     
    //  const createDiv3 = document.createElement('div');
    //  footer.appendChild(createDiv3);

    //  // Footer messages
    // const createDiv4 = document.createElement('div');
    //  footer.appendChild(createDiv4);
    //  createDiv4.classList = 'footerMessage';
    //  createDiv4.textContent='2021, RECICLAME, Inc.'

    // const createDiv5 = document.createElement('div');
    //  footer.appendChild(createDiv5);
    //  createDiv5.classList = 'footerMessage';
    //  createDiv5.textContent='Reciclamos porque amamos al planeta'

    // // Show on login footer
    // const logFooter = document.getElementById('btnLogin');
    // logFooter.addEventListener('click', () => {
    // createDiv1.classList = 'userProfile';
    // createDiv2.classList = 'homePage';
    // createDiv3.classList = 'chatShortCut';
    // createDiv4.textContent='';
    // createDiv5.textContent='';
    // });
    
    // Routes nav menu
    // window.addEventListener('hashchange', () => {

    //     switch (window.location.hash) {
    //         case '#/Inicio':
    //             console.log('1');
    //             main.appendChild(testNav);
    //             break;

    //         case '#/Cursos':
    //             console.log('2');
    //             break;
    //     }
    // });
}
export default barTemplate