const queries = require('../../../../helpers/database/mongo/db');

const insertUser = async (parameter) => {
    const recorsSet = await queries.insertOne(parameter, 'notes');
    return recorsSet;
}

module.exports = {
    insertUser
}