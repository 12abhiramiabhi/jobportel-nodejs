var express = require('express');
var router = express.Router();
const { signup, login, signupcompany, loginCompany, homePage, getAddJobPage, addjobCompany, companyView } = require("../controllers/companycontroler")



router.get("/signup", signup)
router.post("/signup", signupcompany);

router.get("/login", login)
router.post("/login", loginCompany)

router.get('/home', homePage)

router.get("/addjob", getAddJobPage)
router.post("/addjob", addjobCompany)

router.get("/companyview", companyView)

module.exports = router;