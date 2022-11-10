function company(req, res) {
    res.send("hai")
}

function companyAdd(req, res) {
    res.send("hello")
}
function newCompany(req, res) {
    res.send("mainpage")
}

module.exports = { company, companyAdd, newCompany }