const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        index: true,
        required: '{PATH} is required!'
    },
    email: {
        type: String,
        unique: true,
        required: '{PATH} is required!'
    },
    firstName: {
        type: String,
        required: '{PATH} is required!'
    },
    lastName: {
        type: String,
        required: '{PATH} is required!'
    },
    phoneNumber: {
        type: String,
        required: '{PATH} is required!'
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', schema);

module.exports = User;