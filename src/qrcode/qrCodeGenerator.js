exports.getSimpleQRCode = function(req, res) {
  console.log("Requested : /api/getSimpleQRCode/");
  res.json({ message: "getSimpleQRCode success" });
};

exports.getQRCode = function(req, res) {
  console.log("Requested : /api/getQR/");
  console.log(req.params.cardInfo);
  res.json({ message: "getQRCode success" });
};

module.exports = exports;
