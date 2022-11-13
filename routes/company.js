var express = require('express');
var router = express.Router();
const { company, signup, login } = require("../controllers/companycontroler")


router.get("/", company)
router.get("/signup", signup)
router.get("/login",login)


module.exports = router;