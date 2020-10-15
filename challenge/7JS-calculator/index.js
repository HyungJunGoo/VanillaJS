const btnGroup = document.getElementById("buttonGroup");

const firstRow = btnGroup.querySelector("#first"),
    text = firstRow.querySelector("#text"),
    C_btn = firstRow.querySelector("#C");

const secondRow = btnGroup.querySelector("#second"),
    sevenBtn = secondRow.querySelector("#sevenBtn"),
    eightBtn = secondRow.querySelector("#eightBtn"),
    nineBtn = secondRow.querySelector("#nineBtn"),
    plusBtn = secondRow.querySelector("#plus");

const thirdRow = btnGroup.querySelector("#third"),
    fourBtn = thirdRow.querySelector("#fourBtn"),
    fiveBtn = thirdRow.querySelector("#fiveBtn"),
    sixBtn = thirdRow.querySelector("#sixBtn"),
    minusBtn = thirdRow.querySelector("#minusBtn");

const fourthRow = btnGroup.querySelector("#fourth"),
    oneBtn = fourthRow.querySelector("#oneBtn"),
    twoBtn = fourthRow.querySelector("#twoBtn"),
    threeBtn = fourthRow.querySelector("#threeBtn"),
    mulBtn = fourthRow.querySelector("#mulBtn");

const fifthRow = btnGroup.querySelector("#fifth"),
    zeroBtn = fifthRow.querySelector("#zeroBtn"),
    resultBtn = fifthRow.querySelector("#resultBtn"),
    divBtn = fifthRow.querySelector("#divBtn");

let STATUS = 0;
text.innerHTML = 0;
let LEFT = 0, RIGHT = 0, RESULT = 0;
const OPERATION = ["ADD", "SUB", "MUL", "DIV"];
let CURRENT = "";
function handleNumber(event){
    text.innerHTML += parseInt(event.target.innerHTML);
    if (STATUS === 0){
        text.innerHTML = parseInt(text.innerHTML.substring(1, ));
        STATUS = 1;
    }   
}

function handlePlus(){
    LEFT += parseInt(text.innerHTML);
    text.innerHTML = 0;
    STATUS = 0;
    CURRENT = OPERATION[0];
}

function handleResult(){
    RIGHT += parseInt(text.innerHTML);
    if(CURRENT === "ADD"){
        RESULT = LEFT+RIGHT;
        text.innerHTML = parseInt(RESULT);
        LEFT = 0;
        RIGHT = 0;
        RESULT = 0;
        STATUS = 0;
        CURRENT = "";
    }
}

function init() {
    sevenBtn.addEventListener("click", handleNumber);
    eightBtn.addEventListener("click", handleNumber);
    nineBtn.addEventListener("click", handleNumber);
    fourBtn.addEventListener("click", handleNumber);
    fiveBtn.addEventListener("click", handleNumber);
    sixBtn.addEventListener("click", handleNumber);
    oneBtn.addEventListener("click", handleNumber);
    twoBtn.addEventListener("click", handleNumber);
    threeBtn.addEventListener("click", handleNumber);
    zeroBtn.addEventListener("click", handleNumber);
    plusBtn.addEventListener("click", handlePlus);
    resultBtn.addEventListener("click", handleResult);
}

init();