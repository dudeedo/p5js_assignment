function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 235, 245);
  
  // 1. 마우스 위치에 따른 눈동자 목표 위치 계산
  let pupX1 = 250 + (mouseX - 250) * 0.05;
  let pupY1 = 175 + (mouseY - 175) * 0.05;
  let pupX2 = 350 + (mouseX - 350) * 0.05;
  let pupY2 = 175 + (mouseY - 175) * 0.05;

  // 눈동자가 눈 흰자 밖으로 나가지 않게 조건문으로 제한
  if (pupX1 < 240) pupX1 = 240; 
  if (pupX1 > 260) pupX1 = 260;
  if (pupY1 < 170) pupY1 = 170; 
  if (pupY1 > 180) pupY1 = 180;
  if (pupX2 < 340) pupX2 = 340; 
  if (pupX2 > 360) pupX2 = 360;
  if (pupY2 < 170) pupY2 = 170; 
  if (pupY2 > 180) pupY2 = 180;

  // 2. 마우스 클릭 시 몸통 떨림 효과 (random 활용)
  let bodyMoveY = 0;
  if (mouseIsPressed) {
    bodyMoveY = random(-3, 3);
  }

  // 파란 셔츠랑 카라
  noStroke(); fill(60, 100, 200); 
  ellipse(300, 480 + bodyMoveY, 400, 400); 
  fill(255); 
  triangle(300, 320 + bodyMoveY, 260, 280 + bodyMoveY, 220, 340 + bodyMoveY); 
  triangle(300, 320 + bodyMoveY, 340, 280 + bodyMoveY, 380, 340 + bodyMoveY); 
  fill(60, 100, 200); rect(295, 320 + bodyMoveY, 10, 100); 

  // 귀
  fill(255, 218, 185); noStroke();
  ellipse(205, 190, 35, 55); 
  ellipse(395, 190, 35, 55);

  // 얼굴형
  fill(255, 218, 185);
  beginShape();
  curveVertex(230, 110); curveVertex(300, 80); curveVertex(370, 110);
  curveVertex(390, 190); curveVertex(360, 270); curveVertex(300, 310);
  curveVertex(240, 270); curveVertex(210, 190); curveVertex(230, 110);
  curveVertex(300, 80); curveVertex(370, 110);
  endShape(CLOSE);

  // 까만 머리카락
  fill(20);
  beginShape(); // 왼쪽 머리
  vertex(350, 150); bezierVertex(320, 40, 260, 80, 265, 110);
  vertex(255, 140); vertex(245, 120); vertex(235, 150); vertex(225, 130); vertex(215, 160); 
  bezierVertex(210, 130, 205, 90, 220, 50); bezierVertex(235, 0, 300, -10, 350, 80);
  endShape(CLOSE);
  
  beginShape(); // 오른쪽 머리
  vertex(250, 80); bezierVertex(280, 40, 360, 80, 335, 110);
  vertex(345, 140); vertex(355, 120); vertex(365, 150); vertex(375, 130); vertex(385, 160); 
  bezierVertex(390, 130, 395, 90, 380, 50); bezierVertex(365, 0, 300, -10, 250, 80);
  endShape(CLOSE);

  // 3. 눈썹
  let browShake = random(-1, 1);
  noFill(); stroke(50); strokeWeight(5);
  arc(250, 145 + browShake, 50, 15, PI, 0); 
  arc(350, 145 + browShake, 50, 15, PI, 0);

  // 눈 (흰자)
  fill(255); stroke(100); strokeWeight(2);
  ellipse(250, 175, 45, 25); ellipse(350, 175, 45, 25); 

  // 눈동자 (검은자)
  fill(30); noStroke();
  ellipse(pupX1, pupY1, 16, 16);
  ellipse(pupX2, pupY2, 16, 16);

  // 코
  noFill(); stroke(220, 150, 130); strokeWeight(3);
  line(300, 165, 292, 215); line(292, 215, 315, 230);

  // 4. 입술 및 홍조 (수정된 부분: 7시 방향의 더 긴 혓바닥)
  if (keyIsPressed) {
    // 홍조
    fill(255, 100, 100, 120); noStroke();
    ellipse(235, 220, 45, 25); 
    ellipse(365, 220, 45, 25); 
    
    // 기존 웃는 입
    // fill(240, 140, 130); noStroke();
    // arc(300, 260, 50, 30, 0, PI); 
    
    // 내민 혓바닥 (더 길게, 7시 방향으로)
    push(); // 현재 상태 저장
    
    // 입 중심 (300, 260)에서 약간 왼쪽 아래로 이동하여 피벗 포인트 설정
    translate(300 , 260 ); 
    
    // p5.js 좌표계에서 아래쪽은 90도, 왼쪽은 180도이므로 
    // 7시 방향은 약 120도 비스듬히 왼쪽 아래를 향하게 회전
    rotate(radians(60)); 
    
    // 혓바닥 크기 설정 (너비 26, 길이는 36에서 100으로 훨씬 길게)
    let tongueWidth = 26;
    let tongueHeight = 100;

    fill(255, 105, 115); noStroke();
    // (0, 0)에서 시작하는 하향 아크를 그려 혓바닥 표현
    arc(0, 0, tongueWidth, tongueHeight, 0, PI); 
    
    // 혓바닥 가운데 선 (길어진 혓바닥에 맞춰 길이 및 위치 조정)
    stroke(200, 80, 80); strokeWeight(2); 
    line(0, 5, 0, 40); 
    
    pop(); // 이전 상태로 복구
  } else {
    // 평소에는 웃는 입
    fill(240, 140, 130); noStroke();
    arc(300, 260, 50, 30, 0, PI);
  }

  // 네모 안경
  stroke(40); strokeWeight(3); noFill(); rectMode(CENTER);
  rect(250, 175, 54, 40, 4); rect(350, 175, 54, 40, 4); 
  line(277, 175, 323, 175); 
  line(223, 170, 195, 175); line(377, 170, 405, 175); 
  rectMode(CORNER); 
  
  

}
