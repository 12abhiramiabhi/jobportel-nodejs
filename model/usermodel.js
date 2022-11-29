const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    name: {
        maxLength: 50,
        require: true,
        type: String,
    },
    email: {
        maxLength: 50,
        require: true,
        type: String,
        unique: true
    },
    password: {
        maxLength: 200,
        require: true,
        type: String,

    },
    phoneNumber: {
        maxLength: 50,
        require: true,
        type: Number,
    },
    resume: {
        maxLength: 50,
        require: true,
        type: Number,
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
    file: {

        type: String,
        maxlength: 40,
    }

})
module.exports = mongoose.model('user', taskSchema);