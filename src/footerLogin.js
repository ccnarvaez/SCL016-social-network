// Footer messages
const footerFunction = () => {
  const footer = document.createElement('footer');
  footer.className = 'footerLogin';

  const section1 = document.createElement('div');
  footer.appendChild(section1);
  section1.className = 'footerMessage';
  section1.textContent = '2021, RECICLAME, Inc.';

  const section2 = document.createElement('div');
  footer.appendChild(section2);
  section2.className = 'footerMessage';
  section2.textContent = 'Reciclamos porque amamos al planeta';

  return footer;
};

const footerIcons = () =>{
const footer = document.createElement('footer');
footer.className = 'footer';

const section1 = document.createElement('div');
section1.className = 'userProfile';

const section2 = document.createElement('div');
section2.className = 'homePage';

const section3 = document.createElement('div');
section3.className = 'chatShortCut';

footer.appendChild(section1);
footer.appendChild(section2);
footer.appendChild(section3);

return footer;

}

export {footerFunction, footerIcons };
