var hr, mn, sc
var scAngle, hrAngle, mnAngle

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
}

function draw() {
  background(255,255,255);  
  push();
  rotate(scAngle);
  stroke(222, 195, 195);
  strokeWeight(5);
  line(0, 0, 100, 0);
  translate(200, 400);
  pop();

  push();
  rotate(mnAngle);
  stroke(231, 211, 211);
  strokeWeight(7);
  line(0, 0, 100, 0);
  translate(200, 400);
  pop();

  push();
  rotate(hrAngle);
  stroke(240, 228, 228);
  strokeWeight(9);
  line(0, 0, 100, 0);
  translate(200, 400);
  pop();
}