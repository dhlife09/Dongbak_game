# 🖱️ Click Move Game

2026 BlackCat 동아리박람회에서 사용한 간단한 웹 기반 클릭 게임입니다.
버튼을 클릭하여 목표 지점(결승선)에 도달하는 시간을 측정하고 랭킹을 기록합니다.

> 🎮 Lightweight Web Game  
> 🏁 Finish Line Race Concept  
> 🛠 Built with HTML, CSS, JavaScript, Node.js (Express)

---

## 🎯 게임 목표

- 버튼을 클릭하면 오른쪽으로 이동합니다.
- 결승선(🏁)에 도달하면 게임이 종료됩니다.
- 제한된 클릭 횟수 내에 최대한 빠르게 도착하세요.
- 기록은 랭킹에 저장됩니다.

---

## 🕹️ 게임 규칙

| 항목 | 내용 |
|------|------|
| 이동 방식 | 클릭 시 16px 이동 |
| 목표 위치 | 1600px |
| 기록 측정 | 시작 ~ 결승 도달 시간 |
| 랭킹 | 상위 5명 기록 저장 |

---

## 🖥️ 페이지 구성
```
/start → 게임 설명 및 시작
/game → 클릭 이동 게임 플레이
/rank → 기록 및 랭킹 확인
```

---

## 🚀 실행 방법

### 1️⃣ 설치

```bash
npm install
```
### 2️⃣ 서버 실행
```bash
node server.js
```
### 3️⃣ 접속
```
http://localhost:3000
```

---

## 📁 프로젝트 구조
```
click-game/
 ├── server.js
 └── public/
      ├── start.html
      ├── game.html
      └── rank.html
```

---

## 🏁 게임 화면
### Start

게임 규칙 설명
Start 버튼

### Game

실시간 타이머 표시
남은 클릭 수 표시
체크무늬 결승선
Goal 도달 시 자동 종료

### Rank

본인 기록 표시
상위 5명 랭킹
Restart 기능
