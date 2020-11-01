const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // usa os metodos declarados em todoService quando a url base for router/todos, lembrando que router usa a url base /api
}