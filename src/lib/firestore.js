import router from './router.js'

const firestore = () => {
  // Firestore
  // Interactions: sending data
  const writeBtn = document.getElementById('btn-task-form');
  writeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskForm = document.getElementById('task-form');
    const title = taskForm["task-title"].value;
    taskForm.reset();

    // Sending data to firebase
    const response = db.collection('home').doc().set({
      title
    });

  });

  // Receiving messages from firebase
  // Selecciono el contenedor
  const addMsj = document.getElementById('message-container');

  // Agrego data proveniente de firestore
  // Agrego data proveniente de firestore
  const showMessage = (doc) => {
    const data = doc.data();
    data.id = doc.id;
    const titleData = doc.data().title;
    addMsj.innerHTML += `<div class = "card card-body"> 
            <div class = "card card-body"> 
            ${titleData} 
            </div>
            <div class =" btn-group-sm ">
             <button type= "button" class= "btn btn-info btn-sm " data-id ="${data.id}">Editar</button>
             <button type= "button" class= "btn btn-success btn-sm" data-id ="${data.id}">Eliminar</button>
            </div>
            </div>`;

    // Delete data
    const deleteFirestore = id => db.collection('home').doc(id).delete();
    const btnDelete = document.querySelectorAll('.btn-success');
    const count = btnDelete.length;

    for (let i = 0; i < count; i++) {
      const btnSingle = btnDelete[i];
      btnSingle.addEventListener('click', (e) => {
        deleteFirestore(e.target.dataset.id);
        window.history.replace = '#/Inicio';
        router(window.location.hash);
      })
    }

    // Edit data
    const getTask = id => db.collection('home').doc(id).get();
    const btnEdit = document.querySelectorAll('.btn-info');

    for (let i = 0; i < count; i++) {
      const btnSingle = btnEdit[i];
      btnSingle.addEventListener('click', (e) => {
        getTask(e.target.dataset.id);
        console.log(doc.data());
      })
    }
  }

  // Llamo datos desde firestore

  const task = db.collection('home').get().then((querySnapshot) => {
    querySnapshot.docs.forEach(doc => {
      showMessage(doc);
    })
  });

}

export default firestore;
