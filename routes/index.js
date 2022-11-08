var express = require('express');
var router = express.Router();
const { getIndexPage, signupage, login, dosignup, dologin, homePage } = require("../controllers/userController")


/* GET home page. */

router.get('/', getIndexPage);

router.get('/signup', signupage);

router.post('/signup', dosignup);

router.get('/login', login)

router.get('/home', homePage)

router.post('/login', dologin)


module.exports = router;
