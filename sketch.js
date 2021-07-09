let ele;
function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}
let i =0;
function draw() {
i++;
let seconds = second();
let minutes = minute();
let hours = hour();

  // The same as doing: background(220); or --> background(220,220,220);
  background(84, 11, 14);
  noFill();
  strokeWeight(2);
  
  translate(width / 2, height / 2);
  rotate(-90);
  
  
  stroke(0, 0, i);
  let secArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc);
  
  push();
  rotate(secArc);
  line(0, 0, 150, 0);
  pop();
  strokeWeight(4);
  stroke(0, 0, i);
  let minArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minArc);
  
  push();
  rotate(minArc);
  line(0, 0, 125, 0);
  pop();
  strokeWeight(6);
  stroke(0, 0, i);
  let hArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hArc);
  
  push();
  rotate(hArc);
  line(0, 0, 100, 0);
  pop();
  if(i == 255){
    i=0;
  }
  push();
  rotate(90);
  strokeWeight(1);
  textSize(25)
  text("12", -15, -160)
  text("3", 160, 0)
  text("6", -15, 175)
  text("9", -175, 0)
  text("1", 80, -140)
  text("2", 140, -80)
  text("7", -95, 155)
  text("8", -155, 95)
  text("4", 140, 80)
  text("5", 80, 150)
  text("10", -155, -95)
  text("11", -95, -150)
  pop();
  push();
  rotate(90);
  strokeWeight(1);
  textSize(25)
  text("𝓻𝓪𝓶𝓲", -30, -30)
  pop();
}
