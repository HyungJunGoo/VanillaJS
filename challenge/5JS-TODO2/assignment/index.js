const toDoForm = document.querySelector(".pending-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoFinished = document.querySelector(".finished"),
    toDoList = document.querySelector(".ToDoList"),
    finToDoList = toDoFinished.querySelector(".FinishedList");

const TODO_LS = "toDos",
    FINTODO_LS = "finToDos";

let toDos = [];
let finToDos = [];

function deleteToDos(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}

function deleteFinToDos(event){
    const btn = event.target;
    const li = btn.parentNode;
    finToDoList.removeChild(li);
    const cleanToDos = finToDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    })
    finToDos = cleanToDos;
    saveFinToDos();
}


function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function saveFinToDos() {
    localStorage.setItem(FINTODO_LS, JSON.stringify(finToDos));
}

function undoToDos() {
    const btn = event.target;
    const li = btn.parentNode;
    const text = li.innerText.substring(0, li.innerText.length-2);

}

function paintFinToDos(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const undoBtn = document.createElement("button");

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteFinToDos);;
    undoBtn.innerText = "⏪";
    undoBtn.addEventListener("click", handleUnDo);
    const span = document.createElement("span");
    span.innerText = text;
    
    const newId = finToDos.length + 1;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(undoBtn);
    li.id = newId;
    finToDoList.appendChild(li);

    const finToDoObj = {
        text: text,
        id: newId
    };

    finToDos.push(finToDoObj);
    saveFinToDos();
}

function paintToDos(text) {
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDos);
    finBtn.innerText = "✔";
    finBtn.addEventListener("click", handleFinish);
    
    const newId = toDos.length + 1;
    
    const span = document.createElement("span");
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    
    toDos.push(toDoObj);
    saveToDos();
}

function handleUnDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    const text = li.innerText.substring(0, li.innerText.length-2);
    deleteFinToDos(event);
    paintToDos(text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

function handleFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    const textcontent = li.innerText.substring(0, li.innerText.length-2);
    deleteToDos(event);
    paintFinToDos(textcontent);
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDos(toDo.text);
        })
    }
}

function loadFinToDos(){
    const loadedFinToDos = localStorage.getItem(FINTODO_LS);
    if (loadedFinToDos !== null){
        const parsedToDos = JSON.parse(loadedFinToDos);
        parsedToDos.forEach(function (toDo) {
            paintFinToDos(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    loadFinToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();