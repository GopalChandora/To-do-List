let InputValue = document.querySelector('#input-box');
let addButton = document.querySelector('#btn_add');
let TaskContainer = document.querySelector('.task-container');

// Saving Data to Local Storage
function savedata() {
    console.log(TaskContainer.innerHTML)
    localStorage.setItem('data', TaskContainer.innerHTML);
}

// Adding Task
function add() {
    if (InputValue.value == '') {
        alert("Please Write something");
        return;
    }
    else {
        let taskElementContainer = document.createElement('div');
        taskElementContainer.classList.add('task-element')
        TaskContainer.appendChild(taskElementContainer)

        // Creating Textarea
        let taskInput = document.createElement('textarea');
        taskInput.type = 'textarea';
        taskInput.innerText = InputValue.value;
        taskInput.setAttribute('readonly', 'readonly')
        taskInput.classList.add('task', 'task-bg');
        taskElementContainer.appendChild(taskInput);

        // Creating Edit Button
        let EditButton = document.createElement('button');
        EditButton.innerHTML = "Edit"
        EditButton.classList.add('btn', 'edit')
        taskElementContainer.appendChild(EditButton);

        // Creating Delete Button
        let DeleteButton = document.createElement('button');
        DeleteButton.innerHTML = "Delete"
        DeleteButton.classList.add('btn', 'delete')
        taskElementContainer.appendChild(DeleteButton);
    }
    InputValue.value = "";
    savedata();
}

addButton.addEventListener('click', add);

TaskContainer.addEventListener('click', (e) => {
    // Updating Text of Task
    if (e.target.innerText.toLowerCase() == 'edit') {
        // console.log(e.target);
        e.target.previousElementSibling.removeAttribute("readonly");
        e.target.previousElementSibling.focus();
        e.target.innerText = 'Save';
        savedata();
    }
    // Saving the updated Task
    else if (e.target.innerText.toLowerCase() == 'save') {
        // console.log(e.target)
        e.target.previousElementSibling.setAttribute("readonly", "readonly");
        e.target.previousElementSibling.innerText = e.target.previousElementSibling.value;
        e.target.innerText = 'Edit';
        savedata();
    }
    // Deleting the Task
    else if (e.target.innerText.toLowerCase() == 'delete') {
        console.log(e.target.parentElement.remove())
        savedata();
    }
})

//Preserving the data
function showdata() {
    TaskContainer.innerHTML = localStorage.getItem('data')
}
showdata()
