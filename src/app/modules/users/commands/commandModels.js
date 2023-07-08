const joi = require('joi');

const createUser = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    role: joi.string().required().default('user').valid('user', 'admin')
});

module.exports = {
    createUser
}