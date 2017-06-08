var ballLoc;
var ballVel;
var ballAcc;


var setup = function(){

  var cnv = createCanvas(windowWidth, windowHeight);

  ballLoc = createVector(windowWidth/2, windowHeight/2);

  ballVel = createVector(0,0);

  ballAcc = createVector(0,0);

  noStroke();

}


var draw = function(){
  
  background(255);
  moveBall();
  drawBall();

}


var moveBall = function(){

  seekMouse();
  ballVel.add(ballAcc);    
  ballVel.limit(10);          //What's the Max speed the ball can acheive?
  ballLoc.add(ballVel);

}

var seekMouse = function(){
  //Reset Acceleration each frame
  ballAcc.mult(0);

  //Find the vector that points towards the mouse from the ball
  var vect2mouse = createVector(mouseX-ballLoc.x, mouseY-ballLoc.y );
  //Normalising leaves us with a vector of magnitude 1, which allows us to choose our acceleration force.
  vect2mouse.normalize();
  //Set the new ballAcc vector. We could use a multiplier here to change the intensity of acceleration.
  ballAcc = vect2mouse;
}

var drawBall = function(){
  fill(255,0,0);
  ellipse(ballLoc.x, ballLoc.y, 10,10);
}
