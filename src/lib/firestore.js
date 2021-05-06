const cleanAndCall = () => {
  // C1. Got input where user will write data, and then it get empty
  const addMsj = document.getElementById('message-container');
  addMsj.innerHTML = '';

  // C2. Getting firebase data updated
 db.collection('publication').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      crudFunction(doc);
    })
  });
}


// //let snapshot = db.collection('publications').get();\
// shapshot.docs.forEach(
// ....
// )
// let snapshot = await db.collection('publications').get();

const createPublication = () => {
  // Sending data to firebase
  const taskForm = document.getElementById('task-form');
  const title = taskForm["task-title"].value;
  
  db.collection('publication').doc().set({
    title,
    likes : 0
  })
  .then( () => {
    cleanAndCall();
  });
}

const deleteMessage = (id) => {

  // D1. Firebase method, delete: we want to take off some comments
    db.collection('publication').doc(id).delete()
    .then(() => {
      cleanAndCall();
   }); 
}

const likeMessage = (id) => {
  db.collection('publication').doc(id).get().then(snapshot => {
    let countLikes = snapshot.data().likes;
    countLikes ++;
    db.collection('publication').doc(id).update({
      likes: countLikes 
    }). then(() =>{
      cleanAndCall();
    })
  })
}

const crudFunction = (doc) => {
    // S1. Select firebase response
    const data = doc.data();
    console.log(doc);
    console.log(doc.data());
    // S2. Got id to identify data to get actions edit and delete
    data.id = doc.id;
    // data.likes = doc.likes;
    //console.log(data);
    // S3. Here html template to add in home view, comments. 
    const addMsj = document.getElementById('message-container');
    addMsj.innerHTML += `<div class = "card card-body"> 
        <div class = "card card-body" id="edit-txt"> ${data.title} </div>
        <div class =" btn-group-sm ">
          <button type= "button" class= "btn btn-info btn-sm " data-id="${data.id}">
            Editar 
          </button>
          <button type= "button" class= "btn btn-success btn-sm" data-id="${data.id}">Eliminar</button>
          <button  type= "button" class= "btn btn-danger btn-sm" data-id="${data.id}">Like</button>
          <span >${data?.likes} <span>
        </div>
      </div>`;

 
// Likes
let likesBtn = document.querySelectorAll('.btn-danger');
console.log(likesBtn);


for (let j= 0 ; j< likesBtn.length ; j++){
let likeBtnSin = likesBtn[j];
 likeBtnSin.addEventListener('click', (e) => {
    likeMessage(e.target.dataset.id);
  })
}
// S4. Delete data
const btnDelete = document.querySelectorAll('.btn-success');

for (let i = 0; i < btnDelete.length; i++) {
  const btnSingle = btnDelete[i];
  btnSingle.addEventListener('click', (e) => {
    deleteMessage(e.target.dataset.id);
  })
}

// S5. Edit data
const btnEdit = document.querySelectorAll('.btn-info');

for (let i = 0; i < btnEdit.length; i++) {
  const btnSingle = btnEdit[i];
  btnSingle.addEventListener('click', (e) => {
    const taskForm = document.getElementById('task-form');
    taskForm["task-title"].value = db.collection('publication').doc((e.target.dataset.id)).delete();

  })
}
}

const firestoreFunc = () => {
  // Interactions: sending data
  const writeBtn = document.getElementById('btn-task-form');
  writeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskForm = document.getElementById('task-form');
    createPublication();
    taskForm.reset();
  });
  cleanAndCall();
}

export default firestoreFunc;

