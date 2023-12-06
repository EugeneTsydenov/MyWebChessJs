// В файле ShowTimer.js
let whiteTimerId;
let blackTimerId;
let whiteTimer = 300;
let blackTimer = 300;

function showWhiteTimer() {
    const elemWhiteTimer = document.querySelector('.white-timer');
    elemWhiteTimer.innerHTML = whiteTimer.toString();
}

function showBlackTimer() {
    const elemBlackTimer = document.querySelector('.black-timer');
    elemBlackTimer.innerHTML = blackTimer.toString();
}

function startWhiteTimer() {
    whiteTimerId = setInterval(() => {
        whiteTimer--;
        showWhiteTimer();
    }, 1000);
}

function startBlackTimer() {
    blackTimerId = setInterval(() => {
        blackTimer--;
        showBlackTimer();
    }, 1000);
}

function stopWhiteTimer() {
    whiteTimer += 3;
    showWhiteTimer()
    clearInterval(whiteTimerId);
}

function stopBlackTimer() {
    blackTimer += 3;
    showBlackTimer()
    clearInterval(blackTimerId);
}

export {
    showWhiteTimer,
    showBlackTimer,
    startWhiteTimer,
    startBlackTimer,
    stopWhiteTimer,
    stopBlackTimer
};
