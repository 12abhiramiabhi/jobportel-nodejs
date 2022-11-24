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
    }

})
module.exports = mongoose.model('user', taskSchema);