const joi = require('joi');

const register = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(6).max(20).regex(/^[a-zA-Z0-9]{3,30}$/),
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