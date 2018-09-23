const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const app = express();
const crud = require('./crud');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('cors')());
app.use(express.static(path.join(__dirname, 'public')));

//passport
//app.use(passport.initialize());
require('./passport');
app.use((req, res, next) => {
	//console.log('jwt', )
	next()
})
//routes
const employer = require('./routes/employer');
const login = require('./routes/login');
const employers = require('./routes/employers');

app.use('/employers', employers)
app.use('/employer', passport.authenticate('jwt', {session: false}), employer);
app.use('/login', login);

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
  res.json({'error': err});
});

module.exports = app;
