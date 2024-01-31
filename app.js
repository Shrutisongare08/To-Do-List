const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");

// Function to add a new task 
function addTask() {
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else {
        let newTask = document.createElement("li");
        newTask.innerHTML = inputBox.value;
        listContainer.appendChild(newTask); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        newTask.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click" , (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save data to localStorage
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

// Function to show tasks from localStorage
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTasks();