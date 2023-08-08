const joi = require('joi');

const notes = joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
    userId: joi.string().required()
});

module.exports = {
    notes
}