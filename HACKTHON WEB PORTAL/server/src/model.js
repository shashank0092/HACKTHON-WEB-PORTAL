const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
    },
    age: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    cpassword: {
        type: String,
        // required: true,
    },
    messages:[
        {
            name: {type: String},
            email: {type: String},
            phoneNumber: {type: String},
            message: {type: String}

        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})










const model = new mongoose.model('User', DataSchema);


module.exports = model
