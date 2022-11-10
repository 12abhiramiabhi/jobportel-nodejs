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
    res.render("company/signup")//to render hbs page //
}

module.exports = { company, companyAdd, signup }