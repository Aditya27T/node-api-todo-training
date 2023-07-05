const queries = require('../../../../helpers/database/mongo/db');

const findAllUser = async (parameter) => {
    const recorsSet = await queries.findAll(parameter, 'user');
    return recorsSet;
}

const findOneUser = async (parameter) => {
    const recorsSet = await queries.findOne(parameter, 'user');
    return recorsSet;
}

module.exports = {
    findAllUser,
    findOneUser
}