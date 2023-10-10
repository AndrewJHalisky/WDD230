const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function () {
    if (input.value != '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.focus();
    }
})

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.value = '';

// button.addEventListener('click', () => { ... });