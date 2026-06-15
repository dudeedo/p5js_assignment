let color1, color2;

function setup() {
  createCanvas(600, 400);
  // 색상 모드를 명시적으로 설정 (기본값인 RGB 사용)
  colorMode(RGB); 
  // lerpColor에 사용할 두 가지 색상 정의
  color1 = color(255, 50, 150, 150);
  color2 = color(50, 150, 255, 150);
  
}

function draw() {
  background(10, 15, 30);

  // 시간에 따른 변화를 주기 위한 변수
  let t = frameCount;
  let m = millis();

  // 1. 배경의 별들 (random과 sin을 이용한 크기/투명도 변화)
  strokeWeight(2 + random(-1, 1)); stroke(255, 255, 255, random(150, 255)); point(50, 50);
  strokeWeight(3 + sin(t * 0.1) * 2); stroke(255, 200, 200); point(120, 80);
  strokeWeight(2); stroke(200, 200, 255); point(80, 150);
  strokeWeight(1 + random(1)); stroke(255); point(200, 30);
  strokeWeight(2 + sin(t * 0.05)); stroke(255, 255, 200); point(300, 70);
  strokeWeight(3); stroke(255); point(550, 50);
  strokeWeight(2); stroke(255, 100, 255); point(580, 120);
  strokeWeight(2 + cos(t * 0.1)); stroke(255); point(400, 350);
  strokeWeight(1); stroke(255); point(100, 380);
  strokeWeight(3 + random(-1.5, 1.5)); stroke(255, 150, 0); point(250, 320);

  // 2. 우측 하단 가스 행성 (sin을 이용한 크기 팽창/수축)
  let planetSize = 400 + sin(t * 0.03) * 10;
  noStroke();
  fill(50, 100, 200, 150);
  arc(600, 400, planetSize, planetSize, PI, PI + HALF_PI); 
  fill(100, 200, 255, 100);
  arc(600, 400, planetSize - 100, planetSize - 100, PI, PI + HALF_PI);

  // 3. 2개의 유성 (frameCount를 이용한 대각선 이동)
  let meteorOffset1 = (t * 5) % 800; // 화면을 벗어나면 다시 돌아오도록 % 연산자 사용
  stroke(255, 255, 255, 150);
  line(100 + meteorOffset1, 100 - meteorOffset1, 180 + meteorOffset1, 20 - meteorOffset1);

  let meteorOffset2 = (t * 3) % 800;
  stroke(255, 200, 100, 100);
  line(500 - meteorOffset2, 300 + meteorOffset2, 580 - meteorOffset2, 220 + meteorOffset2);

  // 4. 중앙의 토성 (sin을 이용한 상하 부유 효과)
  let saturnY = 200 + sin(t * 0.05) * 10;

  noFill(); strokeWeight(10); stroke(255, 150, 50, 180);
  ellipse(300, saturnY, 200, 50); // 고리

  noStroke(); fill(200, 100, 50);
  circle(300, saturnY, 100); // 본체

  noFill(); strokeWeight(10); stroke(255, 150, 50, 180);
  arc(300, saturnY, 200, 50, 0, PI); // 앞쪽 고리

  // 5. 행성의 위성들 (sin, cos를 이용한 궤도 공전)
  let moonAngle1 = t * 0.03;
  let moon1X = 300 + cos(moonAngle1) * 120;
  let moon1Y = saturnY + sin(moonAngle1) * 40;
  noStroke(); fill(150, 150, 150); circle(moon1X, moon1Y, 15);

  let moonAngle2 = t * 0.05 + PI; // 반대편(PI)에서 시작
  let moon2X = 300 + cos(moonAngle2) * 90;
  let moon2Y = saturnY + sin(moonAngle2) * 25;
  fill(100, 200, 100); circle(moon2X, moon2Y, 10);

  // 6. 미지의 큐브 (millis, lerpColor를 이용한 색상 변화 및 크기 변화)
  let lerpAmt = (sin(m * 0.002) + 1) / 2; // 0에서 1 사이를 왕복하는 값 생성
  let cubeColor = lerpColor(color1, color2, lerpAmt);
  let cubeSize = 40 + sin(t * 0.1) * 10; // 크기 진동

  fill(cubeColor);
  square(80, 60, cubeSize);
  square(90, 70, cubeSize * 0.8);

  // 7. 로켓 (앞으로 전진 및 엔진 불꽃 애니메이션)
  let rocketX = (t * 2) % 800 - 200; // x좌표 이동

  push(); // 로켓 좌표계 독립 (로켓 전체를 묶어서 이동시키기 위함)
  translate(rocketX, 0);

  fill(200, 50, 50); quad(120, 250, 160, 260, 160, 300, 120, 310); // 날개
  fill(240); rect(140, 260, 80, 40); // 몸체
  fill(50, 50, 100); circle(180, 280, 15); // 창문
  fill(200, 50, 50); triangle(220, 260, 260, 280, 220, 300); // 머리

  // 로켓 엔진 불꽃 (random을 이용한 동적인 크기와 색상 변화)
  let flameOffset = random(-5, 10);
  fill(255, random(100, 200), 0); // 주황~노랑 사이 무작위 색상
  triangle(140, 260, 100 - flameOffset, 280, 140, 300);

  strokeWeight(3); stroke(255, 255, 0);
  line(110, 275, 90 - random(10), 275);
  line(110, 285, 90 - random(10), 285);
  
  pop(); // 로켓 좌표계 복구
}