const todoList = [];

renderTodoList();
function renderTodoList() {
    let todoListHTML = '';


    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject; // Destructuring
        const html = `
            <div>${name}</div>    
            <div>${dueDate}</div> 
            <button onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            " class="delete-todo-button js-delete-todo-button">Delete</button>
        `; // Generating HTML
        todoListHTML += html
    });

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    console.log(document.querySelectorAll('.js-delete-todo-button'));
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });


function addTodo() {
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;



    todoList.push({
        // name: name,
        // dueDate:dueDate,
        name,
        dueDate
    });


    inputElement.value = '';

    renderTodoList();

}