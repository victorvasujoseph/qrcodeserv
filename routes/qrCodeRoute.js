const express = require("express");
const qrCode = require("../src/qrcode/qrCodeGenerator");

const router = express.Router();

router.route("/").get(qrCode.getSimpleQRCode);
router.route("/card/:cardInfo").get(qrCode.getQRCode);

// router
//   .route("/:cardInfo")
//   .get(todos.getTodos);

module.exports = router;
