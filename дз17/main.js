setInterval(() => {
  let dd = new Date();
  let day = dd.getDate();
  let month = dd.getMonth() + 1;
  let year = dd.getFullYear();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  document.querySelector(".date").innerHTML = `${day}.${month}.${year}`;
}, 1000);

setInterval(() => {
  let dd = new Date();
  let hh = dd.getHours();
  let mm = dd.getMinutes();
  let ss = dd.getSeconds();
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;
  if (ss < 10) ss = "0" + ss;
  document.querySelector(".hours").innerHTML = `${hh} : ${mm} : ${ss}`;
});

let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function updateTime() {
  const now = Date.now();
  const diff = now - startTime + elapsedTime;
  const hours = Math.floor(diff / 3600000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((diff % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((diff % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  const milliseconds = Math.floor(diff % 1000)
    .toString()
    .padStart(3, "0");

  document.getElementById(
    "time"
  ).innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timer = setInterval(updateTime);
  }
});

document.getElementById("loop").addEventListener("click", () => {
  const currentTime = document.getElementById("time").innerText;
  const loopsTextarea = document.getElementById("loops");
  loopsTextarea.value += currentTime + "\n";
});

document.getElementById("stop").addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  document.getElementById("time").innerHTML = "00:00:00:00";
  const loopsTextarea = document.getElementById("loops");
  loopsTextarea.value = "";
});








let timerInterval;
let timerMinutes = 25;
let timeRemaining = timerMinutes * 60 * 1000;

function updateTimerDisplay() {
  document.getElementById("timer").innerText = timerMinutes;
}

function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}

document.getElementById("start-timer").addEventListener("click", () => {
  if (!timerInterval) {
    const endTime = Date.now() + timeRemaining;

    timerInterval = setInterval(() => {
      timeRemaining = endTime - Date.now();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("time2").innerText = "00:00";
      } else {
        const minutes = Math.floor(timeRemaining / 60000);
        const seconds = Math.floor((timeRemaining % 60000) / 1000);
        document.getElementById("time2").innerText = `${formatTimeUnit(
          minutes
        )}:${formatTimeUnit(seconds)}`;
      }
    }, 1000);
  }
});

document.getElementById("stop-timer").addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

document.getElementById("reset-timer").addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerMinutes = 25;
  timeRemaining = timerMinutes * 60 * 1000;
  updateTimerDisplay();
  document.getElementById("time2").innerText = "00:00";
});

document.getElementById("increase-timer").addEventListener("click", () => {
  timerMinutes++;
  timeRemaining = timerMinutes * 60 * 1000;
  updateTimerDisplay();
});

document.getElementById("decrease-timer").addEventListener("click", () => {
  if (timerMinutes > 0) {
    timerMinutes--;
    timeRemaining = timerMinutes * 60 * 1000;
    updateTimerDisplay();
  }
});
