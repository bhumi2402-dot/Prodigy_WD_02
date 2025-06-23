let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    running = true;
  }
}

function pauseStopwatch() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  running = false;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (!running) return;
  const lapTime = document.getElementById('display').textContent;
  const lap = document.createElement('li');
  lap.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(lap);
}
