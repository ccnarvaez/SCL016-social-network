const addNotes = () => {
  const addNoteTemplate = /* html */
      `
  <div id="name-container">
    </div>
    <div id= "writingNote" class="container p-4">
      <div class="row">
        <div class="col-md-4 offset-md-d-4">
          <div class="card">
            <div class="card-body">
              <form class="task-form" id="task-form">
                <div class="form-group">
                  <label> Comparte lo que piensas</label>
                  <input type="text" id="task-title" class="form-control" placeholder="Escribe aqui" autofocus>
                </div>
                <button class= "btn btn-primary" id= "btn-task-form">Enviar</button>
                
                <div class="form-group">
                <div class="container p-4">
                  <label> Publicaciones Destacadas</label>
                </div>
                <!-- This is varible module, here messages appear-->
                <div id="message-container">
                </div>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return addNoteTemplate;
};

const functionForm = () => {
  const formLogin = /* html */
    `
      <div class="row">
        <div class="col-2"></div>
        </div>
        <div class="col-8">
          <form class="mt-5" id="loginForm">
            <div class="container">
              <img class="card-img-top border mx-auto d-block img-fluid img-login" src="./loginUser.png"
                alt="Card image cap">
              <button type="button" class="btn btn-primary btn-block mt-3" id="btn-google">Iniciar sesión <img src="./google.png"
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
             <div class="container">
                <small class="float-right mb-5"><a href="" data-toggle="modal" data-target="#registerModal">Registrarse.</a>
              </small>
                <br>
                <small  class="float-right mb-5 text-danger" id="error-section"></small>
                
              </div>
          <!--firebase messages-->
          <div id = "firebase-messageSU">
          </div>
            
        </div>
        <div class="col-2">

        </div>
        </div>
`;
  return formLogin;
};

const modalFunction = () => {
  const modalRegister = /* html */
` 
  <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
          <button type="button" id="btnCloseModal" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
        <form id="registerForm">
          <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="txtEmailRegister" required placeholder="Email">
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="txtPasswordRegister" required placeholder="Password">
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Nombre y Apellido</label>
              <input type="text" class="form-control" id="txtDisplayName" required placeholder="Nombre Apellido">
            </div>
            <div class="form-group">
              <button type="submit" id="btnRegister" class="btn btn-primary">Registrarme</button>
            </div>
        </form>
        <!--firebase messages-->
          <div id = "firebase-messages">
          </div>
        </div>
    </div>    
  </div>
    </div>
  </div>`;
  return modalRegister;
};


export {addNotes, functionForm, modalFunction };
