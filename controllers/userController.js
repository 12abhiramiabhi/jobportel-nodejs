const userModel = require("../model/usermodel")
const bcrypt = require('bcrypt');
const addjobmodel = require("../model/addjobmodel");


function signupage(req, res, next) {
    res.render('signup',);
}
async function dosignup(req, res, next) {
    console.log(req.body)//form le frond end le data 
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        await userModel.create(req.body);//database il data  vezunnu
        res.redirect("/login")
    } catch (error) {
        console.log(error);
        res.redirect("/signup")
    }
}


function login(req, res, next) {
    res.render('login',);
}
async function dologin(req, res,) {
    // console.log(req.body);
    console.log(req.body.password);//form nn frond end//
    let user = await userModel.findOne({ email: req.body.email })
    if (user != null) {
        console.log(user.password);//user data base//
        let check = await bcrypt.compare(req.body.password, user.password)
        console.log(check);//check 

        if (check == true) {
            req.session.user = user
            res.redirect("/home")

        } else {
            res.redirect("/login")
        }

    } else {
        res.redirect("/login")

    }
}


function homePage(req, res) {
    res.render('home')
}


async function viewJob(req, res) {
    let allJobs = await addjobmodel.find()
    res.render("viewjob", { allJobs })
}


module.exports = { signupage, login, dosignup, dologin, homePage, viewJob }