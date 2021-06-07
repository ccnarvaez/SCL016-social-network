import footerIcons from '../components/footer.js';
import addNotes from '../components/interactions/addNotes.js';

const home = () => {
  const main = document.createElement('main');
  main.innerHTML = addNotes();
  const footer = footerIcons;
  const divContent = document.createElement('divContent');
  divContent.id = 'divContent';
  divContent.appendChild(main);
  divContent.appendChild(footer);

  return divContent;
};

export default home;
