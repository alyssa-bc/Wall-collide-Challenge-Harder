//Boundaries Challenge

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Global Variables
let rectX = 100;
let rectY = 200;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

window.addEventListener("load", draw);

function draw() {
  // LOGIC SECTION
  // Move Rect
  if (rightPressed) {
    rectX += 4;
    if (rectX > 226 && rectX < 274 && rectY > 126 && rectY < 249) {
      rectX = 225;
    }
  } else if (leftPressed) {
    rectX += -4;
    if (rectX > 226 && rectX < 274 && rectY > 126 && rectY < 249) {
      rectX = 275;
    }
  }

  if (downPressed) {
    rectY += 4;
    if (rectX > 226 && rectX < 274 && rectY > 126 && rectY < 249) {
      rectY = 125;
    }
  } else if (upPressed) {
    rectY += -4;
    if (rectX > 226 && rectX < 274 && rectY > 126 && rectY < 249) {
      rectY = 250;
    }
  }

  // DRAW SECTION
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "green";
  ctx.fillRect(rectX, rectY, 25, 25);

  ctx.fillStyle = "grey";
  ctx.fillRect(250, 150, 25, 100);

  requestAnimationFrame(draw);
}

//Square
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    rightPressed = true;
  } else if (event.code == "ArrowLeft") {
    leftPressed = true;
  } else if (event.code == "ArrowDown") {
    downPressed = true;
  } else if (event.code == "ArrowUp") {
    upPressed = true;
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    rightPressed = false;
  } else if (event.code == "ArrowLeft") {
    leftPressed = false;
  } else if (event.code == "ArrowDown") {
    downPressed = false;
  } else if (event.code == "ArrowUp") {
    upPressed = false;
  }
}
