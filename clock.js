console.log("Running");

var INTERVAL_DELAY = 1000;
var SHOW_REAL_TIME = true;

var SECONDS_IN_MINUTE = 60;
var SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
var SECONDS_IN_12_HOURS = 12 * SECONDS_IN_HOUR;

var TIME = 0;

document.addEventListener("DOMContentLoaded", function() {
  setInterval(tick, INTERVAL_DELAY);
});

function tick() {
  if (SHOW_REAL_TIME) {
    var now = new Date();
    TIME = 0;
    TIME += now.getMilliseconds() / 1000;
    TIME += now.getSeconds();
    TIME += 60 * now.getMinutes();
    TIME +=  60 * 60 * now.getHours();
  } else {
    TIME++;
    TIME = TIME % SECONDS_IN_12_HOURS;
  }
  rotateClock();
};

function rotateClock() {
  second.style.transform = "rotate(" + degreesSeconds(TIME) + "deg)";
  minute.style.transform = "rotate(" + degreesMinutes(TIME) + "deg)";
  hour.style.transform = "rotate(" + degreesHours(TIME) + "deg)";
};

function degreesSeconds(seconds) {
  var percent = seconds / SECONDS_IN_MINUTE * 360;
  return Math.round(percent);
};

function degreesMinutes(seconds) {
  var percent = seconds / SECONDS_IN_HOUR * 360;
  return Math.round(percent);
};

function degreesHours(seconds) {
  var percent = seconds / SECONDS_IN_12_HOURS * 360;
  return Math.round(percent);
};