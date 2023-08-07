const queryNotes = require('./query')
const response = require('../../../../helpers/utils/response/response');
const logger = require('../../../../helpers/utils/logger');
const { ObjectId } = require('mongodb');

const findAllNotes = async (req, res) => {
    try {
        const result = await queryNotes.findAll();
        logger.log(result, 'info');
        response(res, 200, 'Success', result);
    } catch (error) {
        logger.log(error.message, 'error');
        response(res, 500, 'Internal Server Error', error);
    }
}

const findOneNote = async (req, res) => {
    const parameter = { _id: new ObjectId(req.params.id) };
    try {
        const result = await queryNotes.findOne(parameter);
        logger.log(result, 'info');
        response(res, 200, 'Success', result);
    } catch (error) {
        logger.log(error.message, 'error');
        response(res, 500, 'Internal Server Error', error);
    }
}

module.exports = {
    findAllNotes,
    findOneNote
}