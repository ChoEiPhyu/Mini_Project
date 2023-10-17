const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButton = document.getElementsByClassName("start")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const continueButton = document.getElementsByClassName("continue")[0];
const restarButton = document.getElementsByClassName("restart")[0];

let seconds = 0,
  minutes = 0;
hours = 0;

let setIntervalId;
const startFunction = () => {
  setIntervalId = setInterval(() => {
    seconds += 1;
    if (seconds == 60) {
      seconds = 0;
      minutes += 1;
      if (minutes == 60) {
        minutes = 0;
        hours += 1;
      }
    }
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
  }, 1000);
};

const stopFunction = () => {
  clearInterval(setIntervalId);
};

startButton.addEventListener("click", startFunction); //start
pauseButton.addEventListener("click", stopFunction); //stop
continueButton.addEventListener("click", () => {
  //continue
  stopFunction(); //to avoid to run start function twice
  startFunction();
});
restarButton.addEventListener("click", () => {
  //restart
  stopFunction();
  hours = 0;
  minutes = 0;
  seconds = 0;
  startFunction();
});
