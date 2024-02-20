var k =0;

function setup() {
 // put setup code here
 createCanvas(400,400);
 background("DodgerBlue");
}

function draw() {
  // put drawing code here
  line(200,0,200,400);
  fill("pink");
  noStroke();
  ellipse(100,250,100,100);
  ellipse(300,250,100,100);
  
  fill("brown");
  var x = 300+5 *Math.sin(PI/60*k)
  k += 1;
  ellipse(x,270,30,10);
  ellipse(100,270,30,10);
  fill("white");
  ellipse(80,230,15,15);
  ellipse(120,230,15,15);
  ellipse(280,230,15,15);
  ellipse(320,230,15,15);
  fill("black");
  var x = 280+3 *Math.sin(PI/60*k)
  k += 1;
  ellipse(x,230,8,8);
  var x = 320+5 *Math.sin(PI/60*k)
  k += 1;
  ellipse(x,230,8,8);
  ellipse(120,230,8,8);
  ellipse(80,230,8,8);




}
