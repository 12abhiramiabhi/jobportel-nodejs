var express = require('express');
var router = express.Router();

const { signupage, login, dosignup, dologin, homePage, viewJob, userCompany,userUpdateForm,updateFormProfile,
    userProfile, applyJOB,} = require("../controllers/userController");


const checkuserLoggedIn = require('../middlewares/checkUserLoggedIn');




router.get('/signup', signupage);
router.post('/signup', dosignup);

router.get('/login', login)
router.post('/login', dologin)

router.get('/home', checkuserLoggedIn, homePage)
router.get('/view-jobs', checkuserLoggedIn, viewJob)

router.get('/usercompanypage', userCompany)

router.get('/userUpdate',userUpdateForm)

router.post('/updateFormUser',updateFormProfile)
router.get('/UserProfile',userProfile)

router.get('/applyjob/:id', applyJOB)



module.exports = router;
