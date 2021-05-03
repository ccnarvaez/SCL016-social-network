const modalFunction = () =>{
const modalRegister =  /* html */
`   <!-- Modal -->
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

  <button type="submit" id="btnRegister" class="btn btn-primary">Registrarme</button>
</form>
      </div>
      
    </div>
  </div>
</div>`
return modalRegister
}
export default modalFunction