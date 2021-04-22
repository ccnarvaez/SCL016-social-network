const modalFunction = () =>{
const modalRegister =  /* html */
` <div class="modal fade modal-dialog-centered modal-dialog-scrollable" id="registerModal" data-backdrop="static"
     aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
            <button type="submit" id="btnRegister" class="btn btn-primary btn-block mb-3 mt-3">Registrarme</button>
          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
</div>`
return modalRegister
}
export default modalFunction