const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('./auth.repository');

passport.use(new BasicStrategy(
    function (username, password, done) {
        User.findByUsername(username, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user || !user.isValidPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));

const isAuthenticated = passport.authenticate('basic', { session: false });
const init = () => {
    return passport.initialize();
}

module.exports = {
    isAuthenticated,
    init
}