     // Footer messages
const footerFunction = () => {
     const footer = document.createElement('footer');
     footer.className = 'footerLogin';

     const section1 = document.createElement('div');
     footer.appendChild(section1);
     section1.className = 'footerMessage';
     section1.textContent='2021, RECICLAME, Inc.';

    const section2 = document.createElement('div');
     footer.appendChild(section2);
     section2.className = 'footerMessage';
     section2.textContent='Reciclamos porque amamos al planeta';

   return footer 
}

    export default footerFunction;