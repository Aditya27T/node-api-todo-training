const queries = require('../../../../helpers/database/mongo/db');

const findOneUser = async (parameter) => {
    const recorsSet = await queries.findOne(parameter, 'user');
    return recorsSet;
}

module.exports = {
    findOneUser
}