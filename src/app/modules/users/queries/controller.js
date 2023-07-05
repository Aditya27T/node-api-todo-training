const queryUsers = require('./query')
const response = require('../../../../helpers/utils/response/response');
const { ObjectId } = require('mongodb');


const findAllUsers = async (req, res) => {
    try {
        const result = await queryUsers.findAllUser();
        response(res, 200, 'Success', result);
    } catch (error) {
        response(res, 500, 'Internal Server Error', error);
    }
}

const findOneUser = async (req, res) => {
    const parameter = {_id: ObjectId(req.params.id)}
    try {
        const result = await queryUsers.findOneUser(parameter);
        response(res, 200, 'Success', result);
    } catch (error) {
        response(res, 500, 'Internal Server Error', error);
    }
}

module.exports = {
    findAllUsers,
    findOneUser
}