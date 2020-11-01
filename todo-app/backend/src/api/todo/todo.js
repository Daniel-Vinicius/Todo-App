const restful = require('node-restful') // linha 1 e 2 declarando node restful e mongoose
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = restful.model('Todo', todoSchema)