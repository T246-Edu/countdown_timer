const newYear = "1 January 2023";
const monthsEL = document.getElementById("months");
const weeksEL = document.getElementById("weeks");
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
  const weeks = Math.floor(baseDays % 7);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const seconds_calc = Math.floor(seconds % 60);
  monthsEL.innerHTML = months;
  weeksEL.innerHTML = weeks;
  daysEL.innerHTML = days;
  hoursEL.innerHTML = hours;
  minsEL.innerHTML = minutes;
  secondsEL.innerHTML = seconds_calc; 
}

countDown();

setInterval(countDown, 1000);
