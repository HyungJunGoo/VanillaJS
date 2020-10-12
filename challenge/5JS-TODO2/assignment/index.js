const toDoForm = document.querySelector(".pending-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoFinished = document.querySelector(".finished"),
    toDoList = document.querySelector(".ToDoList"),
    finToDoList = toDoFinished.querySelector(".FinishedList");

const TODO_LS = "toDos",
    FINTODO_LS = "finToDos";

let toDos = [];
let finToDos = [];

function deleteToDos(event, whichList) {
    const btn = event.target;
    const li = btn.parentNode;
    if (whichList === "toDoList") {
        toDoList.removeChild(li);
    } else {
        finToDoList.removeChild(li)
    }
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}



function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}



function paintToDos(text) {
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    const finBtn = document.createElement("button");

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDos);
    finBtn.innerText = "✔";
    finBtn.addEventListener("click", finishedToDos);

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
    saveToDos(toDoObj);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
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

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();