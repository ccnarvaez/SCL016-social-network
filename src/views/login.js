const login = () => {
// 1. Bootstrap nav bar creation
// First, div class collapse
  const collapseNewElement = document.createElement('div');// Create div
  const collapseParent = document.body.children[0];
  const collapseReference = document.getElementById('referenceDyn');// Asign a reference place into HTML
  collapseParent.insertBefore(collapseNewElement, collapseReference);// Insert new element
  collapseNewElement.className = 'collapse';// Asign class name
  collapseNewElement.setAttribute('id', 'navbarToggleExternalContent');

  console.log(collapseParent);

  // Second div, <div class="bg-dark p-4"> - collapse son
  const bgDarkNewElement = document.createElement('div');
  const bgDarkParent = collapseParent.lastElementChild;
  const bgDarkReference = bgDarkParent.child;
  bgDarkParent.insertBefore(bgDarkNewElement, bgDarkReference);
  bgDarkNewElement.className = 'bg-dark p-4';

  //  bg-dark class's first son <h5 class="text-white h4">Collapsed content</h5>
  const h5NewElement = document.createElement('h5');
  const h5Parent = bgDarkParent.firstChild;
  const h5Element = h5Parent.child;
  h5Parent.insertBefore(h5NewElement, h5Element);
  h5NewElement.className = 'text-white h4';
  const h5Text = document.createTextNode('Collapsed content');
  h5NewElement.appendChild(h5Text);

  // bg-dark class's second son <span class="text-muted">Toggleable via the navbar brand.</span>
  const spanNewElement = document.createElement('span');
  h5Parent.insertBefore(spanNewElement, h5Element);
  spanNewElement.className = 'text-muted';
  const spanText = document.createTextNode('Toggleable via the navbar brand.');
  spanNewElement.appendChild(spanText);

  // Nav section <nav class="navbar navbar-dark bg-dark">
  const navNewElement = document.createElement('nav');
  collapseParent.insertBefore(navNewElement, collapseReference);
  navNewElement.className = 'navbar navbar-dark bg-dark-green';

  // Nav's child  <div class="container-fluid">
  const navNewChild = document.createElement('div');
  const navParent = collapseParent.children[2];
  const navReference = navParent.child;
  navParent.insertBefore(navNewChild, navReference);
  navNewChild.className = 'container-fluid';

  /* Div Child <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
  data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
  aria-expanded="false" aria-label="Toggle navigation"> */
  const divNewChild = document.createElement('button');
  const divParent = navParent.firstElementChild;
  const divReference = divParent.child;
  divParent.insertBefore(divNewChild, divReference);
  divNewChild.className = 'navbar-toggler';
  divNewChild.setAttribute('type', 'button');
  divNewChild.setAttribute('data-bs-toggle', 'collapse');
  divNewChild.setAttribute('data-bs-target', '#navbarToggleExternalContent');
  divNewChild.setAttribute('aria-controls', 'navbarToggleExternalContent');
  divNewChild.setAttribute('aria-expanded', 'false');
  divNewChild.setAttribute('aria-label', 'Toggle navigation');
  divNewChild.setAttribute('id', 'barButton');

  // Button's child <span class="navbar-toggler-icon"></span>
  const buttonNewChild = document.createElement('span');
  const buttonParent = divParent.firstElementChild;
  const buttonReference = buttonParent.child;
  buttonParent.insertBefore(buttonNewChild, buttonReference);
  buttonNewChild.className = 'navbar-toggler-icon';

  // 2. MENU CREATION
  // Bar menu
  const barMenu = document.createElement('div');
  const barMenuParent = document.body.children[1];
  const barMenuReference = document.getElementById('container');
  barMenuParent.insertBefore(barMenu, barMenuReference);
  barMenu.className = 'barMenu';
  barMenu.setAttribute('id', 'barMenu');
  barMenu.setAttribute('type', 'hidden');

  // Bar menu sons
  const barMenuSon1 = document.createElement('a');
  const linkReferenceParent1 = barMenuParent.children[0];
  const linkReferenceSon1 = linkReferenceParent1.child;
  linkReferenceParent1.insertBefore(barMenuSon1, linkReferenceSon1);
  barMenuSon1.setAttribute('href', 'Inicio');// Ojo hay que definir rutas
  barMenuSon1.textContent = 'Inicio';

  // Bar menu action
  const buttonMenuAction = document.getElementById('barButton');
  buttonMenuAction.addEventListener('mouseover', () => {
    document.getElementById('barMenu').style.display = 'block';
    // console.log('lo senti');
  });
  buttonMenuAction.addEventListener('mouseout', () => {
    setTimeout(() => {
      document.getElementById('barMenu').style.display = 'none';
      // console.log('chau');
    }, 3000);
  });
  /*
  <!--Reference Navigation bar: bootstrap

    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>-->
*/
};
export default login;
