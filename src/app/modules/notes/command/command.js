const queries = require('../../../../helpers/database/mongo/db');

const insertData = async (parameter) => {
    const recorsSet = await queries.insertData(parameter, 'notes');
    return recorsSet;
}

const updateData = async (parameter, data) => {
    const recorsSet = await queries.updateData(parameter, data, 'notes');
    return recorsSet;
}

const deleteData = async (parameter) => {
    const recorsSet = await queries.deleteData(parameter, 'notes');
    return recorsSet;
}


module.exports = {
    insertData,
    updateData,
    deleteData
}