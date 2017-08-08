var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: String,
    quantity: Number,
    checked: Boolean
});