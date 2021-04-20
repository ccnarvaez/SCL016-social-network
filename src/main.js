
import register from './components/register.js'
//import routes from './components/routes.js'
// import navbar from './views/navbar.js';
import barTemplate from './views/template.js';
import login from './views/login.js';
import modal from './views/registerModal.js';
import nav from './views/navbar.js';

// Callback function
barTemplate();
register();
login();
modal();

// Firebase callback function (register)
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', ()=>{
const test = register();
});

/*
// Firebase callback function (register)
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', ()=>{
const test = register();
      });
*/
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




