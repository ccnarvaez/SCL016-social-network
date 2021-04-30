const addNote = () => {
  const addNoteTemplate = /* html */
    `
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
              <button class= "btn btn-primary" id= "btn-task-form">send</button>
              <div class="form-group">
              <div id="message-container">
                <label> Publicaciones Destacadas</label>
              </div>
              </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

`
  return addNoteTemplate
};
export default addNote