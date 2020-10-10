const title = document.querySelector("#title")

const colors = ["blue", "red", "black", "white", "springgreen", "steelblue", "tomato", "teal", "yellow", "violet"]

let numberOfColours = colors.length;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const superEventHandler = {
    resizeHandler: function () {
        title.innerHTML = "You just resized!";
        title.style.color = colors[0];
    },

    clickHandler: function () {
        title.innerHTML = "The cursor is here!";
        title.style.color = colors[getRandomInt(numberOfColours)];
    },

    rightClickHandler: function () {
        title.innerHTML = "That was a right click!";
        title.style.color = colors[getRandomInt(numberOfColours)];
    },

    mouseoverHandler: function () {
        title.innerHTML = "The cursor is here!";
        title.style.color = colors[getRandomInt(numberOfColours)];
    },

    mouseoutHandler: function () {
        title.innerHTML = "The cursor is gone!";
        title.style.color = colors[getRandomInt(numberOfColours)];
    },
}

window.addEventListener("resize", superEventHandler.resizeHandler)
window.addEventListener("click", superEventHandler.clickHandler)
window.addEventListener("contextmenu", superEventHandler.rightClickHandler)
title.addEventListener("mouseover", superEventHandler.mouseoverHandler)
title.addEventListener("mouseout", superEventHandler.mouseoutHandler)