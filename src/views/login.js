const login = () => {
  // Getting html caught values
  const email =document.getElementById('txtEmail');
  const password =document.getElementById('txtPassword');

      // Adding click event
      const buttonLogin = document.getElementById('signIn');
      buttonLogin.addEventListener('click', (e) => {
      e.preventDefault();
      const txtEmail = email.value;
      const txtPassword = password.value;
      console.log(txtEmail);
      
      auth.createUserWithEmailAndPassword(txtEmail,txtPassword);
      auth.then (userCredential =>{
      console.log ('sign up')})

  }) 
}

/*<main id="main">
    <div class="container" id="container">
      <div class="row">
        <div class="col-2">

        </div>
        <div class="col-8">
          <form class="mt-5">
            <div class="container">
              <img class="card-img-top border mx-auto d-block img-fluid img-login" src="/img/loginUser.png"
                alt="Card image cap">
              <button type="button" class="btn btn-primary btn-block mt-3">Iniciar sesión <img src="/img/google.png"
                  alt=""></button>
            </div>

            <div class="container mt-3">
              <small class="form-text text-muted">o ingresa con tu email y contraseña.</small>
              <div class="form-group">
                <label for="txtEmail">Email</label>
                <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp"
                  placeholder="Ingresa tu email">
              </div>
              <div class="form-group">
                <label for="txtPassword">Contraseña</label>
                <input type="password" class="form-control" id="txtPassword" placeholder="Contraseña">
              </div>
              <button type="submit" class="btn btn-primary btn-block mb-3 mt-3" id ='sendLogin'>Iniciar sesión</button>

            </div>


          </form>
        </div>
        <div class="col-2">

        </div>
      </div>
    </div>
    */
export default login