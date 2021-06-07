const addNote = () => {
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
export default addNote;
