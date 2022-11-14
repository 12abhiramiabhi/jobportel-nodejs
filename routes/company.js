var express = require('express');
var router = express.Router();
const { company, signup, login, signupcompany } = require("../controllers/companycontroler")


router.get("/", company)
router.get("/signup", signup)
router.get("/login", login)

router.post('/signup', signupcompany);



module.exports = router;