const register = () => {
  // Getting user data
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPassword').value;

  // Creating event
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  
  // This is to send data from app to firebase
  auth.createUserWithEmailAndPassword(email, password)
  .then(userCredential => {
    // Sign in
    let user = userCredential.user;
    console.log(user);
    console.log(userCredential);
    loginForm.reset();
  })
  .catch((error) => {
    // Bad login messages
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

  return true 

}

export default register;