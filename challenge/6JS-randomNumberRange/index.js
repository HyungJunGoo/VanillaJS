const part1 = document.getElementById("part1"),
    part2 = document.getElementById("part2"),
    generateSentence = part1.querySelector(".generateSentence"),
    rangeSlider = part1.querySelector(".range"),
    guessSentence = part2.querySelector(".guessNumberSentence"),
    userNumber = part2.querySelector("#guessNumber"),
    playButton = part2.querySelector("button"),
    currentStatus = part2.querySelector(".currentStatus"),
    result = part2.querySelector(".result");

let MAX = parseInt(rangeSlider.value);
let ANSWER;

function defaultShow() {
    generateSentence.innerHTML = `Generate a number between 0 and ${rangeSlider.value}`;
    guessSentence.innerHTML = "Guess the number:";
    guessSentence.style = "font-weight:bold";

    ANSWER = generateRandomNumber(MAX);
    rangeSlider.addEventListener("change", moveSlide);
    playButton.addEventListener("click", playShow);
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function playShow() {
    if (userNumber.value === "" || parseInt(userNumber.value) < 0) return;

    currentStatus.innerHTML = `Your chose: ${userNumber.value} the machine chose ${ANSWER}`;
    if (parseInt(userNumber.value) === ANSWER) {
        result.innerHTML = "You Win!";
        result.style = "color:blue";
    } else {
        result.innerHTML = "You Lost!";
        result.style = "color:red";
    }
}

function moveSlide() {
    MAX = rangeSlider.value;
    ANSWER = generateRandomNumber(MAX);
    generateSentence.innerHTML = `Generate a number between 0 and ${MAX}`;
    console.log(ANSWER);
}

function init() {
    defaultShow();
}
init();