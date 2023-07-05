require('dotenv').config()

const PORT = process.env.PORT
const Mongo = process.env.MONGO_URI

module.exports = {
    PORT,
    Mongo
}