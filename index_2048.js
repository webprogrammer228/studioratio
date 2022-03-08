const cells = document.querySelectorAll(".cell");
let width = 5;

let scoreDisplay = document.getElementById("score01");
let score = 0;

function newRandomCell() {
  const randomChance = Math.floor(Math.random() * 100);
  const chance = randomChance > 90 ? 4 : 2;
  return chance;
}

function createStartCells() {
  let firstCell = Math.floor(Math.random() * cells.length);
  let secondCell = Math.floor(Math.random() * cells.length);

  if (firstCell === secondCell) {
    secondCell = Math.floor(Math.random() * cells.length);
  }

  if (cells[firstCell].innerHTML == "" || cells[secondCell]) {
    cells[firstCell].innerHTML = newRandomCell();
    cells[secondCell].innerHTML = newRandomCell();
  } else {
    createStartCells();
  }
}

function generateNewCell() {
  let newCell = Math.floor(Math.random() * cells.length);
  if (cells[newCell].innerHTML === "") {
    cells[newCell].innerHTML = newRandomCell();
    checkForGameOver();
  } else {
    generateNewCell();
  }
}

function coloredCell() {
  cells.forEach((element) => {
    if (element.innerHTML !== "") {
      if (element.innerHTML === "2") {
        element.classList = "cell n2";
      } else if (element.innerHTML === "4") {
        element.classList = "cell n4";
      } else if (element.innerHTML === "8") {
        element.classList = "cell n8";
      } else if (element.innerHTML === "16") {
        element.classList = "cell n16";
      } else if (element.innerHTML === "32") {
        element.classList = "cell n32";
      } else if (element.innerHTML === "64") {
        element.classList = "cell n64";
      } else if (element.innerHTML === "128") {
        element.classList = "cell n128";
      } else if (element.innerHTML === "256") {
        element.classList = "cell n256";
      } else if (element.innerHTML === "512") {
        element.classList = "cell n512";
      } else if (element.innerHTML === "1024") {
        element.classList = "cell n1024";
      } else if (element.innerHTML === "2048") {
        element.classList = "cell n2048";
      } else if (element.innerHTML === "4096") {
        element.classList = "cell n4096";
      } else if (element.innerHTML === "8192") {
        element.classList = "cell n8192";
      }
    } else {
      element.className = "cell";
    }
  });
}

window.onload = function () {
  createStartCells();
  coloredCell();
};

function moveRight() {
  for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
      let totalOne = cells[i].innerHTML;
      let totalTwo = cells[i + 1].innerHTML;
      let totalThree = cells[i + 2].innerHTML;
      let totalFour = cells[i + 3].innerHTML;
      let totalFive = cells[i + 4].innerHTML;
      let row = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
        parseInt(totalFive),
      ];

      let filteredRow = row.filter((num) => num);
      let missing = 5 - filteredRow.length;
      let empties = Array(missing).fill("");

      const newMas = empties.concat(filteredRow);

      cells[i].innerHTML = newMas[0];
      cells[i + 1].innerHTML = newMas[1];
      cells[i + 2].innerHTML = newMas[2];
      cells[i + 3].innerHTML = newMas[3];
      cells[i + 4].innerHTML = newMas[4];
    }
  }
}

function moveLeft() {
  for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
      let totalOne = cells[i].innerHTML;
      let totalTwo = cells[i + 1].innerHTML;
      let totalThree = cells[i + 2].innerHTML;
      let totalFour = cells[i + 3].innerHTML;
      let totalFive = cells[i + 4].innerHTML;
      let row = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
        parseInt(totalFive),
      ];

      let filteredRow = row.filter((num) => num);
      let missing = 5 - filteredRow.length;
      let empties = Array(missing).fill("");

      const newRow = filteredRow.concat(empties);

      cells[i].innerHTML = newRow[0];
      cells[i + 1].innerHTML = newRow[1];
      cells[i + 2].innerHTML = newRow[2];
      cells[i + 3].innerHTML = newRow[3];
      cells[i + 4].innerHTML = newRow[4];
    }
  }
}

function combineRow() {
  for (let i = 0; i < 24; i++) {
    if (
      cells[i].innerHTML === cells[i + 1].innerHTML &&
      cells[i].innerHTML !== "" &&
      cells[i + 1].innerHTML !== ""
    ) {
      let combineCell =
        parseInt(cells[i].innerHTML) + parseInt(cells[i + 1].innerHTML);
      if (cells[i].innerHTML !== "") {
        cells[i].innerHTML = "";
      }
      cells[i + 1].innerHTML = combineCell;
      score += combineCell;
      scoreDisplay.innerHTML = score;
    }
  }
  checkForWin();
}

