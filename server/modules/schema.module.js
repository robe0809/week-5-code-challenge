const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        comment: {type: String, required: true},
    }
)

module.exports = messageSchema;