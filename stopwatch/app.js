let intervalTime;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

document.querySelector('.start').addEventListener('click', startTime);
document.querySelector('.stop').addEventListener('click', stopTime);
document.querySelector('.reset').addEventListener('click', resetTime);

function startTime() {
    if (!isRunning){
        isRunning = true
        intervalTime = setInterval(UpdateTime, 1000);
    }
}

function stopTime(){
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalTime);
    }
}

function resetTime(){
        isRunning = false;
        clearInterval(intervalTime)
        seconds = 0
        minutes = 0;
        hours = 0;
        document.querySelector('.display').innerText = "00:00:00";
}

function UpdateTime(){
    seconds++
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes === 60) {
        hours++;
        minutes = 0;
    }

    let displaySeconds = seconds < 10 ? '0' + seconds :seconds;
let displayMinutes = minutes < 10 ? '0' + minutes :minutes;
let displayHours = hours < 10 ? '0' + hours :hours;

document.querySelector('.display').innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

