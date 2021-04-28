<<<<<<< HEAD
import firebase from './components/firebase.js';
import routes from './components/router.js';
import login from './views/login.js';
import addNote from './components/interactions/addNote.js';


//Default
   const body = document.querySelector('body');
   const loginView =body.appendChild(login);

// Interactions
let newNote = addNote();
const reference = document.getElementById('test');
reference.innerHTML=newNote;

// Interactions: writing button
const taskForm = document.getElementById('task-form');
const writeBtn= document.getElementById('btn-task-form');

writeBtn.addEventListener('click', async (e)=> {
e.preventDefault();
const title = taskForm["task-title"].value;
const description = taskForm["task-description"].value;
console.log(title, description);
// Aca deberia crear una funcit
const response =  await db.collection('home').doc().set({
    title,
    description
});


});






//Register
//const btnRegister = document.getElementById('btnRegister');
//btnRegister.addEventListener('click', ()=>{
//let email = document.getElementById('txtEmailRegister').value;
//let password = document.getElementById('txtPasswordRegister').value;
//const test = firebase.register(email, password);
//});
=======
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

>>>>>>> 952e26c91fa5d4b19fec878881c525ff6a171b4c
//Login
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {

  let email = document.getElementById('txtEmail').value;
  let password = document.getElementById('txtPassword').value;
  let loginStatus = firebase.login(email, password);
  if (loginStatus) {
    history.pushState(null, "Inicio", "/inicio");
    assignView(window.location.pathname)

    // Interactions: writing button
    const writeBtn = document.getElementById('btn-task-form');
    writeBtn.addEventListener('click', async (e) => {
      const taskForm = document.getElementById('task-form');
      e.preventDefault();
      const title = taskForm["task-title"].value;
      const description = taskForm["task-description"].value;
      console.log(title, description);
      // Aca deberia crear una funcit
      const response = await db.collection('home').doc().set({
        title,
        description
      });

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