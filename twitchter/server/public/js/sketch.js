/**
 * @Author: James Hosken
 * @Date:   2017-06-21
 * @Email:  james.hosken@nyu.edu
 * @Filename: sketch.js
 * @Last modified by:   James Hosken
 * @Last modified time: 2017-06-21
 */



var socket = io();

socket.on("message", function(msg){
  console.log(msg);
})

var pos;
var vel;

var brush;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  brush = new Brush();
}

function draw(){
  brush.render();
}

function Brush(){
  this.x = window.innerWidth/2;
  this.y = window.innerHeight/2;

  this.colour = color("red");

  this.move = function(dir){
    if(dir == "up"){
      this.y -= 5;
    }
    if(dir == "down"){
      this.y += 5;
    }
    if(dir == "left"){
      this.x -= 5;
    }
    if(dir == "right"){
      this.x += 5;
    }
    this.checkBounds();
  }

  this.checkBounds = function(){
    if(this.x < 0){
      this.x = width;
    }
    if(this.x > width){
      this.x = 0;
    }

    if(this.y < 0){
      this.y = height;
    }
    if(this.y > height){
      this.y = 0;
    }
  }

  this.reColour = function(col){
    this.colour = col;
  }

  this.render = function(){
    fill(this.colour);
    noStroke()
    ellipse(this.x, this.y, 10,10,);
  }
}

socket.on("up", function(data){
  brush.move(("up"))
})
socket.on("down", function(data){
  brush.move("down")
})
socket.on("left", function(data){
  brush.move("left")
})
socket.on("right", function(data){
  brush.move("right")
})

socket.on("red", function(data){
  brush.reColour(color(255,0,0,100))
})
socket.on("green", function(data){
  brush.reColour(color(0,255,0,100))
})
socket.on("blue", function(data){
  brush.reColour(color(0,0,255,100))
})
