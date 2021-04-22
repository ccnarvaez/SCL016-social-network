import login from '../views/login.js';
// import home from '../views/home.js';

const routes = { 

assignRoute: () => {

    let path = window.location.pathname;
    const inicio = document.getElementById("Inicio");
    const cursos = document.getElementById("Cursos");
    const servicios = document.getElementById("Servicios");
    const puntosLimpios = document.getElementById("Puntos Limpios");
    
inicio.addEventListener('click', e =>{
    history.pushState(null, "Inicio", "/inicio");
});

cursos.addEventListener('click', e =>{
    history.pushState(null, "Cursos", "/cursos");
});

servicios.addEventListener('click', e =>{
    history.pushState(null, "Servicios", "/servicios");
});

puntosLimpios.addEventListener('click', e =>{
    history.pushState(null, "Puntos Limpios", "/puntos-limpios");
});


},
assignView:(pathname) => {
    // window.location.replace = '/inicio';
    const body = document.querySelector('body');
    switch (pathname){
        case '/':
            body.appendChild(login)
            break;
        case "/inicio":
            console.log("inicio");
            break;
        case "/servicios":
            console.log("servicios");
            break;

    }
}

}

export default routes;