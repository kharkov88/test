const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                err: err,
                message: 'Something is not right',
                user: user,
                info: info
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           const payload = {
            name: user.user,
            id: user.id
           }
           const token = jwt.sign(payload, 'your_jwt_secret');
           return res.json({user, token, info});
        });
    })(req, res);
});

module.exports = router