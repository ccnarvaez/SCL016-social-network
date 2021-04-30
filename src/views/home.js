import footerIcons from '../components/footer.js'
import addNotes from '../components/interactions/addNotes.js'

const home = () => {

    const main = document.createElement('main');
    main.innerHTML = `<h1>hola, este es el inicio</>`;
    main.innerHTML = addNotes();
    let footer = footerIcons;
    let divContent = document.createElement('divContent');
    divContent.id = 'divContent';
    divContent.appendChild(main);
    divContent.appendChild(footer);

    return divContent;
}

export default home;