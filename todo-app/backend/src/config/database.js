const mongoose = require('mongoose'); // requerindo mongoose depois de ter o instalado
mongoose.Promise = global.Promise // tirando msg de erro
module.exports = mongoose.connect('mongodb://localhost/todo', {}); // conectando ao servidor do mongo
// quando for testar é nescessário dar um mongod no terminal