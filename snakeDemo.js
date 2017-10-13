// snakeDemo.js
window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;
var mover;
var snake;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = 900;
  canvas.height = 600;
  canvas.style.backgroundColor = 'black';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  mover = new Mover(ctx);
  snake = new Snake(ctx);
  animate(); // Call to your animate function
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  mover.update();
  snake.update(mover.loc);
  mover.draw();
  snake.draw();
  }
