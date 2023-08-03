const jwt = require('jsonwebtoken');
const config = require('../helpers/config/config');
const { findOneUser } = require('../app/modules/users/queries/query');
const logger = require('../helpers/utils/logger');
const response = require('../helpers/utils/response/response')

const generateToken = () => {
    const user = findOneUser({ _id: decoded.id });
    const token = jwt.sign({ user }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRATION
    });
    return token;
}

const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        logger.log('No token provided', 'error');
        return response(res, 403, 'No token provided');
    }
    try {
        const decoded = jwt.verify(token, config.secret);
        const user = await findOneUser({ _id: decoded.id });
        if (!user) {
            logger.log('No user found', 'error');
            return response(res, 404, 'No user found');
        }
        req.userId = decoded.id;
        next();

    } catch (error) {
        logger.log(error.message, 'error');
        return response(res, 401, 'Unauthorized');
    }
}

module.exports = {
    generateToken,
    verifyToken
}