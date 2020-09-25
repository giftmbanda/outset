const path = require("path");
const express = require("express");
const app = express();
// const publicPath = path.join(__dirname, "build");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.use("/ping", (req, res) => {
  res.send('pong');
});

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () =>{
  console.log("server is runnung on http://localhost:3000");
});
