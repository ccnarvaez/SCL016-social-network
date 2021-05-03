const firebaseAuth = {

  register: (email, password) => {
    // Creating event
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    // This is to send data from app to firebase
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
     
        console.log("Registro exitoso.");
        const user = firebase.auth().currentUser;
        const displayName = document.getElementById('txtDisplayName').value;
        document.getElementById('btnCloseModal').click()
        console.log(displayName);
        user.updateProfile({
          displayName: displayName
        })
 registerForm.reset();
      })
      .catch((error) => {

        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });

  },

  login: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in

        const user = firebase.auth().currentUser;
        console.log(user.displayName);
        console.log('Ingreso correcto');

         localStorage.setItem('user', user); //guardo la loginstatus en localstorage
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        localStorage.setItem('user', '');
      });
        let user = localStorage.getItem('user');
        return user;
  },
  // Login google
  loginGoogle: () => {
       // Start a sign in process for an unauthenticated user.
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
    .then(() => {
        // Signed in
        const user = firebase.auth().currentUser;
        console.log(user.displayName);
        console.log('Ingreso correcto');

        localStorage.setItem('user', user); //guardo la loginstatus en localstorage
   
      })
       .catch((error) => {
         let errorCode = error.code;
         let errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
         localStorage.setItem('user', '');
       });
       let user = localStorage.getItem('user');
       return user;
  },

  observer: (user) => {
  
    // firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('usuario logueado');
        localStorage.setItem('loginStatus', true); //guardo la loginstatus en localstorage

      } else {
        console.log('no hay usuario activo');
        localStorage.setItem('loginStatus', false); //guardo la loginstatus en localstorage
      }
    // });
    let loginStatus = localStorage.getItem('loginStatus');
  
    return loginStatus;
  },

   observerGoogle: () => {

      firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       console.log('usuario logueado');
       localStorage.setItem('loginStatus', true); //guardo la loginstatus en localstorage

     } else {
       console.log('no hay usuario activo');
       localStorage.setItem('loginStatus', false); //guardo la loginstatus en localstorage
     }
      });
     let loginStatus = localStorage.getItem('loginStatus');

     return loginStatus;
   },

  signOut: () => { //si se presiona boton cerrarSesion se ejecuta esta funcion.
    firebase.auth().signOut()
      .then(() => {
        console.log('cerrando la sesión...'); //spinner
        
      })
      .catch((error) => {

        console.log(error);
      })
  }

}

export default firebaseAuth;