// This is a game of tic tac toe

// Game board

let gameboard = [['', '' ,''],
                    ['','',''],
                    ['', '', '']
]

const player_moves = function (player) {
    const one = () => gameboard[0][0] = player;
    const two = () => gameboard[0][1] = player;
    const three = () => gameboard[0][2] = player;
    const four = () => gameboard[1][0] = player;
    const five = () => gameboard[1][1] = player;
    const six = () => gameboard[1][2] = player;
    const seven = () => gameboard[2][0] = player;
    const eight = () => gameboard[2][1] = player;
    const nine = () => gameboard[2][2] = player;
    return {one, two, three, four, five, six, seven, eight, nine}
};

const person = (function () {
    const playerOne = "x";
    const playerTwo = "o";
    return {playerOne, playerTwo}
})();

// player_moves(person.playerOne).one();

// All winning combinations
const winningCombinations = [
    [[0, 0], [0, 1], [0, 2]], // first row
    [[1, 0], [1, 1], [1, 2]], // second row
    [[2, 0], [2, 1], [2, 2]], // third row
    [[0, 0], [1, 0], [2, 0]], // first column
    [[0, 1], [1, 1], [2, 1]], // second column
    [[0, 2], [1, 2], [2, 2]], // third column
    [[0, 0], [1, 1], [2, 2]], // main diagonal
    [[0, 2], [1, 1], [2, 0]]  // secondary diagonal
];

function checkWin(player) {
    for (let combination of winningCombinations) {
        if (combination.every(([row, col]) => gameboard[row][col] === player)) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return gameboard.every(row => row.every(cell => cell !== ''));
}

function checkEndGame(player) {
    if (checkWin(player)) {
        alert(`${player} wins!`);
        gameboard = [['', '' ,''], ['','',''], ['', '', '']];
        squares.forEach(square => square.textContent = '');
    } else if (checkDraw()) {
        alert('It\'s a draw!');
        gameboard = [['', '' ,''], ['','',''], ['', '', '']];
        squares.forEach(square => square.textContent = '');
    }
}

// player_moves(person.playerOne).one();
// player_moves(person.playerTwo).two();
// player_moves(person.playerOne).four();
// player_moves(person.playerTwo).five();
// player_moves(person.playerOne).nine();
// player_moves(person.playerTwo).seven();
// player_moves(person.playerOne).eight();
// player_moves(person.playerTwo).six();
// player_moves(person.playerOne).three();
// checkEndGame(person.playerOne);
// console.log(gameboard);

let squares = document.querySelectorAll('.square');
let currentPlayer = person.playerOne;
let moves = 0;

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (square.textContent === '') {
            if (moves % 2 === 0) {
                currentPlayer = person.playerOne;
                square.textContent = currentPlayer;
                player_moves(currentPlayer)[Object.keys(player_moves(currentPlayer))[index]]();
            } else {
                currentPlayer = person.playerTwo;
                square.textContent = currentPlayer;
                player_moves(currentPlayer)[Object.keys(player_moves(currentPlayer))[index]]();
            }
            moves++;
            checkEndGame(currentPlayer);
        }
    });
});