import footerIcons from '../components/footerIcons.js'

<<<<<<< HEAD
const services= () => {

    const main = document.createElement('main');
    main.innerHTML = `<h1>hola, esto es services</>`;
    let footer = footerIcons;
    let divContent = document.createElement('divContent');
    divContent.id = 'divContent';
=======
const services = () => {

    const main = document.createElement('main');
    main.innerHTML = `<h1>hola, estos son los servicios</>`;
    let footer = footerIcons;
    let divContent = document.createElement('divContent');
    divContent.id = 'divContent';

>>>>>>> 952e26c91fa5d4b19fec878881c525ff6a171b4c
    divContent.appendChild(main);
    divContent.appendChild(footer);

    return divContent;
}

<<<<<<< HEAD
export default services;
=======

export default services;
>>>>>>> 952e26c91fa5d4b19fec878881c525ff6a171b4c
