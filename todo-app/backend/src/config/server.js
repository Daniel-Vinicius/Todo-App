const port = 3003// porta

const bodyParser = require('body-parser') // requerindo ele depois de ter instalado com npm i --save body-parser
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({
    extended: true // padrão esse código da linha 7 a 9
}))
server.use(bodyParser.json()) // para aceitar json
server.use(allowCors) // para usar o allowCors

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server