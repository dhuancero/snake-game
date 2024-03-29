//? HTML Elementos

//
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOverSign = document.getElementById("gameOver");

// Game settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

// Mapeamos direcciones
const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

// Variable del juego

let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

/**
 * Rellena cada cuadrado del tablero
 * @params
 * square: posición del cuadro
 * type: tipo del cuadrado (emptySquare, snakeSquare, foodSquare)
 */
const drawSnake = (square, type) => {
  cosnt[(row, column)] = square.split("");
  boardSquares[row][column] = squareTypes[type];
  const squareElement = document.getElementById(square);
};

const createBoard = () => {
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;

      const squareElement = document.createElement("div");
      console.log(squareElement);
      squareElement.setAttribute("class", "square emptySquare");
      squareElement.setAttribute("id", squareValue);
      board.appendChild(squareElement);
      emptySquares.push(squareValue);
    });
  });
};

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "ArrowRight";
  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );
  console.log(boardSquares);
  board.innerHTML = "";
  emptySquares = [];
  createBoard();
};

const startGame = () => {
  setGame();
  drawSnake();
};

startButton.addEventListener("click", startGame);
