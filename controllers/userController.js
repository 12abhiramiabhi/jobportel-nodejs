function getIndexPage(req, res, next) {
    res.render('index', { title: 'Express', myName: 'abhiramiiii', name: 'anu', std: { mark: 100 } });
}
function signupage(req, res, next) {
    res.render('signup',);
}
function login(req, res, next) {
    res.render('login',);
}

module.exports = { getIndexPage, signupage, login }