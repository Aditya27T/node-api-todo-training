const commandNotes = require('./command');
const queryNotes = require('../queries/query');
const NotesModels = require('./commandModel')
const response = require('../../../../helpers/utils/response/response');
const logger = require('../../../../helpers/utils/logger');


const createNotes = async (req, res) => {
    const { error } = NotesModels.notes.validate(req.body);
    if (error) {
        response(res, 400, 'Bad Request', error.details[0].message);
    } else {
        try {
            const result = await commandNotes.insertData(req.body);
            logger.log(result, 'info');
            response(res, 201, 'Success', result);
        } catch (error) {
            logger.log(error.message, 'error');
            response(res, 500, 'Internal Server Error', error);
        }
    }
}

const updateNotes = async (req, res) => {
    const { error } = NotesModels.notes.validate(req.body);
    if (error) {
        response(res, 400, 'Bad Request', error.details[0].message);
    } else {
        const parameter = { _id: req.params.id };
        try {
            const result = await commandNotes.updateData(parameter, req.body);
            logger.log(result, 'info');
            response(res, 200, 'Success', result);
        } catch (error) {
            logger.log(error.message, 'error');
            response(res, 500, 'Internal Server Error', error);
        }
    }
}

const deleteNotes = async (req, res) => {
    const parameter = { _id: req.params.id };
    try {
        const result = await commandNotes.deleteData(parameter);
        logger.log(result, 'info');
        response(res, 200, 'Success', result);
    } catch (error) {
        logger.log(error.message, 'error');
        response(res, 500, 'Internal Server Error', error);
    }
}

module.exports = {
    createNotes,
    updateNotes,
    deleteNotes
}