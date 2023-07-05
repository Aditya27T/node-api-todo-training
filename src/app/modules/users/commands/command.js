const queries = require('../../../../helpers/database/mongo/db');

const insertUser = async (user) => {
    const result = await queries.insertOne(user, 'users');
    return result;
}


module.exports = {
    insertUser
}