const minutesE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");
const millisecondsE1 = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);

function startTimer() {
   interval = setInterval(() => {
      if(!isPaused) {
         milliseconds += 10

         if(milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
         }

         if(seconds === 60) {
            minutes++;
            seconds = 0;
         }

         minutesE1.textContent = formatTimer(minutes);
         secondsE1.textContent = formatTimer(seconds);
         millisecondsE1.textContent = formatMilliseconds(milliseconds);
      }
   }, 10);

   startBtn.style.display = "none";
   pauseBtn.style.display = "block";
}

function pauseTimer() {
   isPaused = true;
   pauseBtn.style.display = "none";
   resumeBtn.style.display = "block";
}

function resumeTimer() {
   isPaused = false;
   pauseBtn.style.display = "block";
   resumeBtn.style.display = "block";
}

function resetTimer() {
  clearInterval(interval);
  minutes = "0";
  seconds = "0";
  milliseconds = "000";
  
  minutesE1.textContent = "0"
}

function formatTimer(time) {
   return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
   return time < 100 ? `${time}`.padStart(3, "0") : time;
}


 