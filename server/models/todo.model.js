var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        default: ''
    },
    isBought: {
        type: Boolean,
        default: false
    }
});