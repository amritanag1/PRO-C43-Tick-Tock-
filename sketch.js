

function setup() {
  createCanvas(500,500);

   //scAngle = map(sc, 0, 60, 0, 360);
   angleMode(DEGREES);
}

function draw() {
  background("black");
  
  translate(250,250);   
  rotate(-90);
  
  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(8);
  stroke(120,255,255);
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke(199,142,255);
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(255,137,61);
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke(120,255,255);
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke(199,142,255);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke(255,137,61);
  line(0,0,50,0);
  pop();
  
  //stroke("Black");
  //point (0,0);
  drawSprites();
}