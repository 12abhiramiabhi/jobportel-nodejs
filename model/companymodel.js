const mongoose = require("mongoose")
const companySchema = mongoose.Schema({
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
    companytype: {
        type: String,
        maxLength: 50,
    },
    image: {
        type: String,
        maxLength: 50
    },
    Discription: {
        type: String,
        maxLength: 50,
    },
    location: {
        type: String,
        maxLength: 50
    },
    country: {
        type: String,
        maxLength: 50,
    }


})
module.exports = mongoose.model('company', companySchema);