let blockSize = 25;
let rows = 20;
let columns = 20;
let boardColor = "black"
let snakeColor = "lime";
let foodColor = "red";
let board;
let context;
let snakeX = 5 * blockSize;
let snakeY = 5 * blockSize;


let foodPosition = {
    x : 10*blockSize,
    y: 10*blockSize
}

window.onload =  function (){
    board = document.getElementById("gameboard");
    context = board.getContext("2d");
    board.width = blockSize*rows;
    board.height = blockSize*columns;

    update();
}


function update (){
    context.fillStyle = boardColor;
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = snakeColor;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)

    context.fillStyle = foodColor;
    placeFood();
    context.fillRect(foodPosition.x, foodPosition.y, blockSize, blockSize);
}

function placeFood (){
    foodPosition.x = Math.floor(Math.random() * columns) * blockSize;
    foodPosition.y = Math.floor(Math.random() * rows) * blockSize;
    
}