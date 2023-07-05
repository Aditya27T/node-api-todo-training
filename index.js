const express = require('express')
const app = express()
const config = require('./src/helpers/config/config')
const db = require('./src/helpers/database/mongo/connection')
const port = config.PORT
const cors = require('cors')
const router = require('./src/app/index')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

db.dbConnection((err) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
})

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})