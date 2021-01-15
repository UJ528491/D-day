// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const h2 = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24");
  const todayMS_2020 = new Date() - 365*24*60*60*1000;
  const xmasMS = xmasDay.getTime() - NINE_HOURS_MILLISECONDS;
  const elapsedMS = (xmasMS - todayMS_2020);
  const elapsedS = Math.floor(elapsedMS/1000);
  const d_day = Math.floor(elapsedS/60/60/24);
  const d_hours = Math.floor((elapsedS%(60*60*24))/60/60);
  const d_minutes = Math.floor((elapsedS%(60*60))/60);
  const d_seconds = Math.floor(elapsedS%60);
  h2.innerText  = `${d_day}d ${d_hours<10 ? `0${d_hours}` : d_hours}h ${d_minutes<10 ? `0${d_minutes}` : d_minutes}m ${d_seconds<10 ? `0${d_seconds}` : d_seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
