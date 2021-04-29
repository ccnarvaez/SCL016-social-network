import footerIcons from '../components/footerIcons.js'

const courses = () => {

    // const nav = navbar;

    // const header = document.createElement('header');
    // header.appendChild(nav);

    const main = document.createElement('main');
    main.innerHTML = `<h1>hola, estos son los cursos</>`;
    let footer = footerIcons;
    let divContent = document.createElement('divContent');
    divContent.id = 'divContent';
    divContent.appendChild(main);
    divContent.appendChild(footer);

    return divContent;
}


export default courses;
