var right2 = document.getElementsByClassName("right2");
var si2 = right2.length;
var z2 = 1;

function turnRight2() {
  if (si2 >= 1) {
    si2--;
  } else {
    si2 = right2.length - 1;
    function sttmot(i) {
      setTimeout(function () {
        right2[i].style.zIndex = "auto";
      }, 300);
    }
    for (var i = 0; i < right2.length; i++) {
      right2[i].className = "right2";
      sttmot(i);
      z2 = 1;
    }
  }
  right2[si2].classList.add("flip");
  z2++;
  right2[si2].style.zIndex = z2;
}
function turnLeft2() {
  if (si2 < right2.length) {
    si2++;
  } else {
    si2 = 1;
    for (var i = right2.length - 1; i > 0; i--) {
      right2[i].classList.add("flip");
      right2[i].style.zIndex = right2.length + 1 - i;
    }
  }
  right2[si2 - 1].className = "right2";
  setTimeout(function () {
    right2[si2 - 1].style.zIndex = "auto";
  }, 350);
}
