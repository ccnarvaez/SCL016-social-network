     // Footer messages
     const footer = document.createElement('footer');
     footer.className = 'footer';

     const section1 = document.createElement('div');
     footer.appendChild(section1);
     section1.className = 'footerMessage';
     section1.textContent='2021, RECICLAME, Inc.';

    const section2 = document.createElement('div');
     footer.appendChild(section2);
     section2.className = 'footerMessage';
     section2.textContent='Reciclamos porque amamos al planeta';


    export default footer;