const mongoose = require("mongoose")
const companySchema = mongoose.Schema({
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
    companytype: {
        type: String,
        maxLength: 50,
        required: true,
    },
    image: {
        type: String,
        maxLength: 50
    },
    Discription: {
        type: String,
        maxLength: 50,
        required: true,
    },
    location: {
        type: String,
        maxLength: 50,
        required: true,
    },
    country: {
        type: String,
        maxLength: 50,
        required: true,
    },
    profileUpdated:{
        type:Boolean,
        default:false,
        required: true,
    }


})
module.exports = mongoose.model('company', companySchema);