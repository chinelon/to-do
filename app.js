class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const listContainer = document.getElementById('list-container');
const todo = document.getElementById('app3');

function createToDo() {
    newToDo = document.createElement('div');
    newToDo.innerHTML = `
    <div>
    <form id="todoForm">
        <input placeholder="Title" id="task">
        <input placeholder="Description" id="description">
        <input type="date" id="dueDate">
        <select id="priority"> <p> Priority<p>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button type="button" onclick="addTask()"> + </button>
    </form>
</div>
`
    todo.appendChild(newToDo)
}

function addTask() {
    const title = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (title === "" || description === "" || priority === "") {
        alert('You must input information');
    }
    else {
        const newTodo = new Todo(title, description, dueDate, priority);
        displayTodo(newTodo);

    }
    saveData()

    //clears input field
    document.getElementById('task').value = "";
    document.getElementById('description').value = "";
    document.getElementById('dueDate').value = "";
    document.getElementById('priority').value = "";

}

function displayTodo(todo) {
    let li = document.createElement('li');
    li.innerHTML = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
    listContainer.appendChild(li)

    //adds the cross sign tothe end of the todo.
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span)
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()