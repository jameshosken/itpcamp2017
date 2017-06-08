var drawingObj = function(sketch){

  console.log("Sketch started!")

  sketch.setup = function(){

    var cnv = sketch.createCanvas(window.innerWidth, window.innerHeight);

  }

  sketch.draw = function(){
      sketch.stroke(0,0,255);
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
  }

}
