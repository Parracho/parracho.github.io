var right4 = document.getElementsByClassName("right4");
var si4 = right4.length;
var z4 = 1;

function turnRight4() {
  if (si4 >= 1) {
    si4--;
  } else {
    si4 = right4.length - 1;
    function sttmot(i) {
      setTimeout(function () {
        right4[i].style.zIndex = "auto";
      }, 300);
    }
    for (var i = 0; i < right4.length; i++) {
      right4[i].className = "right4";
      sttmot(i);
      z4 = 1;
    }
  }
  right4[si4].classList.add("flip");
  z4++;
  right4[si4].style.zIndex = z4;
}
function turnLeft4() {
  if (si4 < right4.length) {
    si4++;
  } else {
    si4 = 1;
    for (var i = right4.length - 1; i > 0; i--) {
      right4[i].classList.add("flip");
      right4[i].style.zIndex = right4.length + 1 - i;
    }
  }
  right4[si4 - 1].className = "right4";
  setTimeout(function () {
    right4[si4 - 1].style.zIndex = "auto";
  }, 350);
}
