var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  router.get('/', function (req, res) {
    res.render('index', { message: req.flash('message') })
  });
  router.get('/home', isAuth, function (req, res) {
    res.render('home', { user: req.user });
  });
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true
  }));
  router.get('/signout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  function isAuth (req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  }

  return router;
};
