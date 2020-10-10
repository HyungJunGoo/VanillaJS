const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const oneDay = 1000 * 60 * 60 * 24; //One Day Time in ms
    const oneHour = 1000 * 60 * 60;
    const oneMin = 1000 * 60;
    const oneSec = 1000;
    const today = new Date();
    const Xmas = new Date(today.getFullYear(), 11, 25);
    const xmasDay = new Date("2020-12-24:00:00:00+0900");

    if (today.getMonth() == 11 && today.getDate() > 25) {
        xmasDay.setFullYear(xmasDay.getFullYear() + 1);
    }

    const diffDate = (xmasDay.getTime() - today.getTime()) / (oneDay);
    const diffHours = (xmasDay.getTime() - today.getTime()) % (oneDay);
    const diffMins = (diffHours % oneHour);
    const diffSecs = (diffMins % oneMin);


    const leftDay = Math.floor(diffDate).toFixed(0);
    const leftHour = Math.floor(diffHours / oneHour).toFixed(0);
    const leftMins = Math.floor(diffMins / oneMin).toFixed(0);
    const leftSecs = (diffSecs / oneSec).toFixed(0);

    clockTitle.innerText = `${leftDay}d ${leftHour}h ${leftMins}m ${leftSecs}s`
    clockTitle.innerText = `${leftDay < 10 ? `0${leftDay}` : leftDay}d ${leftHour < 10 ? `0${leftHour}` : leftHour}h ${leftMins < 10 ? `0${leftMins}` : leftMins}m ${leftSecs < 10 ? `0${leftSecs}` : leftSecs}s`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();