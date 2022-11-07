const userModel = require("../model/usermodel")
const bcript = require('bcrypt');
const usermodel = require("../model/usermodel");

function getIndexPage(req, res, next) {
    res.render('index', { title: 'Express', myName: 'abhiramiiii', name: 'anu', std: { mark: 100 } });
}
function signupage(req, res, next) {
    res.render('signup',);
}
function login(req, res, next) {
    res.render('login',);
    console.log("login page submitted");
}

async function dosignup(req, res, next) {
    console.log(req.body)
    try {
        req.body.password = await bcript.hash(req.body.password, 10)
        await userModel.create(req.body);//data edukkunth
        res.redirect("/login")
    } catch (error) {
        console.log(error);
    }
}

async function dologin(req, res,) {
    console.log(req.body);
    let user = await usermodel.findOne({ email: req.body.email })
    if (user != null) {
        console.log();
    } else {
        res.redirect("/login")
    }
}
module.exports = { getIndexPage, signupage, login, dosignup, dologin }