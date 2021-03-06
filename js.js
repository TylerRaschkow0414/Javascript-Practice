var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var multiples = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500];

var snakeLength = 25;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var foods = {
	x: Math.floor(Math.random() * multiples[0]) *25,
	y: Math.floor(Math.random() * multiples[0]) *25,
	width: 25,
	height: 25
};

var snake = {
	x: 25,
	y: 25,
	width: 25,
	height: 25
};

function drawRect() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.rect(snake.x, snake.y, snake.width, snake.height)
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.closePath();
}

function controls() {
	if(rightPressed) {
		snake.x += 25;
	}else if(leftPressed) {
		snake.x -= 25;
	}else if(upPressed) {
		snake.y -= 25;
	}else if(downPressed) {
		snake.y += 25;
	}
}

function collision() {
	if(snake.x >= canvas.width) {
		snake.x = canvas.width - canvas.width;
	}else if(snake.x < canvas.width - canvas.width) {
		snake.x = canvas.width;
	}else if(snake.y >= canvas.height) {
		snake.y = canvas.height - canvas.height;
	}else if(snake.y < canvas.height - canvas.height) {
		snake.y = canvas.height;
	}
}

document.addEventListener("keydown", keyDownHandler, false);
//document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
		leftPressed = false;
		upPressed =  false;
		downPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
		rightPressed = false;
		upPressed = false;
		downPressed = false;
    }
	if(e.keyCode == 38) {
        upPressed = true;
		leftPressed = false;
		rightPressed = false;
		downPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
		rightPressed = false;
		leftPressed = false;
		upPressed = false;
    }
}

/*
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
	if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}
*/

function food() {
	ctx.beginPath();
	ctx.rect(foods.x, foods.y, foods.width, foods.height);
	ctx.fillStyle = "#8B0000";
	ctx.fill();
	eatFood();
	ctx.closePath();
}

function eatFood() {
	if(snake.x == foods.x && snake.y == foods.y) {
		foods.x = Math.floor(Math.random() * multiples[0]) *25;
		foods.y = Math.floor(Math.random() * multiples[0]) *25;
		snake.width += 25;
	}
}

function start() {
	drawRect();
	controls();
	collision();
	food();
}
//up pressed make length -height value

setInterval(start, 100);