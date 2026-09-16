
const time = document.querySelector('.time');
const timer = document.querySelector('.timer');
const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");

function renderTime(text) {
   time.innerHTML = text;
};

setInterval(function showTime() {
   const time = new Date();

   renderTime(time.toLocaleTimeString());
}, 1000);


function renderTimer(text) {
   timer.innerHTML = text;
};

let seconds = 0;
let timerId = null;

function start() {
   if (timerId) {
      return
   } else {
      timerId = setInterval(function showTimer() {
         seconds += 1;
         renderTimer(seconds);
      }, 1000);
   }
}

function pause() {
   clearInterval(timerId);
};

btnStart.addEventListener('click', start);
btnPause.addEventListener('click', pause);