
import firebase from './components/firebase.js'
// import routes from './components/routes.js'
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

if (loginStatus){

    window.location.replace = '/inicio';

    switch (window.location.pathname){
        case '/inicio':
            console.log('inicio');
            body.remove; 
            const h1 = document.createElement('h1');
            h1.textContent = 'HOLA';
            body.appendChild(h1);
            break;
        case '/cursos':
            console.log('cursos');
            break;
        case "/servicios":
            console.log("servicios");
            break;
    }
}else{
    //mensaje de error o algo y luego
    //login
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
// routes();
