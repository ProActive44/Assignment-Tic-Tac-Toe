// Iteration 1 : Initalize a wining board and players

// let board = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

let winningBoard = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Iteration 2 : check for wining or draw (functions)

function isWin() {
  for (let pattern of winningBoard) {
    let a = pattern[0];
    let b = pattern[1];
    let c = pattern[2];

    if (
      gameBoard[a] && // check if gameBoard[a] is exist
      gameBoard[a] === gameBoard[b] && // check if gameBoard[a] , gameBoard[b] and gameBoard[c] are equal
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }
  return false;
}

function isDraw() {
  return !gameBoard.includes(""); // returns true or false based on gameBoard have any empty element ("")
}

// Iteration 3 : handle the box click

let boxes = document.querySelectorAll(".box");
let resultBox = document.getElementById("result");
let message = document.getElementById("message");

boxes.forEach(function (box, idx) {
  box.addEventListener("click", function () {
    handleClick(idx);
  });
});

function handleClick(idx) {
  if (gameBoard[idx] === "") {
    boxes[idx].innerHTML = currPlayer;
    gameBoard[idx] = currPlayer;

    let winner = isWin();
    let draw = isDraw();

    if (winner) {
      resultBox.style.visibility = "visible";
      message.innerText = "Winner is " + currPlayer + "!!";
    } else if (draw) {
      resultBox.style.visibility = "visible";
      message.innerText = "It's a Draw";
    } else {
      // if (currPlayer === "X") {
      //   currPlayer = "O";
      // } else {
      //   currPlayer = "X";
      // }
      currPlayer = currPlayer === "X" ? "O" : "X"; // Alternative for commented out if else condition above
    }
  }
}

// Iteration 4 : Reset the game

let button = document.getElementById("button");
button.onclick = resetGame;

function resetGame() {
  //   resultBox.style.visibility = "hidden";
  //   currPlayer = "X";
  //   gameBoard = ["", "", "", "", "", "", "", "", ""];
  //   boxes.forEach(function (box) {
  //     box.innerHTML = "";
  //   });
  history.go(0);         
}
