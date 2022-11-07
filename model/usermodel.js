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
module.exports = mongoose.model('user', taskSchema);