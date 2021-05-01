
const cleaning = () =>{
  // C1. Got input where user will write data, and then it get empty
  const addMsj = document.getElementById('message-container');
  addMsj.innerHTML = '';

  // C2. Getting firebase data updated
  const task = db.collection('publication').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      showMessage(doc);
    })
  });
}

const deleteMessage = (idDel) =>{

  // D1. Firebase method, delete: we want to take off some comments
  const deleteFirestore = id => db.collection('publication').doc(id).delete();

  deleteFirestore(idDel);
  cleaning();
}

const showMessage = (doc) => {
  // S1. Select firebase response
  const data = doc.data();
  
  // S2. Got id to identify data to get actions edit and delete
  data.id = doc.id;

  // S3. Here html template to add in home view, comments. 
  const addMsj = document.getElementById('message-container');
  addMsj.innerHTML += `<div class = "card card-body"> 
        <div class = "card card-body"> ${data.title} </div>
        <div class =" btn-group-sm ">
          <button type= "button" class= "btn btn-info btn-sm " data-id ="${data.id}">Editar</button>
          <button type= "button" class= "btn btn-success btn-sm" data-id ="${data.id}">Eliminar</button>
        </div>
      </div>`;

  // S4. Delete data
  const btnDelete = document.querySelectorAll('.btn-success');

  for (let i = 0; i < btnDelete.length; i++) {
    const btnSingle = btnDelete[i];
    btnSingle.addEventListener('click', (e) => {
      deleteMessage(e.target.dataset.id);
    })
  }

  // S5. Edit data
  const getTask = id => db.collection('publication').doc(id).get();
  const btnEdit = document.querySelectorAll('.btn-info');

  for (let i = 0; i < btnEdit.length; i++) {
    const btnSingle = btnEdit[i];
    btnSingle.addEventListener('click', (e) => {
      getTask(e.target.dataset.id);
      console.log('senti');
      
    })
  }


}

const firestoreFunc = () => {
  // Interactions: sending data
  const writeBtn = document.getElementById('btn-task-form');
  writeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskForm = document.getElementById('task-form');
    const title = taskForm["task-title"].value;
    taskForm.reset();

    // Sending data to firebase
    const response = db.collection('publication').doc().set({title});
    cleaning();
  });

  // Default cleaning
  cleaning();
}

const editMessage = () => { 
} 


export default firestoreFunc;
