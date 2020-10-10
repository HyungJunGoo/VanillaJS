// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function changeColour() {
    const w = window.innerWidth;

    if (w > 1000) {
        body.classList.add(BIG_SCREEN);
        body.classList.remove(MEDIUM_SCREEN);
    } else if (w <= 1140 && w > 700) {
        body.classList.add(MEDIUM_SCREEN);
        body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
    } else {
        body.classList.add(SMALL_SCREEN);
        body.classList.remove(MEDIUM_SCREEN);
    }
}

window.addEventListener("resize", changeColour);