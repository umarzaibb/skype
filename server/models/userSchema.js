const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    passward: {
        type: String,
        required: true,
        minlength: 12
    }
});

const User=new mongoose.model('User', userSchema);

module.exports= User;