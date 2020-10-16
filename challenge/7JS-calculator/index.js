const btnGroup = document.getElementById("buttonGroup");

const firstRow = btnGroup.querySelector("#first"),
    text = firstRow.querySelector("#text"),
    C_btn = firstRow.querySelector("#C");


const secondRow = btnGroup.querySelector("#second"),
    sevenBtn = secondRow.querySelector("#sevenBtn"),
    eightBtn = secondRow.querySelector("#eightBtn"),
    nineBtn = secondRow.querySelector("#nineBtn"),
    plusBtn = secondRow.querySelector("#add");

const thirdRow = btnGroup.querySelector("#third"),
    fourBtn = thirdRow.querySelector("#fourBtn"),
    fiveBtn = thirdRow.querySelector("#fiveBtn"),
    sixBtn = thirdRow.querySelector("#sixBtn"),
    minusBtn = thirdRow.querySelector("#sub");

const fourthRow = btnGroup.querySelector("#fourth"),
    oneBtn = fourthRow.querySelector("#oneBtn"),
    twoBtn = fourthRow.querySelector("#twoBtn"),
    threeBtn = fourthRow.querySelector("#threeBtn"),
    mulBtn = fourthRow.querySelector("#mul");

const fifthRow = btnGroup.querySelector("#fifth"),
    zeroBtn = fifthRow.querySelector("#zeroBtn"),
    resultBtn = fifthRow.querySelector("#resultBtn"),
    divBtn = fifthRow.querySelector("#div");


let VALUE = "";
let INTVALUE = 0;
let INPUTSTATUS = 0;
let VALUES = [];

const OPERATION = ["add", "sub", "mul", "div"];
let CURRENT = "";


function handleNumber(event) {
    if (INPUTSTATUS === 0) {
        text.innerHTML = "";
        INPUTSTATUS += 1;
    }
    if (INPUTSTATUS === 1) {
        VALUE += event.target.innerHTML;
    }
    handleDisplay(VALUE);
}

function handleOperation(event) {
    const operation = event.target.id;
    INPUTSTATUS = 0;
    if (VALUE !== "")
        VALUES.push(parseInt(VALUE));

    if (VALUES.length === 3) {
        let result;
        let newVALUES = [];
        switch (VALUES[1]) {
            case "add":
                result = VALUES[0] + VALUES[2];
                newVALUES.push(result);
                VALUES = newVALUES;
                break;
            case "sub":
                result = VALUES[0] - VALUES[2];
                newVALUES.push(result);
                VALUES = newVALUES;
                break;
            case "mul":
                result = VALUES[0] * VALUES[2];
                newVALUES.push(result);
                VALUES = newVALUES;
                break;
            case "div":
                result = VALUES[0] / VALUES[2];
                newVALUES.push(result);
                VALUES = newVALUES;
                break;

            default:
                break;
        }
        handleDisplay(VALUES[0]);
    }
    switch (operation) {
        case "add":
            VALUES.push("add");
            break;
        case "sub":
            VALUES.push("sub");
            break;
        case "mul":
            VALUES.push("mul");
            break;
        case "div":
            VALUES.push("div");
            break;

        default:
            break;
    }

    VALUE = "";

}

function handleTotal() {
    VALUES.push(parseInt(VALUE));
    let result;
    let newVALUES = [];
    switch (VALUES[1]) {
        case "add":
            result = VALUES[0] + VALUES[2];
            newVALUES.push(result);
            VALUES = newVALUES;
            break;
        case "sub":
            result = VALUES[0] - VALUES[2];
            newVALUES.push(result);
            VALUES = newVALUES;
            break;
        case "mul":
            result = VALUES[0] * VALUES[2];
            newVALUES.push(result);
            VALUES = newVALUES;
            break;
        case "div":
            result = VALUES[0] / VALUES[2];
            newVALUES.push(result);
            VALUES = newVALUES;
            break;

        default:
            break;
    }
    handleDisplay(VALUES[0]);
    VALUE = "";
}

function handleClear() {
    handleDisplay(0);
    let newVALUES = [];
    VALUES = newVALUES;
}

function handleDisplay(value) {
    text.innerHTML = value;
}

function init() {
    text.innerHTML = 0;
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
    plusBtn.addEventListener("click", handleOperation);
    minusBtn.addEventListener("click", handleOperation);
    mulBtn.addEventListener("click", handleOperation);
    divBtn.addEventListener("click", handleOperation);
    resultBtn.addEventListener("click", handleTotal);
    C_btn.addEventListener("click", handleClear);
}

init();