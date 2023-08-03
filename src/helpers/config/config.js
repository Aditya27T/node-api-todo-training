require('dotenv').config()

const PORT = process.env.PORT
const Mongo = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRATION = process.env.JWT_EXPIRATION
const BASIC_AUTH = {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD
}


module.exports = {
    PORT,
    Mongo,
    JWT_SECRET,
    JWT_EXPIRATION,
    BASIC_AUTH
}