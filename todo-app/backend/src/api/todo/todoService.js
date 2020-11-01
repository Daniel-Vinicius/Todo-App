const Todo = require('./Todo')

Todo.methods(['get', 'post', 'put', 'delete']) // linha 3 métodos usados
Todo.updateOptions({
    new: true, // num put retorna o novo
    runValidators: true // faz as validações no put
})

module.exports = Todo