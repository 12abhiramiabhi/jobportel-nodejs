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
        require: true,
        type: Number,
    },

    resume: {
        maxLength: 50,
        require: true,
        type: String,
    },
    address: {

        type: String,
        maxlength: 40,
        required: true,
    },
    experience: {

        type: String,
        maxlength: 40,
        required: true,
    },
    skills: {

        type: String,
        maxlength: 40,
        required: true,
    },
    file: {

        type: String,
        maxlength: 40,
        required: true,
    } ,
    resume:{
        maxLength:50,
        type:String,
        required: true,
    },
    address:{
        maxLength:50,
        type:String,
        required: true,
    },
    experience:{
        maxLength:50,
        type:String,
        required: true,
    },
    skills:{
        maxLength:50,
        type:String,
        required: true,
    },
    image:{
        type: String,
        maxLength: 50,
        required: true,
    },

})
module.exports = mongoose.model('user', taskSchema);