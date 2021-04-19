const interaction = () => {
// Container to comment section
  const divCreate = document.createElement('div');
  const parent1 = document.body.children[1];
  const reference1 = document.getElementById('container');
  parent1.insertBefore(divCreate, reference1);
  divCreate.className = 'userIntMain';
  divCreate.setAttribute('id', 'userIntMain');

  // Here user should write comments to send
  let inputCreate = document.createElement('input');
  const parent2 = parent1.children[1];
  const reference2 = parent2.child;
  parent2.insertBefore(inputCreate, reference2);
  inputCreate.className = 'commentHere';
  inputCreate.setAttribute('type', 'text');
  inputCreate.setAttribute('id', 'commentHere');
  inputCreate.setAttribute('placeholder', 'escribe tu comentario');

  // Button to get comments
  const buttonCreate = document.createElement('button');
  parent2.insertBefore(buttonCreate, reference2);
  buttonCreate.className = 'sendComment';
  buttonCreate.setAttribute('id', 'sendComment');
  buttonCreate.setAttribute('type', 'submit');

  // Here shows comment
  const divCreate2 = document.createElement('div');
  parent1.insertBefore(divCreate2, reference1);
  divCreate2.className = 'ShowContainer';
  divCreate2.setAttribute('id', 'ShowContainer');

  let inputCreate2 = document.createElement('input');
  const parent3 = document.getElementById('ShowContainer');
  const reference3 = parent3.child;
  parent3.insertBefore(inputCreate2, reference3);
  inputCreate2.className = 'showComment';
  inputCreate2.setAttribute('id', 'showComment');
 
  //Button functionality
  const getButton1 = document.getElementById('sendComment');
  getButton1.addEventListener('click', () => {
  const inputText1 = document.getElementById('commentHere').value;
  console.log(inputText1);  
  });
};
export default interaction;
