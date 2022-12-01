const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    name: {
        maxLength: 50,
        required: true,
        type: String,
    },
    email: {
        maxLength: 50,
        required: true,
        type: String,
        unique: true
    },
    password: {
        maxLength: 200,
        required: true,
        type: String,

    },
    phoneNumber: {
        maxLength: 50,
        required: true,
        type: Number,
    },

    resume: {
        maxLength: 50,
        type: String,
    },
    address: {

        type: String,
        maxlength: 40,
    },
    experience: {

        type: String,
        maxlength: 40,

    },
    skills: {

        type: String,
        maxlength: 40,

    },


    address: {
        maxLength: 50,
        type: String,
    },
    experience: {
        maxLength: 50,
        type: String,

    },
    skills: {
        maxLength: 50,
        type: String,

    },


})
module.exports = mongoose.model('user', taskSchema);