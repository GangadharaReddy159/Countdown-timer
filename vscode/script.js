const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

let newYears = "4 May 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSecs = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSecs / 3600 / 24);
  const hours = Math.floor(totalSecs / 3600) % 24;
  const mins = Math.floor(totalSecs / 60) % 60;
  const seconds = Math.floor(totalSecs) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
  // console.log(days, hours, mins, seconds);
}

countdown();
setInterval(countdown, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
