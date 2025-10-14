const mongoose = require('mongoose')

var schema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    publishedDate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model("Books", schema);   