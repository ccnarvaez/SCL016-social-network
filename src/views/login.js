//login
 
     const container = document.getElementById('container');
     const divModal = /*Html*/
      `<div class="container" id="container">
      <div class="row">
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
    </div>`
    
    
container.Html = divModal;

    
export default divModal;
