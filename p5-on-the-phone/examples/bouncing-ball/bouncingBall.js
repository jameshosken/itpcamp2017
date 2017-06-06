
var ballLoc;
var ballVel;
var ballAcc;


var setup = function(){
  smooth();
  var cnv = createCanvas(windowWidth, windowHeight);

  ballLoc = createVector(windowWidth/2, windowHeight/2);

  ballVel = createVector(0,0);

  ballAcc = createVector(0,0);

  noStroke();

}


var draw = function(){
  background(255,100);
  moveBall();
  drawBall();

}


var moveBall = function(){

  ballAcc.mult(0);

  //vect = target - location
  var vect2mouse = createVector(mouseX-ballLoc.x, mouseY-ballLoc.y );
  vect2mouse.normalize();

  ballVel.add(vect2mouse);
  ballVel.limit(10);
  ballLoc.add(ballVel);
  console.log(ballLoc);

}

var drawBall = function(){
  fill(255,0,0);
  ellipse(ballLoc.x, ballLoc.y, 10,10);
}
