var express = require('express');
var router = express.Router();
const { company, signup, login, signupcompany, loginCompany, homePage, getAddJobPage, addjobCompany, viewJob,companyView} = require("../controllers/companycontroler")


router.get("/", company)

router.get("/signup", signup)

router.get("/login", login)

router.post("/signup", signupcompany);

router.post("/login", loginCompany)

router.get('/home', homePage)


router.get("/addjob", getAddJobPage)

router.post("/addjob", addjobCompany)

router.get("/viewjob", viewJob)

router.get("/companyview",companyView)

module.exports = router;