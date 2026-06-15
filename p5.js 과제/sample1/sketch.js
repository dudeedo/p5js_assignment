function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 우주 배경색 설정
  background(10, 15, 30);

  // 배경의 별들 그리기
  strokeWeight(2); stroke(255); point(50, 50); // 흰색 별
  strokeWeight(3); stroke(255, 200, 200); point(120, 80); // 붉은 별
  strokeWeight(2); stroke(200, 200, 255); point(80, 150); // 푸른 별
  strokeWeight(1); stroke(255); point(200, 30); // 작은 별
  strokeWeight(2); stroke(255, 255, 200); point(300, 70); // 노란 별
  strokeWeight(3); stroke(255); point(550, 50);
  strokeWeight(2); stroke(255, 100, 255); point(580, 120); // 보라 별
  strokeWeight(2); stroke(255); point(400, 350);
  strokeWeight(1); stroke(255); point(100, 380);
  strokeWeight(3); stroke(255, 150, 0); point(250, 320); // 주황 별

  // 우측 하단 가스 행성
  noStroke();
  fill(50, 100, 200, 150);
  arc(600, 400, 400, 400, PI, PI + HALF_PI); // 반투명 푸른색 외부
  fill(100, 200, 255, 100);
  arc(600, 400, 300, 300, PI, PI + HALF_PI); // 더 밝은 푸른색 내부

  // 2개의 유성
  stroke(255, 255, 255, 150); // 흰색 유성
  line(100, 100, 180, 20);
  stroke(255, 200, 100, 100); // 주황색 유성
  line(500, 300, 580, 220);

  // 중앙의 토성
  // 행성 뒤쪽 고리
  noFill();
  strokeWeight(10);
  stroke(255, 150, 50, 180); // 고리
  ellipse(300, 200, 200, 50);

  // 행성 본체
  noStroke();
  fill(200, 100, 50);
  circle(300, 200, 100);

  // 행성 앞쪽 고리
  noFill();
  strokeWeight(10);
  stroke(255, 150, 50, 180);
  arc(300, 200, 200, 50, 0, PI); // 앞쪽 절반만

  // 행성의 위성들
  noStroke();
  fill(150, 150, 150); circle(220, 170, 15); // 회색 위성
  fill(100, 200, 100); circle(380, 230, 10); // 녹색 위성

  // 미지의 큐브 2개
  fill(255, 50, 150, 150); // 반투명 핑크
  square(80, 60, 40);
  fill(255, 100, 200, 100);
  square(90, 70, 40);

  // 로켓
  // 로켓 날개
  fill(200, 50, 50); // 빨간색
  quad(120, 250, 160, 260, 160, 300, 120, 310);

  // 로켓 몸체
  fill(240); // 밝은 회색
  rect(140, 260, 80, 40);

  // 로켓 창문
  fill(50, 50, 100);
  circle(180, 280, 15);

  // 로켓 머리
  fill(200, 50, 50); // 빨간색
  triangle(220, 260, 260, 280, 220, 300);

  // 로켓 엔진 불꽃
  fill(255, 150, 0); // 주황색 불꽃
  triangle(140, 260, 100, 280, 140, 300);
  strokeWeight(3);
  stroke(255, 255, 0); // 노란색 불꽃 선
  line(110, 275, 90, 275);
  line(110, 285, 90, 285);
}