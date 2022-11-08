const userModel = require("../model/usermodel")
const bcrypt = require('bcrypt');
const usermodel = require("../model/usermodel");


function getIndexPage(req, res, next) {
    res.render('index', { title: 'Express', myName: 'abhiramiiii', name: 'anu', std: { mark: 100 } });
}
function signupage(req, res, next) {
    res.render('signup',);
}
function login(req, res, next) {
    res.render('login',);
}

function homePage(req, res) {
    res.render('home')
}


async function dosignup(req, res, next) {
    console.log(req.body)
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        await userModel.create(req.body);//data edukkunth
        res.redirect("/login")
    } catch (error) {
        console.log(error);
    }
}

async function dologin(req, res,) {
    // console.log(req.body);
    console.log(req.body.password);//form nn frond end//
    let user = await usermodel.findOne({ email: req.body.email })
    if (user != null) {
        console.log(user.password);//user data base//
        let check = await bcrypt.compare(req.body.password, user.password)
        console.log(check);//check 

        if (check == true) {
            res.redirect("/home")

        } else {
            res.redirect("/login")
        }

    } else {
        res.redirect("/login")
    }
}
module.exports = { getIndexPage, signupage, login, dosignup, dologin, homePage }