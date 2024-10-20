var right1 = document.getElementsByClassName("right1");
var si1 = right1.length;
var z1 = 1;

function turnRight1() {
  if (si1 >= 1) {
    si1--;
  } else {
    si1 = right1.length - 1;
    function sttmot(i) {
      setTimeout(function () {
        right1[i].style.zIndex = "auto";
      }, 300);
    }
    for (var i = 0; i < right1.length; i++) {
      right1[i].className = "right1";
      sttmot(i);
      z1 = 1;
    }
  }
  right1[si1].classList.add("flip");
  z1++;
  right1[si1].style.zIndex = z1;
}
function turnLeft1() {
  if (si1 < right1.length) {
    si1++;
  } else {
    si1 = 1;
    for (var i = right1.length - 1; i > 0; i--) {
      right1[i].classList.add("flip");
      right1[i].style.zIndex = right1.length + 1 - i;
    }
  }
  right1[si1 - 1].className = "right1";
  setTimeout(function () {
    right1[si1 - 1].style.zIndex = "auto";
  }, 350);
}
