require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.use(function(req,res, next) {
  var message = req.method + " " + req.path + " - " + req.ip;
  console.log(message);
  next();
});

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});
    //res.sendFile(__dirname + "/views/index.html");
    //res.json({
app.get("/json", function(req,res) {
if (process.env.MESSAGE_STYLE === "uppercase") {
  res.json({"message": "HELLO JSON"});
} else {
  res.json({"message": "Hello json"});
}
});

































 module.exports = app;
