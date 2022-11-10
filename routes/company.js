var express = require('express');
var router = express.Router();
const { company, } = require("../controllers/companycontroler")


router.get("/", company)



module.exports = router;