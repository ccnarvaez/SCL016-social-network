  const firestore = () =>{
  // Firestore
  // Interactions: sending data
    const writeBtn = document.getElementById('btn-task-form');
    writeBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const taskForm = document.getElementById('task-form');
      const title = taskForm["task-title"].value;
      //const description = taskForm["task-description"].value;
      taskForm.reset();

      // Sending data to firebase
      const response = await db.collection('home').doc().set({
        title,
        //description
      });

    });
  
    // Receiving messages from firebase
    // Selecciono el contenedor
        const addMsj = document.getElementById('message-container');
        
        // Agrego data proveniente de firestore
          const showMessage = (doc) =>{
            const titleData = doc.data().title;
            addMsj.innerHTML += `<div class = "card card-body"> 
            <div class = "card card-body"> 
            ${titleData} 
            </div>
            <div class =" btn-group-sm ">
             <button class= "btn btn-info btn-sm " id= "btn-task-info">Editar</button>
             <button class= "btn btn-success btn-sm " id= "btn-task-warning">Eliminar</button>
            </div>
            </div>`; 
          }
        // Llamo datos desde firestore
        const task = db.collection('home').get().then((querySnapshot)=>{
            querySnapshot.docs.forEach( doc =>{
              console.log(doc.data());
              showMessage(doc);
            })
        });
    }

    export default firestore;