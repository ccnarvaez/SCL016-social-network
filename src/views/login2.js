 //login
    const form = document.createElement("nav"); //create nav
    nav.className = "navbar navbar-expand-lg navbar-dark bg-dark-green" //bootstrap class

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