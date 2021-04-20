
import register from './components/register.js'
// import routes from './components/routes.js'
// import navbar from './views/navbar.js';
import barTemplate from './views/template.js';
import variable from './views/TestLogin.js';
import uno from './views/unaprueba.js';

console.log(variable);
console.log(uno);


// window.addEventListener('hashchange', () =>{

// switch (window.location.hash){
//     case '#/Inicio':
//         console.log('1');
//         main.appendChild(prueba);
//         break;

//     case '#/Cursos':
//         console.log('2');
//         break;

// }

// switch (window.location.pathname){
//     case "/inicio":
//         console.log("1");
//         main.appendChild(prueba);
//         break;

//     case "/cursos":
//         console.log("2");
//         break;

// }

// });

// Callback function
// routes();
barTemplate();

// Firebase callback function (register)
const btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', ()=>{
const test = register();
});
