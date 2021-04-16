const login = () => {
// 1. Bootstrap creation
// First, div class collapse
  const collapse = document.createElement('div');// Create div
  const currentPlace = document.getElementById('main');// Asign a reference place into HTML
  document.body.insertBefore(collapse, currentPlace);// Insert new element
  collapse.className = 'collapse';// Asign class name

  // Second, div class bg-dark p-4 (collapse's son)
  const bgNewElement = document.createElement('div');
  const bgDarkParent= document.body.children[0];
  const bgDarkElement = bgDarkParent.child;
  bgDarkParent.insertBefore(bgNewElement, bgDarkElement);
  bgNewElement.className = 'bg-dark p-4';

  //  bg-dark class's Son
  const Newh5Element = document.createElement('h5');
  const h5Parent= bgDarkParent.firstChild;
  const h5Element = h5Parent.child;
  h5Parent.insertBefore(Newh5Element, h5Element);
  Newh5Element.className = 'text-white h4';
  const h5Text = document.createTextNode ('Collapsed content');
  Newh5Element.appendChild(h5Text);

  const NewSpanElement = document.createElement('span');
  h5Parent.insertBefore(NewSpanElement, h5Element);
  NewSpanElement.className = 'text-muted';
  const spanText = document.createTextNode ('Toggleable via the navbar brand.');
  NewSpanElement.appendChild(spanText);

//Nav section
const newNavElement = document.createElement('nav');
document.body.insertBefore(newNavElement, currentPlace);
newNavElement.className = 'navbar navbar-dark bg-dark';
// Nav's childs
const newNavChild = document.createElement('div');
const navPlace = document.body.children[1];
const navReference = navPlace.child;
navPlace.insertBefore(newNavChild, navReference);
newNavChild.className = 'container-fluid';


// Div Child
//const buttonDivChild = document.createElement('button');
//const buttonPlace = navPlace.children;
//navPlace.insertBefore(buttonDivChild , buttonPlace);
//console.log(buttonPlace);

//const buttonReference = navPlace.child;
//navPlace .insertBefore(newNavChild, navReference);
//newNavChild.className = 'container-fluid';

  /*<nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
*/
  //    login

//  footer del login
};
export default login;
/*
    const headerLogin = document.createElement('header');
    headerLogin.className = "headerLogin";
    const divTest = document.createElement('div');
    headerLogin.appendChild('divTest');
    const divCollapse = document.createElement('div');
    divCollapse.className = "collapse";
    divCollapse.id = "navbarToggleExternalContent";
    const divBrand = document.createElement('div');
    divBrand.className = "bg-dark p-4";
    document.getElementsByClassName('headerLogin').appendChild(document.createElement('div'));
    */
