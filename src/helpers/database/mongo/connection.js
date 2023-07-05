const { MongoClient } = require('mongodb');
const config = require('../../config/config');

const uri = config.Mongo;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConnection = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

const getDb = () => {
    return client.db();
}

module.exports = {
    dbConnection,
    getDb
}