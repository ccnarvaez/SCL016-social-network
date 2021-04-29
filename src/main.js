import firebase from './components/firebase.js'
import assignView from './components/router.js'
import login from './views/login.js'

//Default
const app = document.getElementById('root');
app.appendChild(login());

// Firebase callback functions

//Register
// const btnRegister = document.getElementById('btnRegister');
// btnRegister.addEventListener('click', () => {
//     let email = document.getElementById('txtEmailRegister').value;
//     let password = document.getElementById('txtPasswordRegister').value;
//     firebase.register(email, password);
// });

//Login
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {

  let email = document.getElementById('txtEmail').value;
  let password = document.getElementById('txtPassword').value;
  let loginStatus = firebase.login(email, password);
  if (loginStatus) {
    history.pushState(null, "Inicio", "/inicio");
    assignView(window.location.pathname)

    const getTask = () => db.collection('home').get();

    window.addEventListener('DOMContentLoaded', async (e) => {
      const task = await getTask();
      console.log(task);
    })

    // Interactions: writing button
    const writeBtn = document.getElementById('btn-task-form');
    writeBtn.addEventListener('click', async (e) => {
      const taskForm = document.getElementById('task-form');
      e.preventDefault();
      const title = taskForm["task-title"].value;
      const description = taskForm["task-description"].value;
      // Aca deberia crear una funcit
      const response = await db.collection('home').doc().set({
        title,
        description
      });

      taskForm.reset(); // Nuevo

    });
  }

});

firebase.observer();

// window.addEventListener('hashchange', () =>{

// switch (window.location.hash){
//     case '#/Inicio':
//         console.log('1');
//         main.appendChild(prueba);
//         break;

//     case '#/Cursos':
//         console.log('2');
//         break;

// }

// });

// Callback function