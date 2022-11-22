var express = require('express');
var router = express.Router();
const { signupage, login, dosignup, dologin, homePage } = require("../controllers/userController")




router.get('/signup', signupage);
router.post('/signup', dosignup);

router.get('/login', login)
router.post('/login', dologin)

router.get('/home', homePage)


module.exports = router;
