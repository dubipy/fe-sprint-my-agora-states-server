const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");

// TODO: cors를 적용합니다.

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.

const port = 3001;
const discussionsRouter = require("./router/discussions");

// 미들웨어
app.use(cors());
app.use(express.json());

// TODO: /discussions 경로로 라우팅합니다.

app.use("/discussions", discussionsRouter);
app.get("/", (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send("하하 ");
  throw "";
});

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
