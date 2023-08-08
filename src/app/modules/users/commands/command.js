const queries = require('../../../../helpers/database/mongo/db');

const insertUser = async (user) => {
    const result = await queries.insertOne(user, 'user');
    return result;
}

const updateUser = async (user) => {
    const result = await queries.updateOne(user, 'user');
    return result;
}

const deleteUser = async (user) => {
    const result = await queries.deleteOne(user, 'user');
    return result;
}


module.exports = {
    insertUser,
    updateUser,
    deleteUser
}