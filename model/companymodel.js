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
    }

})
module.exports = mongoose.model('company', companySchema);