const companymodel = require("../model/companymodel")
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

const signupcompany = async function (req, res) {
    console.log(req.body);
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await companymodel.create(req.body)
    } catch (error) {
        console.log(error);
    }
}




module.exports = { company, companyAdd, signup, login, signupcompany }