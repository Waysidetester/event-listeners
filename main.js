// selects single submit button
const submitButton = document.getElementById('submitButton');
// gets task name
let toDoInput = document.getElementById('toDoInput');
// gets task notes
let notes = document.getElementById('notes');

// prevents autocomplete for text feild
toDoInput.setAttribute('autocomplete', 'off');
notes.setAttribute('autocomplete', 'off');

// selects delete buttons on cards
const activateDeletes = () => {
    const removeButton = document.getElementsByClassName('removeMe');
    for (i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        })
    }
};

// prints string to DOM
const printToDom = (divId, stringToPrint) => {
    idSelector = document.getElementById(divId).innerHTML += stringToPrint;
};

// Builds Bootstrap cards
const buildNewToDoCard = (task, information) => {
    let domString = `<div class="card m-5 flex-fill" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${task}</h5>
        <p class="card-text text-muted">${information}</p>
        <button type="button" class="btn btn-danger removeMe">X</button>
        </div>
    </div>`;
    printToDom('toDoCards', domString);
    // call delete button even listener
    activateDeletes();
};

// On button press: translate form info to DOM string
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let todo = toDoInput.value
    let noteValue = notes.value
    if (todo !== '' && noteValue !== ''){
        buildNewToDoCard(todo, noteValue);
        toDoInput.value = null;
        notes.value = null;
    } else {
        
    }
})
