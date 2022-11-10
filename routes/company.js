var express = require('express');
var router = express.Router();
const { company, signup } = require("../controllers/companycontroler")


router.get("/", company)
router.get("/signup", signup)


module.exports = router;