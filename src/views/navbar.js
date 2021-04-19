  //1. Navigation bar, dynamic creation
    const nav = document.createElement("nav"); //create element nav
    nav.className = "navbar navbar-expand-lg navbar-dark bg-dark-green" //add bootstrap class

    const buttonCollapse = document.createElement("button"); //create button collapse menu
    buttonCollapse.className = "navbar-toggler";
    buttonCollapse.setAttribute("type", "button");
    buttonCollapse.setAttribute("data-toggle", "collapse");
    buttonCollapse.setAttribute("data-target", "#navbarTogglerDemo03");
    buttonCollapse.setAttribute("aria-controls", "navbarTogglerDemo03");
    buttonCollapse.setAttribute("aria-expanded", "false");
    buttonCollapse.setAttribute("aria-label", "Toggle navigation");

    const spanButtonCollapse = document.createElement("span"); //create span button collapse
    spanButtonCollapse.className = "navbar-toggler-icon"

    buttonCollapse.appendChild(spanButtonCollapse); //add button to nav
    const anchor = document.createElement("a"); //create anchor of logo
    anchor.className = "navbar-brand";
    anchor.setAttribute("href", "#");
    const imgLogo = document.createElement("img"); //add image logo to anchor
    imgLogo.className="img-fluid";
    imgLogo.setAttribute("alt", "logo");
    imgLogo.setAttribute("src", "/img/logo2.png");
    anchor.appendChild(imgLogo);

    const divList = document.createElement("div"); //create div menu
    divList.className = "collapse navbar-collapse"; //add bootstrap class
    divList.id = "navbarTogglerDemo03";

    const ul = document.createElement("ul"); //create ul menu
    ul.className = "navbar-nav mr-auto mt-2 mt-lg-0"; //add bootstrap class

    divList.appendChild(ul) //add element to divList

    // 2. Section routes

    const arrayLi = ['Inicio', 'Cursos', 'Servicios', 'Puntos Limpios', 'Cerrar Sesión'];

    arrayLi.forEach(item =>{ // recorrer array, item representa a cada item del array
        const li = document.createElement("li");
        li.className = "nav-item" //??? active, revisar como dejar dinamico
        li.id = item;
        const anchorLi = document.createElement("a"); //create anchor for li
        anchorLi.className = "nav-link";
        anchorLi.textContent = item;
         anchorLi.setAttribute("href", `#/${item}`); //ruta con hash
        li.appendChild(anchorLi);

        ul.appendChild(li); //add li to ul
    });

    divList.appendChild(ul);
    nav.appendChild(buttonCollapse);
    nav.appendChild(anchor);
    nav.appendChild(divList);

  export default nav
 