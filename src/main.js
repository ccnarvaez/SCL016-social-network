import firebase from './components/firebase.js'
import routes from './components/router.js'
import login from './views/login.js'



//Default
    const body = document.querySelector('body');
    body.appendChild(login);
// Firebase callback functions
//Register
const btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', ()=>{

let email = document.getElementById('txtEmailRegister').value;
let password = document.getElementById('txtPasswordRegister').value;
const test = firebase.register(email, password);
});
//Login
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', ()=>{

let email = document.getElementById('txtEmail').value;
let password = document.getElementById('txtPassword').value;
let loginStatus = firebase.login(email, password);
console.log(loginStatus + ' loginStatus');
if (loginStatus){

routes.assignRoute();
routes.assignView(window.location.pathname);

    
}else{
   console.log("no hay conexion de usuario");

}

});
firebase.observer();

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

// });

// Callback function
