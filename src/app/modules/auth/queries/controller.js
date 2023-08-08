const queryUsers = require('./query')
const response = require('../../../../helpers/utils/response/response');
const logger = require('../../../../helpers/utils/logger');
const { ObjectId } = require('mongodb');

const findOneUser = async (req, res) => {
    const parameter = { _id: new ObjectId(req.params.id) };
    try {
        const result = await queryUsers.findOneUser(parameter);
        logger.log(result, 'info');
        response(res, 200, 'Success', result);
    } catch (error) {
        logger.log(error.message, 'error');
        response(res, 500, 'Internal Server Error', error);
    }
}

module.exports = {
    findOneUser
}