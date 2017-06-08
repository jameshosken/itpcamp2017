var ballPos;
var ballVel;

function setup() {

	var cnv = createCanvas(window.innerWidth, window.innerHeight);

	ballPos = createVector(width/2, height/2)
	ballVel = createVector(5, 5);
}

function draw() {

	moveBall();
	checkEdges();
	displayBall();

}

var moveBall = function(){
	ballPos.add(ballVel);
}

var checkEdges = function(){

	if(ballPos.x < 0 || ballPos.x > width){		//If the ball is off the screen horizontally
		ballVel.x *= -1;							//Then reverse the x direction
	}	

	if(ballPos.y < 0 || ballPos.y > height){		//If the ball is off the screen horizontally
		ballVel.y *= -1;							//Then reverse the x direction
	}			
}

var displayBall = function(){
	fill(255,0,0);
	ellipse(ballPos.x, ballPos.y, 20, 20);
}