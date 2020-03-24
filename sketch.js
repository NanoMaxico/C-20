
var r = 0;
var g = 50;
var b=255;


function setup(){

  createCanvas(1200,400);

}

function draw(){
  r = map(mouseX,255,1200,0,1200);
  g = map(mouseX,510,1200,0,1200);
  b = map(mouseX,1200,1200,0,1200);
  background(r,g,b);
  fill(255);
  ellipse(mouseX,200,50,50);
}