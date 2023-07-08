require('dotenv').config()

const PORT = process.env.PORT
const Mongo = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRATION_HOURS = process.env.JWT_EXPIRATION_HOURS
const BASIC_AUTH = {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD
}


module.exports = {
    PORT,
    Mongo,
    JWT_SECRET,
    JWT_EXPIRATION_HOURS,
    BASIC_AUTH
}