function setup() {
  
createCanvas(720, 720);
background('#660022');
angleMode (DEGREES);
  textSize(10);
  
}

function draw() {
  


 
//HEAD
    
  //Arc for Top of head
  noStroke();
  fill(mouseY,mouseX,0);
   arc(354, mouseY, 255, 344, 180, mouseX);
   
  // Arc for Bottom of Head
    fill(mouseX,0,mouseY);
  arc(354, 314, mouseX, 400, 0, 180);
  
//EYES

   //Left eyebrow
   fill('#f9468b');
   arc(300, 270, 50, mouseY, 180, 0);
   
   //Left top of eye
   stroke(1);
   fill('#c10884');
   arc(300, mouseX, 40, 30, 180, 0);
   
   //Left bottom of eye
   stroke(1);
   fill('#c10884');
   arc(300, 295, 40, 13, 0, 180);
   
   //left iris
   stroke(1);
   fill('blue');
   ellipse(301, mouseY, 30, 20);
   
   //left pupil
   stroke(1);
   fill('black');
   ellipse(mouseX, 292, 15, 15);
   
   //left shine
   stroke(1);
   fill('white');
   ellipse(299, 292, 5, 5);

   //right eyebrow
   noStroke();
   fill('#f9468b');
   arc(400, 270, 50, 30, 180, 0);
   
   //right top of eye
   stroke(1);
   fill('#c10884');
   arc(400, 290, 40, 30, 180, 0);
   
   //right bottom of eye
   stroke(1);
   fill('#c10884');
   arc(400, 295, mouseX, 13, 0, 180);
   
   //right iris
   stroke(1);
   fill(mouseY,mouseY,mouseY);
   ellipse(400, mouseY, 30, 20);
   
   //right pupil
   stroke(1);
   fill('black');
   ellipse(400, 292, 15, 15);
   
   //right sparkle
   stroke(1);
   fill('white');
   ellipse(397, 292, 5, 5);


//MOUTH

//Wrinkles
  stroke(1);
  noFill();
  arc(315, 400, 40, 87, 90, 270);
  
    stroke(1);
  noFill();
  arc(409, 400, 40, 87, 270, 90);
  
  stroke(1);
 fill(mouseY,mouseX,mouseY);
  arc(360, 419, 100, 60, 0, mouseX);
  
    stroke(1);
 fill('#f91582');
  arc(335, 419, mouseY, 30, 180, 0);
  
  stroke(1);
 fill('#f91582');
  arc(385, 419, 50, 30, mouseX, 0);
  
    stroke(1);
 fill(mouseX,mouseY,mouseX);
  arc(360, 424, 80, mouseY, 0, 180);
  


//NOSE
  stroke(1);
  noFill();
  arc(355, 370, 47, 20, 0, 180);
  
  stroke(1);
  noFill();
  arc(326, 374, 20, 20, 0, 225);
  
  stroke(1);
  noFill();
  arc(390, 358, 20, 20, 315, 135);
  
   stroke(1);
  noFill();
  arc(mouseY, 341, 20, 10, 180, 0);
  
  stroke(1);
  noFill();
  line(365, mouseX, 380, 341);
  

//HAIR
   //left hair
  stroke(1);
  fill(0,mouseY,mouseX);
  beginShape();
  vertex(388, 51);
  vertex(236, 89);
  vertex(158, mouseY);
  vertex(49, 535);
  vertex(235, 667);
  vertex(319, 550);
  vertex(mouseX, 341);
  vertex(250, 213);
  vertex(373, 143);
  vertex(388, 51);
  endShape(CLOSE);

 //right hair
  stroke(1);
  fill('#9700b7');
  beginShape();
  vertex(388, 51);
  vertex(373, 143);
  vertex(480, 282);
  vertex(437, 470);
  vertex(526, 607);
  vertex(mouseX, 578);
  vertex(589, 313);
  vertex(482, 142);
  vertex(388, mouseY);
  endShape(CLOSE);



  fill(mouseY,mouseX,0);
    let blockHeight = 214;
  // draw one block function
  function drawBlock(offsetY) {
    text('0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0', 0, 36 + offsetY);
    text('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80', 0, 50 + offsetY);
    text('1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1', 0, 66 + offsetY);
    text('2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2', 0, 82 + offsetY);
    text('3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3', 0, 98 + offsetY);
    text('4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4', 0, 114 + offsetY);
    text('5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5', 0, 130 + offsetY);
    text('6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6', 0, 146 + offsetY);
    text('7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7', 0, 162 + offsetY);
    text('8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8', 0, 178 + offsetY);
    text('9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9', 0, 194 + offsetY);
    text('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80', 0, 210 + offsetY);
  }

  // now draw 5 stacked copies
  for (let i = 0; i < 5; i++) {
    drawBlock(i * blockHeight);
  }


}
