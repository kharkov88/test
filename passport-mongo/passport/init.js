var User = require('../models/user');
var login = require('./login');

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => User.findById(id, (err, user) => {
    console.log('deserializeUser', user);
    done(err, user);
  }));
  login(passport);
};