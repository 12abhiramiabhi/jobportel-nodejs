const mongoose = require("mongoose")
const jobSchema = mongoose.Schema({
    name: {
        maxLength: 25,
        required: true,
        type: String,
    },
    jobDiscription: {
        maxLength: 250,
        required: true,
        type: String,

    },
    salary: {
        maxLength: 200,
        required: true,
        type: Number,

    },
    experience: {
        maxLength: 500,
        required: true,
        type: String,
    },
    vacancies: {
        maxLength: 500,
        required: true,
        type: String,
    },
    companyName: {
        maxLength: 60,
        type: String,
        required: true,
    },
    companyId: {
        maxLength: 60,
        type: String,
        required: true,
    },
    status: {
        maxLength: 70,
        type: String,
        required: true,
        default: "open"
    },
    jobPostedDate: {
        maxLength: 70,
        type: String,
        required: true
    },
    LastApplyDate: {
        maxLength: 20,
        required: true,
        type: Date,
    }
})
module.exports = mongoose.model("job", jobSchema)