// Este es el punto de entrada de tu aplicacion
import router from './lib/router.js';
import firebase from './lib/firebase.js';
import firestoreFunc from './lib/firestore.js';

router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);

});

if (window.location.hash === '#/' || window.location.hash === '') {

// Register
const btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', () => {
  let email = document.getElementById('txtEmailRegister').value;
  let password = document.getElementById('txtPasswordRegister').value;
  firebase.register(email, password);
});

//Login
const btnLogin = document.getElementById('btnLogin');

if (btnLogin !== null) {

  btnLogin.addEventListener('click', () => {
    let email = document.getElementById('txtEmail').value;
    let password = document.getElementById('txtPassword').value;
    let user = firebase.login(email, password);
    let loginStatus = firebase.observer(user);
    console.log(loginStatus);
    if (loginStatus) {
      history.replaceState(null, "Inicio", "/#/Inicio");
      router(window.location.hash);
      firestoreFunc();
    }
  });
}

// login google
const btnGoogle = document.getElementById('btn-google');

  btnGoogle.addEventListener('click', () => {
    let user = firebase.loginGoogle();
    let loginStatus = firebase.observerGoogle();
    console.log(loginStatus);
    if (loginStatus) {
      history.replaceState(null, 'Inicio', '/#/Inicio');
      router(window.location.hash);
      firestoreFunc();

    }

  });

}else{
  //SignOut
  const btnSignOut = document.getElementById('Cerrar Sesión')
  btnSignOut.addEventListener('click', () => {
    firebase.signOut();
    history.go(0);
    router(window.location.hash);
  });
}

firebase.observer();