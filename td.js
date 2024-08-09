const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
        input.focus();
    }
});

function addTask(task) {
    const listItem = document.createElement('li');
    const textNode = document.createTextNode(task);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(textNode);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}
