var express = require("express");
var qrCodeRoute = require("./routes/qrCodeRoute");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 4197;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res, next) {
  console.log("/ GET API requested");
  res.json({ message: "send", Date: Date.now() });
});

app.use("/api/qrcode", qrCodeRoute);

app.listen(PORT, function() {
  console.log("QR Code Server Started on PORT :" + PORT);
});
