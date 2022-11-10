
var express = require('express');
var router = express.Router();
const { admin } = require("../controllers/admincontroler")

router.get("/admin", admin)


module.exports = router;