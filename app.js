var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
var app = express();


var indexRouter = require('./routes/index');
const companyRouter = require('./routes/company')
const addmin = require('./routes/admin')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 4 }//cookie for 4 hours//
}))

app.use('/', indexRouter);
app.use('/company', companyRouter)
app.use('/admin', addmin)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://abhirami:123@cluster0.hsgwgwj.mongodb.net/jobdb?retryWrites=true&w=majority', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("conneted to db");
  }
}),

  module.exports = app;
