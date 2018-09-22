
let timer = document.getElementById("timer");
let minutesHolder = document.getElementById("timer_minutes");
let secondsHolder = document.getElementById("timer_seconds");
let timer_minutes = 0;
let timer_seconds = 1;
let paused = false;
let intervals;

function addZero(num) {
    if (num.toString().length == 1) {
      num = '0'+num;
    }
    return num;
}

function startTimer() {
    secondsHolder.innerHTML = addZero(timer_seconds);
    minutesHolder.innerHTML = addZero(timer_minutes);
    ++timer_seconds;
    if (timer_seconds>59) {
        ++timer_minutes;
        timer_seconds = 0;
    }
}

intervals = setInterval(startTimer, 1000);

function stopTimer() {
    paused = true;
    clearInterval(intervals);
}

timer.addEventListener("mouseenter", stopTimer);
timer.addEventListener("mouseleave", checkTimer);
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        timer_seconds = 0;
        timer_minutes = 0;
        console.log('Escape!')
    }
});

function checkTimer() {
    if (paused) {
        intervals = setInterval(startTimer, 1000);
    }
}