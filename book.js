var containers = document.querySelectorAll(".container"); // Select all book containers
var currentIndexes = []; // Track the current index for each book container
var zIndexes = []; // Track the z-index for each book container

// Initialize variables for each book container
for (var i = 0; i < containers.length; i++) {
  var rightElements = containers[i].getElementsByClassName("right");
  currentIndexes.push(rightElements.length); // Start at the last element
  zIndexes.push(1); // Initialize z-index to 1 for each book container
}

// Turn right function (for each book container)
function turnRight(bookIndex) {
  var rightElements = containers[bookIndex].getElementsByClassName("right");
  var si = currentIndexes[bookIndex];

  if (si >= 1) {
    si--;
  } else {
    si = rightElements.length - 1;

    function resetZIndex(i) {
      setTimeout(function () {
        rightElements[i].style.zIndex = "auto";
      }, 300);
    }

    for (var i = 0; i < rightElements.length; i++) {
      rightElements[i].className = "right"; // Reset flip state
      resetZIndex(i); // Reset z-index
      zIndexes[bookIndex] = 1; // Reset z-index tracker for this book container
    }
  }

  rightElements[si].classList.add("flip"); // Apply flip to the current book
  zIndexes[bookIndex]++;
  rightElements[si].style.zIndex = zIndexes[bookIndex]; // Update z-index for stacking
  currentIndexes[bookIndex] = si; // Update current index for this book container
}

// Turn left function (for each book container)
function turnLeft(bookIndex) {
  var rightElements = containers[bookIndex].getElementsByClassName("right");
  var si = currentIndexes[bookIndex];

  if (si < rightElements.length) {
    si++;
  } else {
    si = 1;

    for (var i = rightElements.length - 1; i > 0; i--) {
      rightElements[i].classList.add("flip"); // Flip all books
      rightElements[i].style.zIndex = rightElements.length + 1 - i; // Update z-index
    }
  }

  rightElements[si - 1].className = "right"; // Remove flip from current book
  setTimeout(function () {
    rightElements[si - 1].style.zIndex = "auto"; // Reset z-index
  }, 350);
  currentIndexes[bookIndex] = si - 1; // Update current index
}
