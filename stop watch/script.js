// lets create a start , stop , reset

// lets have a second , hour , minute ->

var sec = 0,
  hr = 0,
  min = 0;
let start_btn = document.getElementById(`start-btn`);

let stop_btn = document.getElementById(`stop-btn`);

let reset_btn = document.getElementById(`reset-btn`);

let timer = false;

document.getElementById(`timer-hour`).innerHTML = hr;
document.getElementById(`timer-min`).innerHTML = min;
document.getElementById(`timer-sec`).innerHTML = sec;

start_btn.addEventListener(`click`, start_func);

stop_btn.addEventListener(`click`, stop_func);

reset_btn.addEventListener(`click`, reset_func);

function start_func() {
  timer = true;
  stop_watch();
}

function stop_func() {
  timer = false;
}

function reset_func() {
  (sec = 0), (min = 0), (hr = 0);
  timer = false;
  document.getElementById(`timer-hour`).innerHTML = "00";
  document.getElementById(`timer-min`).innerHTML = "00";
  document.getElementById(`timer-sec`).innerHTML = "00";
}
function stop_watch() {
  if (timer) {
    sec++;
    if (sec == 60) {
      if (min == 60) {
        min = 0;
        hr += 1;
      } else {
        min++;
      }
      sec = 0;
    }

    // sec - 9 , min -9 , hr - 1 , 01 : 09 : 09
    let hr_string = hr,
      min_string = min,
      sec_string = sec;

    if (hr_string < 10) {
      hr_string = "0" + hr_string;
    }

    if (min_string < 10) {
      min_string = "0" + min_string;
    }

    if (sec_string < 10) {
      sec_string = "0" + sec_string;
    }

    document.getElementById(`timer-hour`).innerHTML = hr_string;
    document.getElementById(`timer-min`).innerHTML = min_string;
    document.getElementById(`timer-sec`).innerHTML = sec_string;
    setTimeout(stop_watch, 1000);
  }
}
