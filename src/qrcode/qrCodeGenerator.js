const qrcode = require("qrcode");
const fs = require("fs");
var path = require("path");

exports.getSimpleQRCode = function(req, res) {
  console.log("Requested : /api/getSimpleQRCode/");
  qrcode.toString(
    "Simple Data To Generate QR Code",
    { type: "terminal" },
    function(err, url) {
      console.log(url);
      res.json({ message: "getSimpleQRCode success", qrcode: url });
    }
  );
};

exports.getQRCode = async function(req, res) {
  console.log(`Requested : /api/qrcode/${req.params.cardInfo}`);
  const code = await qrcode.toDataURL(req.params.cardInfo);
  fs.writeFileSync("./assets/html/index.html", `<img src="${code}">`);
  console.log("Wrote to ./assets/html/index.html");
  res.sendFile(path.join(__dirname + "/../../assets/html/index.html"));
};

module.exports = exports;
