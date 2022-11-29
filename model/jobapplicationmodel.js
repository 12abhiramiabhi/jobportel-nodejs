const mongoose = require("mongoose")
const jobApplicationSchema = mongoose.Schema({
    userName: {
        require: true,
        type: String,
        maxlength: 40,
    },
    userEmail: {
        type: String,
        maxlength: 40,
    },
    userPhone: {
        require: true,
        type: String,
        maxlength: 50
    },
    userAddress: {
        require: true,
        type: String,
        maxlength: 40,
    },
    companyId: {
        type: String,
        maxLength: 50,
        require: true,
    },
    companyName: {
        type: String,
        maxLength: 50,
        require: true,
    },
    status: {
        type: String,
        default: "applied"
    },
    experience: {
        type: String,
        maxLength: 50,
    },
    jobTitle: {
        type: String,
        maxLength: 50,
    },
    jobId: {
        type: String,
        maxLength: 50,
    }
})
module.exports = mongoose.model("jobapplication", jobApplicationSchema)