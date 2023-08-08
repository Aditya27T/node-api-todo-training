const connection = require('./connection')

const findAll = async (parameter, collection) => {
    const db = await connection.getDb()
    const recordSet = await db.collection(collection).find(parameter).toArray()
    !recordSet ? new Error('No record found') : recordSet
    return recordSet
}

const findOne = async (parameter, collection) => {
    const db = await connection.getDb()
    const recordSet = await db.collection(collection).findOne(parameter)
    !recordSet ? new Error('No record found') : recordSet
    return recordSet
}

const insertOne = async (parameter, collection) => {
    const db = await connection.getDb()
    const recordSet = await db.collection(collection).insertOne(parameter)
    !recordSet ? new Error('No record found') : recordSet
    return recordSet
}

const updateOne = async (parameter, data, collection) => {
    const db = await connection.getDb()
    const recordSet = await db.collection(collection).updateOne(parameter, { $set: data })
    !recordSet ? new Error('No record found') : recordSet
    return recordSet
}

const deleteOne = async (parameter, collection) => {
    const db = await connection.getDb()
    const recordSet = await db.collection(collection).deleteOne(parameter)
    !recordSet ? new Error('No record found') : recordSet
    return recordSet
}

module.exports = {
    findAll,
    findOne,
    insertOne,
    updateOne,
    deleteOne
}