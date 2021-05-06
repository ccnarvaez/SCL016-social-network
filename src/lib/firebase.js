const firebaseAuth = {
  // SUMMARY: This module contents firebase methods to complete signup, login and signout. Also you can find observer set up.

  register: (email, password) => {
    // Sign up modal
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    // sign up firebase
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const displayName = document.getElementById('txtDisplayName').value;
        document.getElementById('btnCloseModal').click()

        // Sign up ok message
        const reference = document.getElementById('firebase-messageSU');
        const signupEl = document.createElement('div');
        const signupMsj = reference.appendChild(signupEl);
        signupMsj .className = 'alert alert-primary';
        signupMsj .textContent =  `${displayName} se ha registrado correctamente`;

      // Catching up current user data and setting as displayName name info wrote by user
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: displayName
        })
        console.log(user);
        registerForm.reset();
      })
      .catch((error) => {
       
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // Error message
        //setTimeout(() => {
          const reference = document.getElementById('firebase-messages');
          const signupEl = document.createElement('div');
          const signupMsj = reference.appendChild(signupEl);
          signupMsj .className = 'alert alert-danger';
          signupMsj .textContent = error;
         //}, 1500);
      });
       
  },

  login: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in
        const user = firebase.auth().currentUser;
        // saving loginstatus at localstorage
        localStorage.setItem('user', user); 
      })
      .catch((error) => {
        //  let errorCode = error.code;
        //  let errorMessage = error.message;
        //  console.log(errorCode);
        //  console.log(errorMessage);
        localStorage.setItem('user', '');
      });
        let user = localStorage.getItem('user');
        return user;
  },

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

  signOut: () => { 
  firebase.auth().signOut()
    .then(() => {
      console.log('cerrando la sesión...'); //spinner 
    })
    .catch((error) => {

      console.log(error);
    })
  },

  observer: (user) => {
  
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

  observerGoogle: () => {

    //firebase.auth().onAuthStateChanged((user) => {
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
  }
}

export default firebaseAuth;