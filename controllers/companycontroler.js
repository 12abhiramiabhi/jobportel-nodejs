const companymodel = require("../model/companymodel")



const addjobmodel = require("../model/addjobmodel")

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

function viewJob(req, res) {
    res.render("company/viewjob")
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

const addjobCompany = async function (req, res) {
    console.log(req.body);
    req.body.companyId = req.session.company._id
    req.body.companyName = req.session.company.name
    req.body.jobPostedDate = new Date().toLocaleDateString()
    console.log(req.body);
    await addjobmodel.create(req.body)
    res.redirect("/company/home")
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


module.exports = { company, companyAdd, signup, login, signupcompany, loginCompany, homePage, getAddJobPage, addjobCompany, viewJob }