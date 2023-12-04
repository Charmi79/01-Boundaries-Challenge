// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Vairables
let upKey = false;
let downKey = false;
let rightKey = false;
let leftKey = false;
let greenY = 150;
let greenX = 100;
let upArrow = false;
let downArrow = false;
let rightArrow = false;
let leftArrow = false;
let blueY = 150;
let blueX = 400;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variable

  // Animate Green Sqaure
  if (upKey) {
    greenY--;
  } else if (downKey) {
    greenY++;
  } else if (rightKey) {
    greenX++;
  } else if (leftKey) {
    greenX--;
  }

  // Wrap Around Boundries
  if (greenX + 50 > cnv.width) {
    greenX = 0;
  } else if (greenX < 0) {
    greenX = cnv.width - 50;
  } else if (greenY > cnv.height) {
    greenY = 0;
  } else if (greenY < 0) {
    greenY = cnv.height;
  }

  // Animate Blue Square
  if (upArrow) {
    blueY--;
  } else if (downArrow) {
    blueY++;
  } else if (rightArrow) {
    blueX++;
  } else if (leftArrow) {
    blueX--;
  }

  // Stop at edges
  if (blueX < 0) {
    // left side
    blueX = 0;
  } else if (blueX > cnv.width - 50) {
    // right side
    blueX = cnv.width - 50;
  } else if (blueY < 0) {
    // top
    blueY = 0;
  } else if (blueY > cnv.height - 50) {
    // bottom
    blueY = cnv.height - 50;
  }

  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  requestAnimationFrame(loop);

  // Draw Blue Square
  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, blueY, 50, 50);

  // Draw Green Square
  ctx.fillStyle = "green ";
  ctx.fillRect(greenX, greenY, 50, 50);
}

// Document Event Stuff
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  console.log(event.code);
  if (event.code === "KeyW") {
    upKey = true;
  } else if (event.code === "KeyS") {
    downKey = true;
  } else if (event.code === "KeyD") {
    rightKey = true;
  } else if (event.code == "KeyA") {
    leftKey = true;
  } else if (event.code == "ArrowUp") {
    upArrow = true;
  } else if (event.code == "ArrowDown") {
    downArrow = true;
  } else if (event.code === "ArrowRight") {
    rightArrow = true;
  } else if (event.code == "ArrowLeft") {
    leftArrow = true;
  }
}

function keyUpHandler(event) {
  if (event.code == "KeyW") {
    upKey = false;
  } else if (event.code === "KeyS") {
    downKey = false;
  } else if (event.code === "KeyD") {
    rightKey = false;
  } else if (event.code == "KeyA") {
    leftKey = false;
  } else if (event.code == "ArrowUp") {
    upArrow = false;
  } else if (event.code == "ArrowDown") {
    downArrow = false;
  } else if (event.code === "ArrowRight") {
    rightArrow = false;
  } else if (event.code == "ArrowLeft") {
    leftArrow = false;
  }
}
