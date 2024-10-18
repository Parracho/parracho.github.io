let right = [document.getElementsByClassName("right0"),document.getElementsByClassName("right1")];
let si = [right[0].length,right[1].length];
let z = [1,1];

function turnRight(id) {
  if (si[id] >= 1) {
    si[id]--;
  } else {
    si[id] = right[id].length - 1;
    function sttmot(i) {
      setTimeout(function () {
        right[id][i].style.zIndex = "auto";
      }, 300);
    }
    for (var i = 0; i < right[id].length; i++) {
      if (id==0){ 
        right[id][i].className = "right0";
        sttmot(i);
        z[id] = 1;
      }
      else if (id==1){ 
        right[id][i].className = "right1";
        sttmot(i);
        z[id] = 1;
      }
    }
  }
  right[id][si].classList.add("flip");
  z[id]++;
  right[id][si].style.zIndex = z[id];
}

function turnLeft(id) {
  if (si[id] < right[id].length) {
    si[id]++;
  } else {
    si[id] = 1;
    for (var i = right[id].length - 1; i > 0; i--) {
      right[id][i].classList.add("flip");
      right[id][i].style.zIndex = right[id].length + 1 - i;
    }
  }
  if (id==0){
    right[id][si[id] - 1].className = "right0";
  }
  else if (id==1){
    right[id][si[id] - 1].className = "right1";
  }
  setTimeout(function () {
    right[id][si[id] - 1].style.zIndex = "auto";
  }, 350);
}

  