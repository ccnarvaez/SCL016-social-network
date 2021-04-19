
const register = () => {
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPassword').value;
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
    });
  
  auth.createUserWithEmailAndPassword(email, password)
  .then(userCredential => {
    // Signed in
    let user = userCredential.user;
    loginForm.reset();
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
  });

  return true //true or false

}

export default register;