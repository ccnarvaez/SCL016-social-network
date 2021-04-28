// Here you find form template to add some notes

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
                <input type="text" id="task-title" class="form-control" placeholder="Escribe aqui" autofocus>
              </div>
              <div class="form-group">
                <textarea id="task-description" rows="3" class="form-control"></textarea>
              </div>
              <button class= "btn btn-primary" id= "btn-task-form">send</button>
               <button class= "btn btn-info" id= "btn-task-info">send</button>
                <button class= "btn btn-warning" id= "btn-task-warning">send</button>
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