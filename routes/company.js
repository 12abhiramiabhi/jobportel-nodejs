var express = require('express');
var router = express.Router();
const { signup, login, signupcompany, loginCompany, homePage, getAddJobPage, addjobCompany, companyView,updateProfile,updateProfilePage,
companyProfile} = require("../controllers/companycontroler");
const checkCompanyLoggedIn = require('../middlewares/checkCompanyLoggedIn');



router.get("/signup", signup)
router.post("/signup", signupcompany);

router.get("/login", login)
router.post("/login", loginCompany)

// do not apply middleware to the above routes


router.get('/home', checkCompanyLoggedIn, homePage)

router.get("/addjob", checkCompanyLoggedIn, getAddJobPage)
router.post("/addjob", checkCompanyLoggedIn, addjobCompany)

router.get("/view-jobs", checkCompanyLoggedIn, companyView)


router.get("/updateProfilePage",updateProfilePage)
router.post("/updateProfile",updateProfile)
router.get("/profile",companyProfile)

module.exports = router;