import navbar from './navbar.js';

// Aqui iria todo

//Navigation bar template

const barTemplate = () => {
    // Nav bar template
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const nav = navbar;
    header.appendChild(nav);

    const testNav = document.createElement('h1');
    testNav.textContent = 'Hola!';

    // Routes nav menu
    window.addEventListener('hashchange', () => {

        switch (window.location.hash) {
            case '#/Inicio':
                console.log('1');
                main.appendChild(testNav);
                break;

            case '#/Cursos':
                console.log('2');
                break;
        }
    });
}


export default barTemplate