class ToDo {
    constructor(task, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

class Project {
    constructor(name){
        this.name = name
        this.todos = []
    }
}

//functions
function createToDo(){
    
}
function renderToDoList() {
    // Implement rendering logic
}

function expandToDo(title) {
    // Implement expand ToDo logic
}

function deleteToDo(title) {
    // Implement delete ToDo logic
}

function updateLocalStorage() {
    // Implement local storage update logic
}

function loadFromLocalStorage() {
    // Implement loading data from local storage logic
}

// Initialize the application
loadFromLocalStorage();
renderToDoList();
