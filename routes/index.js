var express = require('express');
var router = express.Router();
const { getIndexPage, signupage, login } = require("../controllers/userController")


/* GET home page. */

router.get('/', getIndexPage);

router.get('/signup', signupage);

router.get('/login', login)

module.exports = router;
