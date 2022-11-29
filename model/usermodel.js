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
<<<<<<< HEAD
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
=======
    resume:{
        maxLength:50,
        type:String,
    },
    address:{
        maxLength:50,
        type:String
    },
    experience:{
        maxLength:50,
        type:String
    },
    skills:{
        maxLength:50,
        type:String,
    },
    image:{
        type: String,
        maxLength: 50
>>>>>>> f5284b64c4695143d2c292b0cb03b37bf27c052b
    }

})
module.exports = mongoose.model('user', taskSchema);