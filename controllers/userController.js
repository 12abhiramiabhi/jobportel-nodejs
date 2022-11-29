const userModel = require("../model/usermodel")
const bcrypt = require('bcrypt');
const addjobmodel = require("../model/addjobmodel");
const companymodel = require("../model/companymodel");
const jobapplicationmodel = require("../model/jobapplicationmodel");


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

async function userCompany(req, res) {
    let allcompany = await companymodel.find()
    res.render("userCompanyPage", { allcompany })
}



async function applyJOB(req, res) {
    console.log(req.params.id);
    let jobDetailes = await addjobmodel.findOne({ _id: req.params.id })
    console.log(jobDetailes.name);
    let application = {
        userName: req.session.user.name,
        userEmail: req.session.user.email,
        userphoneNumber: req.session.user.phone,
        userAddress: req.session.user.address,
        userexprience: req.session.user.experience,
        companyId: jobDetailes.companyId,
        companyName: jobDetailes.companyName,
        jobTitle: jobDetailes.name,
        jobId: jobDetailes._id

    }
    console.log(application);

    await jobapplicationmodel.create(application)
    res.redirect("/home")
}

const userUpdateForm = async function(req,res){
    res.render("/updateFormUser")
}

const updateFormProfile =async function(req,res){
    req.body.profileUpdate =true
    await userModel.create(req.body)
    {_id:req.session.user._id}
    req.file.image.mv("./public/image/userProfile/" + req.session.user._id+".pdf")
}

const userProfile = async function(req,res){
    res.render("/userprofile")
}


module.exports = { signupage, login, dosignup, dologin, homePage, viewJob, userCompany,userUpdateForm,updateFormProfile,userProfile, applyJOB}

