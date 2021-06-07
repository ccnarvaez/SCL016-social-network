import footerIcons from '../components/footer.js';

const courses = () => {
  const main = document.createElement('main');
  main.innerHTML = '<h1>hola, estos son los cursos</>';
  const footer = footerIcons;
  const divContent = document.createElement('divContent');
  divContent.id = 'divContent';
  divContent.appendChild(main);
  divContent.appendChild(footer);

  return divContent;
};

export default courses;
