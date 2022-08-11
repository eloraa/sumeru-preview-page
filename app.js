const express = require('express')
let bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use('/', express.static('./'))

app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(__dirname, 'source/404.html'));
})
app.use(bodyParser.json())

module.exports = app