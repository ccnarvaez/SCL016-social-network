
//login & Register modal
   
     const login = /* html */
      `<div class="row">
        <div class="col-2">
        </div>
        <div class="col-8">
          <form class="mt-5" id="loginForm">
            <div class="container">
              <img class="card-img-top border mx-auto d-block img-fluid img-login" src="/img/loginUser.png"
                alt="Card image cap">
              <button type="button" class="btn btn-primary btn-block mt-3">Iniciar sesión <img src="/img/google.png"
                  alt=""></button>

            </div>

            <div class="container mt-3">
              <small class="form-text text-muted">o ingresa con tu email y contraseña.</small>
              <div class="form-group">
                <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp"
                  placeholder="Ingresa tu email">

              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="txtPassword" placeholder="Contraseña">
              </div>
              <button type="submit" id="btnLogin" class="btn btn-primary btn-block mb-3 mt-3">Ingresar</button>

            </div>


          </form>
          <small class="text-muted float-right"><a href="" data-toggle="modal"
              data-target="#registerModal">Registrarse.</a>
          </small>
        </div>
        <div class="col-2">

        </div>
      </div>

      <!-- register modal -->

  <div class="modal fade modal-dialog-centered modal-dialog-scrollable" id="registerModal" data-backdrop="static"
    data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Registro</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="mt-5" id="registerForm">

          <div class="container mt-3">
            <div class="form-group">
              <label for="txtEmail">Email</label>
              <input type="email" class="form-control" id="txtEmailRegister" aria-describedby="emailHelp"
                placeholder="Ingresa tu email">

            </div>
            <div class="form-group">
              <label for="txtEmail">Contraseña</label>
              <input type="password" class="form-control" id="txtPasswordRegister" placeholder="Contraseña">
            </div>
            <button type="submit" id="btnRegister" class="btn btn-primary btn-block mb-3 mt-3">Registarme</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    `


    
export default login;


