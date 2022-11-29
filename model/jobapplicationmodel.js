const mongoose = require("mongoose")
const jobApplicationSchema = mongoose.Schema({
    userName: {
        required: true,
        type: String,
        maxlength: 40,
    },
    userEmail: {
        type: String,
        maxlength: 40,
    },
    userPhone: {
        required: true,
        type: String,
        maxlength: 50
    },
    userAddress: {
        required: true,
        type: String,
        maxlength: 40,
    },
    companyId: {
        type: String,
        maxLength: 50,
        required: true,
    },
    companyName: {
        type: String,
        maxLength: 50,
        required: true,
    },
    status: {
        type: String,
        default: "applied",
        required: true,
    },
    experience: {
        type: String,
        maxLength: 50,
        required: true,
    },
    jobTitle: {
        type: String,
        maxLength: 50,
        required: true,
    },
    jobId: {
        type: String,
        maxLength: 50,
        required: true,
    }
})
module.exports = mongoose.model("jobapplication", jobApplicationSchema)