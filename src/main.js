// Este es el punto de entrada de tu aplicacion
import router from './lib/router.js'
import firebase from './lib/firebase.js'
import firestore from './lib/firestore.js'

router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);

});

//Register
// const btnRegister = document.getElementById('btnRegister');
// btnRegister.addEventListener('click', () => {
//     let email = document.getElementById('txtEmailRegister').value;
//     let password = document.getElementById('txtPasswordRegister').value;
//     firebase.register(email, password);
// });

//Login
const btnLogin = document.getElementById('btnLogin');
if (btnLogin !== null) {
  btnLogin.addEventListener('click', () => {

    let email = document.getElementById('txtEmail').value;
    let password = document.getElementById('txtPassword').value;
    firebase.login(email, password);
    let loginStatus = firebase.observer();

    if (loginStatus) {
      history.replaceState(null, "Inicio", "/#/Inicio");
      router(window.location.hash);
      firestore();
    }
  });
}

// login google
const btnGoogle = document.getElementById('btn-google');
if (btnGoogle !== null) {
  btnGoogle.addEventListener('click', () => {
    console.log(2);
    firebase.loginGoogle();
    console.log(3);
    let loginStatus = firebase.observer();
    console.log(4);
    if (loginStatus) {
      history.replaceState(null, "Inicio", "/#/Inicio");
      router(window.location.hash);
      firestore();

    }

  });
}
//SignOut

const btnSignOut = document.getElementById('Cerrar Sesión');
if (btnSignOut !== null) {
  btnSignOut.addEventListener('click', () => {
    firebase.signOut();
    router(window.location.hash);
  });
}


firebase.observer();