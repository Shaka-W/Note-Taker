const form = document.querySelector('form');
const note = document.querySelector('#note');
const addNote = document.querySelector('#btn-add');
const row = document.querySelector('.row');

let noteCounter = 1;

addNote.addEventListener('click', checkNoteInput);

function checkNoteInput() {
  let userInput = note.value;

  if (userInput.trim() === '') {
    alert('Please enter a note');
    return;
  } else {
    createNote(userInput);
  }
}

function modal(modalButton, userInput) {
  modalButton.addEventListener('click', () => {
    let div = document.createElement('div');
    let modalDialog = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalBody = document.createElement('body');
    let modalFooter = document.createElement('div');
    let closeModal = document.createElement('input');
    let para = document.createElement('p');

    let textNode = document.createTextNode(userInput);

    div.classList.add('modal', 'fade');
    modalContent.classList.add('modal-content');
    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered', 'modal-lg');
    modalBody.classList.add('modal-body');
    modalFooter.classList.add('modal-footer');
    closeModal.classList.add('btn', 'btn-primary');
    closeModal.setAttribute('data-dismiss', 'modal');
    closeModal.setAttribute('value', 'Close');
    div.id = 'myModal';
    
    para.appendChild(textNode);
    modalFooter.appendChild(closeModal);
    modalBody.appendChild(para);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    div.appendChild(modalDialog);

    row.parentNode.insertBefore(div, row.nextSibling);
  });
}

function createNote(userInput) {
  let col = document.createElement('div');
  let card = document.createElement('div');
  let cardBody = document.createElement('div');

  let heading = document.createElement('h5');
  let para = document.createElement('p');

  let button = document.createElement('a');
  button.classList.add('btn', 'btn-primary');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#myModal');

  col.classList.add('col-sm-6', 'mb-4');
  card.classList.add('card', 'border-primary');
  cardBody.classList.add('card-body')
  heading.classList.add('card-title');
  para.classList.add('card-text', 'text-truncate');

  let textNode = document.createTextNode(`Note ${noteCounter}`);
  let textNode2 = document.createTextNode(userInput);
  let textNode3 = document.createTextNode('View Details');

  heading.appendChild(textNode)
  para.appendChild(textNode2);
  button.appendChild(textNode3);

  cardBody.appendChild(heading);
  cardBody.appendChild(para);
  cardBody.appendChild(button);

  card.appendChild(cardBody);
  col.appendChild(card);
  row.appendChild(col);

  noteCounter++;

  modal(button, userInput);

  form.reset();
}