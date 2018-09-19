const submitButton = document.getElementById('submitButton');
let toDoInput = document.getElementById('toDoInput');
let notes = document.getElementById('notes');
toDoInput.setAttribute('autocomplete', 'off');
notes.setAttribute('autocomplete', 'off');
const removeButton = document.getElementById('removeMe');

const printToDom = (divId, stringToPrint) => {
    idSelector = document.getElementById(divId);
    idSelector.innerHTML = stringToPrint;
};

const buildNewToDoCard = (task, information) => {
    let domString = `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${task}</h5>
        <p class="card-text">${information}</p>
        <button type="button" class="btn btn-danger" id="removeMe">X</button>
        </div>
    </div>`
    printToDom('toDoCards', domString);
};

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let todo = toDoInput.value
    let noteValue = notes.value
    buildNewToDoCard(todo, noteValue);
    console.log('to do:',todo);
    console.log('notes:',noteValue);
    toDoInput.value = null;
    notes.value = null;
})
