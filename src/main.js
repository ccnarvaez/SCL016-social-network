// Este es el punto de entrada de tu aplicacion
// identificar la url en la que estoy y cargar el nav que corresponda... usar nav como un componente aparte
//aca se arma la vista dinamica!

import register from './components/register.js'
import routes from './components/routes.js'
import navbar from './views/navbar.js';

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', ()=>{
    

const test = register();
console.log(test); 
});


//identificar la ruta... dependiendo de eso cargo la vista

const header = document.querySelector('header');
const main = document.querySelector('main');
const nav = navbar;
header.appendChild(nav)

const prueba = document.createElement('h1');
prueba.textContent = 'Hola!';

// main.appendChild(login2);
//si el estado o path de la url es inicio... cargo la vista de inicio... etc.
//url = path === '/' ? inicio : pathname.replace('/','')

window.addEventListener('hashchange', () =>{

switch (window.location.hash){
    case '#/Inicio':
        console.log('1');
        main.appendChild(prueba);
        break;

    case '#/Cursos':
        console.log('2');
        break;

}

// switch (window.location.pathname){
//     case "/inicio":
//         console.log("1");
//         main.appendChild(prueba);
//         break;

//     case "/cursos":
//         console.log("2");
//         break;

// }

});



myFunction();
// login();
routes();