const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/contact", (req, res) => {
  res.send("<h1> This is contact page</h1>");
});

app.get("/services", (req, res) => {
  res.send(console.log(["This is services page"]));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