function moveDown() {
  for (let i = 0; i < 5; i++) {
    let totalOne = cells[i].innerHTML;
    let totalTwo = cells[i + width].innerHTML;
    let totalThree = cells[i + width * 2].innerHTML;
    let totalFour = cells[i + width * 3].innerHTML;
    let totalFive = cells[i + width * 4].innerHTML;
    let column = [
      parseInt(totalOne),
      parseInt(totalTwo),
      parseInt(totalThree),
      parseInt(totalFour),
      parseInt(totalFive),
    ];

    let filteredColumn = column.filter((num) => num);
    let missing = 5 - filteredColumn.length;
    let empties = Array(missing).fill("");
    let newColumn = empties.concat(filteredColumn);

    cells[i].innerHTML = newColumn[0];
    cells[i + width].innerHTML = newColumn[1];
    cells[i + width * 2].innerHTML = newColumn[2];
    cells[i + width * 3].innerHTML = newColumn[3];
    cells[i + width * 4].innerHTML = newColumn[4];
  }
}

function moveUp() {
  for (let i = 0; i < 5; i++) {
    let totalOne = cells[i].innerHTML;
    let totalTwo = cells[i + width].innerHTML;
    let totalThree = cells[i + width * 2].innerHTML;
    let totalFour = cells[i + width * 3].innerHTML;
    let totalFive = cells[i + width * 4].innerHTML;

    let column = [
      parseInt(totalOne),
      parseInt(totalTwo),
      parseInt(totalThree),
      parseInt(totalFour),
      parseInt(totalFive),
    ];

    let filteredColumn = column.filter((num) => num);
    let missing = 5 - filteredColumn.length;
    let empties = Array(missing).fill("");
    let newColumn = filteredColumn.concat(empties);

    console.log(newColumn);

    cells[i].innerHTML = newColumn[0];
    cells[i + width].innerHTML = newColumn[1];
    cells[i + width * 2].innerHTML = newColumn[2];
    cells[i + width * 3].innerHTML = newColumn[3];
    cells[i + width * 4].innerHTML = newColumn[4];
  }
}

function combineColumns() {
  for (let i = 0; i < 20; i++) {
    if (
      cells[i].innerHTML === cells[i + width].innerHTML &&
      cells[i].innerHTML !== "" &&
      cells[i + width].innerHTML !== ""
    ) {
      let combineCell =
        parseInt(cells[i].innerHTML) + parseInt(cells[i + width].innerHTML);
      if (cells[i].innerHTML !== "") {
        cells[i].innerHTML = "";
      }
      cells[i + width].innerHTML = combineCell;
      score += combineCell;
      scoreDisplay.innerHTML = score;
    }
  }
  checkForWin();
}

function checkForWin() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "2048") {
      alert("YOU WIN!");
      document.removeEventListener("keyup", control);
      document.removeEventListener("touchstart");
      document.removeEventListener("touchend");
    }
  }
}

function checkForGameOver() {
  let empties = 0;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      empties++;
    }
  }
  if (empties === 0) {
    alert("YOU LOSE!");
    document.removeEventListener("keyup", control);
    document.removeEventListener("touchstart");
    document.removeEventListener("touchend");
  }
}

function keyRight() {
  moveRight();
  combineRow();
  moveRight();
  generateNewCell();
  coloredCell();
}

function keyLeft() {
  moveLeft();
  combineRow();
  moveLeft();
  generateNewCell();
  coloredCell();
}

function keyDown() {
  moveDown();
  combineColumns();
  moveDown();
  generateNewCell();
  coloredCell();
}

function keyUp() {
  moveUp();
  combineColumns();
  moveUp();
  generateNewCell();
  coloredCell();
}

function control(e) {
  if (e.keyCode === 39) {
    keyRight();
  } else if (e.keyCode === 37) {
    keyLeft();
  } else if (e.keyCode === 38) {
    keyUp();
  } else if (e.keyCode === 40) {
    keyDown();
  }
}

document.addEventListener("keyup", control);

// события на тач

var startX, startY, endX, endY; // Определение четырех переменных для хранения значений по оси X и оси Y при касании и при выходе из касания
document.addEventListener("touchstart", function (event) {
  // Связывание события слушателя при начале касания пальцем
  var event = event || e || arguments[0];
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
});

document.addEventListener("touchend", function (event) {
  // Привязка события прослушивания, когда палец касается и уходит
  var event = event || e || arguments[0];
  endX = event.changedTouches[0].pageX;
  endY = event.changedTouches[0].pageY;

  var x = endX - startX;
  var y = endY - startY;

  var absX = Math.abs(x) > Math.abs(y);
  var absY = Math.abs(y) > Math.abs(x);
  if (x > 0 && absX) {
    keyRight();
  } else if (x < 0 && absX) {
    keyLeft();
  } else if (y > 0 && absY) {
    keyDown();
  } else if (y < 0 && absY) {
    keyUp();
  }
});
