const companymodel = require("../model/companymodel")
const addjob = require ("../model/addjob")

const bcrypt = require('bcrypt');

function company(req, res) {
    res.send("hai")
}

function companyAdd(req, res) {
    res.send("hello")
}
function companyAdd(req, res) {
    res.send("mainpage")
}

function signup(req, res) {
    res.render("company/signup")
}
function login(req, res) {
    res.render("company/login")
}


function homePage(req, res) {
    console.log(req.session.company)
    if (req.session.company) {
        res.render('company/home', { company: req.session.company })

    } else {
        res.redirect("/company/login")
    }
}

function getAddJobPage(req, res) {
    res.render("company/addjob")
}

const addjobCompany = async function(req,res){
    console.log(req.body);
       let addjob =await jobModel .findOne({name:req.body.name});
       console.log(addjob);
}

const signupcompany = async function (req, res) {
    console.log(req.body);
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await companymodel.create(req.body)
        res.redirect("/company/login")
    } catch (error) {
        console.log(error);
        res.redirect("/company/signup")
    }

}

const loginCompany = async function (req, res) {
    // console.log(req.body);
    try {
        let company = await companymodel.findOne({ email: req.body.email })
        if (company != null) {
            console.log(company.password);
            console.log(req.body.password);
            let check = await bcrypt.compare(req.body.password, company.password);
            console.log(check);
            if (check) {
                req.session.company = company;
                console.log(req.session.company);
                res.redirect("/company/home");
            } else {
                res.redirect("/company/login")
            }
        } else {
            res.redirect('/company/login')
        }
    } catch (error) {
        res.redirect("/company/login")
    }
}


module.exports = { company, companyAdd, signup, login, signupcompany, loginCompany, homePage, getAddJobPage,addjobCompany }