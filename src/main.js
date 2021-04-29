import firebase from './components/firebase.js'
import firestore from './components/firestore.js'
import assignView from './components/router.js'
import login from './views/login.js'

//Default
const app = document.getElementById('root');
app.appendChild(login());

// Firebase callback functions

//Register
// const btnRegister = document.getElementById('btnRegister');
// btnRegister.addEventListener('click', () => {

//     let email = document.getElementById('txtEmailRegister').value;
//     let password = document.getElementById('txtPasswordRegister').value;
//     firebase.register(email, password);
// });

//Login
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {

  let email = document.getElementById('txtEmail').value;
  let password = document.getElementById('txtPassword').value;
  let loginStatus = firebase.login(email, password);
  if (loginStatus) {
    history.pushState(null, "Inicio", "/inicio");
    assignView(window.location.pathname);
    firestore();
  }
});
  // login google
 const btnGoogle = document.getElementById('btn-google');
   btnGoogle.addEventListener('click', () => {
    let loginStatus = firebase.loginGoogle();
    console.log(loginStatus);
      if (loginStatus) {
       history.pushState(null, "Inicio", "/inicio");
          assignView(window.location.pathname);
          firestore();

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