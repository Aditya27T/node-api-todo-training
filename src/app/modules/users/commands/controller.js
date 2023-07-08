const commandUser = require('./command');
const queryUser = require('../queries/query');
const userModels = require('./commandModels')
const response = require('../../../../helpers/utils/response/response');
const logger = require('../../../../helpers/utils/logger');

const createUser = async (req, res) => {
    const { name, email, password, role} = req.body;

    const user = await queryUser.findOneUser({ email });
    if (user) {
        return response(res, 400, 'User already exists');
    }

    const { error } = userModels.createUser.validate({ name, email, password, role });

    if (error) {
        return response(res, 400, error.details[0].message);
    } else {
        try {
            const result = await commandUser.insertUser({ name, email, password, role });
            logger.log(result, 'info');
            response(res, 200, 'Success', result);
        } catch (error) {
            logger.log(error.message, 'error');
            response(res, 500, 'Internal Server Error', error);
        }
    }
}

module.exports = {
    createUser
}