import nav from './navbar.js';



const firebaseAuth = {

  register: (email, password) => {
    // Creating event
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    // This is to send data from app to firebase
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Sign in
        let user = userCredential.user;
        console.log("Registro exitoso.");
        console.log(user);
        registerForm.reset();

      }).then(() => {

        verification();

      })
      .catch((error) => {
        // Bad login messages
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

      });

  },

  login: (email, password) => {

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log('Ingreso correcto');
        console.log(user);
        loginForm.reset();
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        loginStatus = false;
      });


  },

  observer: () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        console.log('usuario activo');
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        let uid = user.uid;


        const header = document.createElement('header');
        header.appendChild(nav);


        // ...
      } else {
        console.log('no hay usuario activo');
      }
    });

  },

  signOut: () => { //si se presiona boton cerrarSesion se ejecuta esta funcion.
    firebase.auth().signOut()
      .then(() => {
        ('cerrando la sesión...') //spinner
      })
      .catch((error) => {

        console.log(error);
      })
  }

}

const verification = () => {

  const user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log('enviando correo de verificación');
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
}
export default firebaseAuth;