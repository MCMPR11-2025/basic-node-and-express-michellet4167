require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
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
