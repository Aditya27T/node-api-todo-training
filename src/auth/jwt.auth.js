const jwt = require('jsonwebtoken');
const config = require('../helpers/config/config');
const logger = require('../helpers/utils/logger');
const response = require('../helpers/utils/response/response')


const verifyToken = (req, res, next) => {
    const headers = req.headers['x-access-token'] || req.headers['authorization'];
    logger.log(headers, 'info');
    if (!headers) {
        return response(res, 401, 'No token provided');
    }
    const token = headers.split(' ')[1];
    logger.log(token, 'info');

    if (!token) {
        return response(res, 401, 'No token provided');
    } else {
        jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
            if (err) {
                return response(res, 500, 'Failed to authenticate token');
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
}

const verifyTokenAdmin = (req, res, next) => {
    const headers = req.headers['x-access-token'] || req.headers['authorization'];
    logger.log(headers, 'info');
    if (!headers) {
        return response(res, 401, 'No token provided');
    }
    const token = headers.split(' ')[1];

    if (!token) {
        return response(res, 401, 'No token provided');
    }
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return response(res, 500, 'Failed to authenticate token');
        } else {
            if (decoded.role === 'admin') {
                req.userId = decoded.id;
                next();
            } else {
                return response(res, 401, 'Unauthorized');
            }
        }
    });

}

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, config.JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
}

module.exports = {
    verifyToken,
    verifyTokenAdmin,
    generateToken
}