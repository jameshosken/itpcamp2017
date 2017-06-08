var bounceBallSketch = function(sketch){

  //Use alerts for basic debugging
  console.log("Sketch started!")

  //"pseudo global" variables (only available within this sketch)
  var ballPos;
  var ballVel;
  var ballAcc;

  var capture;

  sketch.setup = function(){

    try{
      var cnv = sketch.createCanvas(window.innerWidth, window.innerHeight);

      ballPos = sketch.createVector(window.innerWidth/2, window.innerHeight/2);
      ballVel = sketch.createVector(0,0);
      ballAcc = sketch.createVector(0,0);

    }
    catch(e){
      alert("Setup error:");
      console.log(e);
    }
  }

  sketch.draw = function(){
    try{
      sketch.background(255,10);
      sketch.moveBall();
      sketch.checkBounds();
      sketch.drawBall();

      sketch.getAccelerationData();

      sketch.stroke(0,0,255);
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);

    }
    catch(e){
      alert(("Draw loop error:"));
      console.log("Draw Error");
      console.log(e)
    }
  }

  sketch.checkBounds = function(){
    var hit = false;
    if(ballPos.x > window.innerWidth){
      ballPos.x = window.innerWidth;
      ballVel.x *= -0.9;
      hit = true;
    }
    if(ballPos.y > window.innerHeight){
      ballPos.y = window.innerHeight;
      ballVel.y *= -0.9;
      hit = true;
    }

    if(ballPos.x < 0){
      ballPos.x = 0;
      ballVel.x *= -0.9;
      hit = true;
    }
    if(ballPos.y < 0){
      ballPos.y = 0;
      ballVel.y *= -0.9;
      hit = true;
    }

    if(hit){
      //console.log("Vibrate!");
      navigator.vibrate(100);
    }
  }

  sketch.moveBall = function(){

    ballVel.add(ballAcc);
    ballVel.limit(20);
    ballPos.add(ballVel);

  }

  sketch.drawBall = function(){
    sketch.noStroke();
    sketch.fill(255,0,0);
    sketch.ellipse(ballPos.x, ballPos.y, 20,20);
  }

  //Acceleration update doesn't sync up well with framerates > 15, so we'll store the last valid point in a global var.
  sketch.getAccelerationData = function(){
    navigator.accelerometer.getCurrentAcceleration(function(acceleration){
      if(acceleration.x != 0){
        //Invert this because reasons
        ballAcc.x = -acceleration.x/10;
      }
      if(acceleration.y != 0){
        ballAcc.y = acceleration.y/10;
      }

    }, function(){
      console.log("Accelerometer Error")

    })
  }

  // function touchMoved() {
  //   stroke(0,0,255);
  //   strokeWeight(3);
  //   line(mouseX, mouseY, pmouseX, pmouseY);
  //   if (value > 255) {
  //     value = 0;
  //   }
  // }
}
