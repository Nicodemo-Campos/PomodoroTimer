const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let minutes = 25;
let seconds = 0;
let isRunning = false;
let interval;

function updateTime() {
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                    isRunning = false;
                    alert('¡Tiempo terminado! ¡Tómate un descanso!');
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateTime();
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTime();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateTime();