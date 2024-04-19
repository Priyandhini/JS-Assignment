let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStopButton').innerText = 'Start';
    isRunning = false;
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById('startStopButton').innerText = 'Stop';
    isRunning = true;
  }
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('display').innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  document.getElementById('startStopButton').innerText = 'Start';
  document.getElementById('display').innerText = '00:00:00';
}

document.getElementById('startStopButton').addEventListener('click', startStop);
document.getElementById('resetButton').addEventListener('click', reset);

  