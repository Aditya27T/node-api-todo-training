const queries = require('../../../../helpers/database/mongo/db');

const insertData = async (parameter) => {
    const recorsSet = await queries.insertOne(parameter, 'notes');
    return recorsSet;
}

const updateData = async (parameter, data) => {
    const recorsSet = await queries.updateOne(parameter, data, 'notes');
    return recorsSet;
}

const deleteData = async (parameter) => {
    const recorsSet = await queries.deleteOne(parameter, 'notes');
    return recorsSet;
}


module.exports = {
    insertData,
    updateData,
    deleteData
}