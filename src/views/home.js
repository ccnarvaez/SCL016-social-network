import footerIcons from '../components/footerIcons.js'

const home = () => {

    const main = document.createElement('main');
    main.innerHTML = `<h1>hola, este es el inicio</>`;
    let footer = footerIcons;
    let divContent = document.createElement('divContent');
    divContent.id = 'divContent';
    divContent.appendChild(main);
    divContent.appendChild(footer);

    return divContent;
}

export default home;
