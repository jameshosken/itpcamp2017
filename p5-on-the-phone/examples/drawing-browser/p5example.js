

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);

	stroke(255,0,0);
	strokeWeight(5);
}

function draw(){

	line(mouseX, mouseY, pmouseX, pmouseY);

}