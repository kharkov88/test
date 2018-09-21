var LocalStrategy = require('passport-local');
var User = require('../models/user');

module.exports = function (passport) {
  passport.use('login', new LocalStrategy({
      passReqToCallback: true
    },
    function (req, username, password, done) {
      console.log('body: ', req.body)
      User.findOne({'username': username},
        function (err, user) {
          if (err)
            return done(err);
          if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false,
              req.flash('message', 'User Not found.'));
          }
          if (user.password !== password) {
            console.log('Invalid Password');
            return done(null, false,
              req.flash('message', 'Invalid Password'));
          }
          return done(null, user);
        }
      );
    }));
};