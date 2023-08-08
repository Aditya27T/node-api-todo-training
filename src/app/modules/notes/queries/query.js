const queries = require('../../../../helpers/database/mongo/db')

const findAll = async (parameter) => {
    const recorsSet = await queries.findAll(parameter, 'notes');
    return recorsSet;
}

const findOne = async (parameter) => {
    const recorsSet = await queries.findOne(parameter, 'notes');
    return recorsSet;
}


module.exports = {
    findAll,
    findOne
}