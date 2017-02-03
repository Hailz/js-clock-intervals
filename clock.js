console.log("Running");
document.addEventListener('DOMContentLoaded', function() {  
  var degrees = 0;
  
  function secondRotation(){
    for (var i = 0; i <= 60; i++) {
      degrees= i;
      ((degrees / 60) * 360);
      return degrees;
    };
  };

  function minRotation(){
    for (var i = 0; i < 60; i++) {
      degrees= i;
      ((degrees / 60) * 360);
      return degrees;
    };
  };

  function hourRotation(){
    for (var i = 0; i < 12; i++) {
      degrees= i;
      ((degrees / 12) * 360);
      return degrees;
    };
  };

  var secondHand = document.getElementById("second");
  var secondHandTick = secondHand.style.transform = "rotate(" + secondRotation() + "deg)";

  var secondHandInterval = setInterval(secondHandTick, 1000);

    var minHand = document.getElementById("minute");
  var minHandTick = minHand.style.transform = "rotate(" + minRotation() + "deg)";

  var minHandInterval = setInterval(minHandTick, 60000);

    var hourHand = document.getElementById("hour");
  var hourHandTick = hourHand.style.transform = "rotate(" + hourRotation() + "deg)";

  var hourHandInterval = setInterval(hourHandTick, (3.6e+6));
});