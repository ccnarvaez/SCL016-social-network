 import Home from '../views/home.js'
 import Login from '../views/login.js'
 import Courses from '../views/courses.js'
 import Services from '../views/services.js'
 import navLogin from '../components/login/navLogin.js'
 import navHome from '../components/navbar.js'

 let content = document.getElementById('root');

 const router = (route) => {
     content.innerHTML = '';
     if (route === '') {
         content.appendChild(navLogin);
     } else if (route === '#/') {
         content.appendChild(navLogin);
     } else {
         content.appendChild(navHome);
     }
     switch (route) {
         case '#/': {
             return content.appendChild(Login());
         }
         case '': {
             return content.appendChild(Login());
         }
         case '#/Inicio': {
             return content.appendChild(Home());
         }
         case '#/Cursos': {
             return content.appendChild(Courses());
         }
         case '#/Servicios': {
             return content.appendChild(Services());
         }
         default: {
             return console.log('ERROR 404');
         }
     }
 }

 export default router;