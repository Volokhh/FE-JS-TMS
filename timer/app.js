const time = document.querySelector('.time');
const timer = document.querySelector('.timer');
const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");

function render(element, text) {
   element.innerHTML = text;
};

setInterval(function showTime() {
   const currentTime = new Date();

   render(time, currentTime.toLocaleTimeString());
}, 1000);

let seconds = 0;
let timerId = null;

function start() {
   if (timerId) {
      return
   }

   timerId = setInterval(function showTimer() {
      seconds += 1;
      render(timer, seconds + ' s');
   }, 1000);
}

function pause() {
   clearInterval(timerId);
   timerId = null;
};

btnStart.addEventListener('click', start);
btnPause.addEventListener('click', pause);