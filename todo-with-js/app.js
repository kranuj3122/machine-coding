const input = document.getElementById('new-task-input');
const addBtn = document.getElementById('add-task-button');
const todoList = document.getElementById('task-list');

let editMode = false;
let editItem = null;

addBtn.addEventListener('click', ()=>{
    let task = input.value.trim();
    if(!task) {
        alert('enter valid task');
        return;
    }
    if(editMode) {
        editItem.firstChild.innerText = task;
        input.value = '';
        addBtn.innerText = 'Add Task'
        editMode = false;
        editItem = null;
        return;
    }
    addTodo(task);
});
todoList.addEventListener('click', (event)=>{
    let target = event.target;
    if(target.tagName==='BUTTON') {
        const listItem = target.parentNode;
        if(target.textContent==='x') {
            listItem.remove();
        }
        else if(target.textContent==='edit') {
            editMode = true;
            editItem = listItem;
            input.value = listItem.firstChild.textContent;
            addBtn.innerText = 'Edit Task';
        }
    }
})
function addTodo() {
    const listItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    listItem.innerHTML=`<span>${input.value}</span>`;
    editBtn.innerText = 'edit';
    removeBtn.innerText = 'x';
    listItem.appendChild(editBtn);
    listItem.appendChild(removeBtn);
    todoList.appendChild(listItem);
    input.value = '';
}