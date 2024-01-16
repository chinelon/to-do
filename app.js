const task = document.getElementById('task');
const listContainer = document.getElementById('list-container');

function addTask(){
    if (task.value === ""){
        alert('you must write something');
    } 
    else {
        let li = document.createElement('li');
        li.innerHTML = task.value;
        listContainer.appendChild(li)

        //adds the cross sign tothe end of the todo.
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    //clears input field
    task.value= "";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()