let pomodoroTimer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startPomodoroTimer() {
  if (isRunning) return;
  isRunning = true;
  pomodoroTimer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(pomodoroTimer);
      isRunning = false;
      alert("Pomodoro time is up!");
    }
  }, 1000);
}

function pausePomodoroTimer() {
  clearInterval(pomodoroTimer);
  isRunning = false;
}

function resetPomodoroTimer() {
  clearInterval(pomodoroTimer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateDisplay();
}


startButton.addEventListener("click", startPomodoroTimer);
pauseButton.addEventListener("click", pausePomodoroTimer);
resetButton.addEventListener("click", resetPomodoroTimer);


updateDisplay();