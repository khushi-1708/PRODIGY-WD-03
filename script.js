let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;

  if (checkWin()) {
    statusDisplay.innerText = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (board.every(cell => cell !== "")) {
    statusDisplay.innerText = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWin() {
  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusDisplay.innerText = `Player X's Turn`;
  Array.from(document.getElementsByClassName("cell")).forEach(cell => {
    cell.innerText = "";
  });
}
