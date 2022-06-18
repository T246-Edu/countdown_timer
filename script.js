const newYear = "1 jan 2023";
const monthsEL = document.getElementById("months");
const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

function countDown() {
  const YearsDate = new Date(newYear);
  const currentDate = new Date();

  const seconds = (YearsDate - currentDate) / 1000;
  const baseDays = Math.floor(seconds / 3600 / 24);
  const months = Math.floor(baseDays / 30);
  const days = Math.floor(baseDays % 30);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const seconds_calc = Math.floor(seconds % 60);
  monthsEL.innerHTML = formatTime(months);
  daysEL.innerHTML = formatTime(days);
  hoursEL.innerHTML = formatTime(hours);
  minsEL.innerHTML = formatTime(minutes);
  secondsEL.innerHTML = formatTime(seconds_calc);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
