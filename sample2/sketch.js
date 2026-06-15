function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 235, 245);
// 파란 셔츠랑 카라
  noStroke(); fill(60, 100, 200); 
  ellipse(300, 480, 400, 400); // 몸통
  fill(255); 
  triangle(300, 320, 260, 280, 220, 340); // 왼쪽 카라
  triangle(300, 320, 340, 280, 380, 340); // 오른쪽 카라
  fill(60, 100, 200); rect(295, 320, 10, 100); // 셔츠 앞섶
  // 귀
  fill(255, 218, 185);
  noStroke();
  ellipse(205, 190, 35, 55); 
  ellipse(395, 190, 35, 55);
  // 얼굴형
  fill(255, 218, 185);
  beginShape();
  curveVertex(230, 110);
  curveVertex(300, 80);
  curveVertex(370, 110);
  curveVertex(390, 190);
  curveVertex(360, 270);
  curveVertex(300, 310);
  curveVertex(240, 270);
  curveVertex(210, 190);
  curveVertex(230, 110);
  curveVertex(300, 80);
  curveVertex(370, 110);
  endShape(CLOSE);
  // 까만 머리카락
  fill(20);
  // 왼쪽 머리
  beginShape();
  vertex(350, 150); // 가르마
  // 안쪽 앞머리
  bezierVertex(320, 40, 260, 80, 265, 110);
  // 뾰족뾰족 옆머리
  vertex(255, 140); 
  vertex(245, 120); 
  vertex(235, 150); 
  vertex(225, 130); 
  vertex(215, 160); // 머리끝
  // 윗머리 둥글게 덮는 선
  bezierVertex(210, 130, 205, 90, 220, 50);
  bezierVertex(235, 0, 300, -10, 350, 80);
  endShape(CLOSE);
  // 오른쪽 머리
  beginShape();
  vertex(250, 80); // 가르마
  // 앞머리
  bezierVertex(280, 40, 360, 80, 335, 110);
  // 옆머리
  vertex(345, 140); 
  vertex(355, 120); 
  vertex(365, 150); 
  vertex(375, 130); 
  vertex(385, 160); 
  // 윗머리 선
  bezierVertex(390, 130, 395, 90, 380, 50);
  bezierVertex(365, 0, 300, -10, 250, 80);
  endShape(CLOSE);
  // 눈썹
  noFill();
  stroke(50);
  strokeWeight(5);
  noFill(); stroke(50); strokeWeight(5);
  arc(250, 145, 50, 15, PI, 0); 
  arc(350, 145, 50, 15, PI, 0);
  // 눈 (흰자)
  fill(255);
  stroke(100);
  strokeWeight(2);
  ellipse(250, 175, 45, 25); 
  ellipse(350, 175, 45, 25); 
  // 눈동자 (검은자)
  fill(30);
  noStroke();
  ellipse(250, 175, 16, 16);
  ellipse(350, 175, 16, 16);
// 코
  noFill(); stroke(220, 150, 130); strokeWeight(3);
  line(300, 165, 292, 215); line(292, 215, 315, 230);
// 입술
  fill(240, 140, 130); noStroke();
  arc(300, 260, 50, 30, 0, PI);
// 네모 안경
  stroke(40); strokeWeight(3); noFill(); rectMode(CENTER);
  rect(250, 175, 54, 40, 4); rect(350, 175, 54, 40, 4); // 안경알
  line(277, 175, 323, 175); // 안경 가운데 이어주는 선
  line(223, 170, 195, 175); line(377, 170, 405, 175); // 안경다리
  rectMode(CORNER); // 기준점 원래대로 복구
}