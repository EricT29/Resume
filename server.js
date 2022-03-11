var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));