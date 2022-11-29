var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const { signupage, login, dosignup, dologin, homePage, viewJob, userCompany, applyJOB } = require("../controllers/userController");
=======
const { signupage, login, dosignup, dologin, homePage, viewJob, userCompany,updateFormUser} = require("../controllers/userController");
>>>>>>> f5284b64c4695143d2c292b0cb03b37bf27c052b
const checkuserLoggedIn = require('../middlewares/checkUserLoggedIn');




router.get('/signup', signupage);
router.post('/signup', dosignup);

router.get('/login', login)
router.post('/login', dologin)

router.get('/home', checkuserLoggedIn, homePage)
router.get('/view-jobs', checkuserLoggedIn, viewJob)
<<<<<<< HEAD
router.get('/usercompanypage', userCompany)
router.get('/applyjob/:id', applyJOB)
=======
router.get('/usercompanypage',userCompany)
router.get('/updateFormUser',updateFormUser)
>>>>>>> f5284b64c4695143d2c292b0cb03b37bf27c052b


module.exports = router;
