const commandUser = require('./command');
const queryUser = require('../queries/query');
const userModels = require('./commandModels')
const response = require('../../../../helpers/utils/response/response');
const logger = require('../../../../helpers/utils/logger');


const updateUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const { id } = req.params;

    if (!id) {
        return response(res, 400, 'Id is required');
    } else {
        const user = await queryUser.findOneUser({ _id: id });
        if (!user) {
            return response(res, 400, 'User not found');
        }
    }

    const { error } = userModels.update.validate({ name, email, password, role });

    if (error) {
        return response(res, 400, error.details[0].message);
    } else {
        try {
            const result = await commandUser.updateUser({ _id: id }, { name, email, password, role });
            logger.log(result, 'info');
            response(res, 200, 'Success', result);
        } catch (error) {
            logger.log(error.message, 'error');
            response(res, 500, 'Internal Server Error', error);
        }
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return response(res, 400, 'Id is required');
    } else {
        const user = await queryUser.findOneUser({ _id: id });
        if (!user) {
            return response(res, 400, 'User not found');
        }
    }

    try {
        const result = await commandUser.deleteUser({ _id: id });
        logger.log(result, 'info');
        response(res, 200, 'Success', result);
    }
    catch (error) {
        logger.log(error.message, 'error');
        response(res, 500, 'Internal Server Error', error);
    }
}

module.exports = {
    updateUser,
    deleteUser
}