const mongoose = require('mongoose');
const validator = require('validator')

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name field is required'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'please provide correct email address'],
        trim: true,
        lowercase: true
    },
    address: {
        type: String,
        required: [true, 'address field is required'],
        trim: true,
        lowercase: true
    },
    password:{
    type: String,
    required: [true, 'Password Is Required']
}
}, { timestamps: true });

module.exports = mongoose.model('Person', personSchema)