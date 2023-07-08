const config = require('../helpers/config/config');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    isValidPassword(password) {
        return this.password === password;
    }
}

module.exports.findByUsername = (username, cb) => {
    const userDatas = config.BASIC_AUTH;
    let userData;

    userData = userDatas.map((user) => {
        if (user.username === username) {
            return user;
        }
        return null;
    });

    const user = new User(userData[0].username, userData[0].password);
    cb(null, user);
};
