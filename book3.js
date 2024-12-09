var right3 = document.getElementsByClassName("right3");
var si3 = right3.length;
var z3 = 1;

function turnRight3() {
  if (si3 >= 1) {
    si3--;
  } else {
    si3 = right3.length - 1;
    function sttmot(i) {
      setTimeout(function () {
        right3[i].style.zIndex = "auto";
      }, 300);
    }
    for (var i = 0; i < right3.length; i++) {
      right3[i].className = "right3";
      sttmot(i);
      z3 = 1;
    }
  }
  right3[si3].classList.add("flip");
  z3++;
  right3[si3].style.zIndex = z3;
}
function turnLeft3() {
  if (si3 < right3.length) {
    si3++;
  } else {
    si3 = 1;
    for (var i = right3.length - 1; i > 0; i--) {
      right3[i].classList.add("flip");
      right3[i].style.zIndex = right3.length + 1 - i;
    }
  }
  right3[si3 - 1].className = "right3";
  setTimeout(function () {
    right3[si3 - 1].style.zIndex = "auto";
  }, 350);
}
