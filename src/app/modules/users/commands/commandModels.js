const joi = require('joi');

const register = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    role: joi.string().required().default('user').valid('user', 'admin')
});

const login = joi.object().keys({
    name: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().required().default('user').valid('user', 'admin')
});

module.exports = {
    register,
    login
}