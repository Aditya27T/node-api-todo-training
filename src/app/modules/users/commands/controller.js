const commandUser = require('./command');
const response = require('../../../../helpers/utils/response/response');

const createUser = async (req, res) => {
    const user = req.body;
    try {
        const result = await commandUser.insertUser(user);
        response(res, 200, 'Success', result);
    } catch (error) {
        response(res, 500, 'Internal Server Error', error);
    }
}

module.exports = {
    createUser
}