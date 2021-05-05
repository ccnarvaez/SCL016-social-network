import footerIcons from '../components/footer.js'

const services = () => {

    const main = document.createElement('main');
    main.innerHTML = `<h1>hola, estos son los servicios</>`;
    let footer = footerIcons;
    let divContent = document.createElement('divContent');
    divContent.id = 'divContent';

    divContent.appendChild(main);
    divContent.appendChild(footer);

    return divContent;
}


export default services;