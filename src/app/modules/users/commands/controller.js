const commandUser = require('./command');
const queryUser = require('../queries/query');
const userModels = require('./commandModels')
const response = require('../../../../helpers/utils/response/response');
const jwtAuth = require('../../../../auth/jwt.auth');
const logger = require('../../../../helpers/utils/logger');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, email, password, role} = req.body;

    const user = await queryUser.findOneUser({ email });
    if (user) {
        return response(res, 400, 'User already exists');
    }

    const { error } = userModels.register.validate({ name, email, password, role });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (error) {
        return response(res, 400, error.details[0].message);
    } else {
        try {
            const result = await commandUser.insertUser({ name, email, password: hashPassword, role });
            logger.log(result, 'info');
            response(res, 200, 'Success', result);
        } catch (error) {
            logger.log(error.message, 'error');
            response(res, 500, 'Internal Server Error', error);
        }
    }
}

const login = async (req, res) => {
    const { name, password } = req.body;
    const user = await queryUser.findOneUser({ name });
    logger.log(user, 'info');
    if (!user) {
        logger.log('User not found', 'error');
        return response(res, 404, 'User not found');
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        logger.log('Invalid Password', 'error');
        return response(res, 401, 'Invalid Password');
    }

    const token = jwtAuth.generateToken(user);
    logger.log(token, 'info');
    return response(res, 200, 'Success', { auth: true, token: token });
}


module.exports = {
    register,
    login
}