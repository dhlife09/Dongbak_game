const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 라우팅
app.get("/", (req, res) => {
  res.redirect("/start");
});

app.get("/start", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "start.html"));
});

app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "game.html"));
});

app.get("/rank", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "rank.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});