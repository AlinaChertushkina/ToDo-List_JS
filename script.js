const button = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const input = document.getElementById('inputField');

button.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph_styling');

    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    });
})
