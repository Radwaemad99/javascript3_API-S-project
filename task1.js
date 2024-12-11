let inputField = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  let taskText = inputField.value;
  if (taskText.trim() !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    let doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
      listItem.style.backgroundColor = ' green';
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    inputField.value = '';
  }
});