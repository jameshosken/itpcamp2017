var bounceBallSketch = function(sketch){

  //Use alerts for basic debugging
  alert("Sketch started!")

  //"pseudo global" variables (only available within this sketch)
  var ballPos;
  var ballVel;
  var ballAcc;

  sketch.setup = function(){
    /*
    Since we don't have a console to use, I wrap my setup/draw code in a try/catch
    handler so that I can 'alert' any errors to my phone screen.
    It's fine for basic sketches, but perhaps not super robust.
    */

    try{
      //See, we're using those globals from before!
      var cnv = sketch.createCanvas(physicalScreenWidth, physicalScreenHeight);

      ballPos = sketch.createVector(window.screen.width/2, window.screen.height/2);
      ballVel = sketch.createVector(0,0);
      ballAcc = sketch.createVector(0,0);

    }
    catch(e){
      alert(e);
    }
  }

  sketch.draw = function(){
    try{
      sketch.background(255,10);
      sketch.moveBall();
      sketch.checkBounds();
      sketch.drawBall();

      sketch.getAccelerationData();

    }
    catch(e){
      alert(e);
    }
  }

  sketch.checkBounds = function(){
    var hit = false;
    if(ballPos.x > physicalScreenWidth){
      ballPos.x = physicalScreenWidth;
      ballVel.x *= -0.9;
      hit = true;
    }
    if(ballPos.y > physicalScreenHeight){
      ballPos.y = physicalScreenHeight;
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
      alert("Accelerometer Error")
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
