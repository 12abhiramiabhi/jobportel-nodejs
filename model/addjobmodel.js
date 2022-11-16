const mongoose = require("mongoose")
const jobSchema = mongoose.Schema({
    name: {
        maxLength: 25,
        require: true,
        type: String,
    },
    jobDiscription: {
        maxLength: 250,
        require: true,
        type: String,

    },
    salary: {
        maxLength: 200,
        require: true,
        type: Number,

    },
    experience: {
        maxLength: 500,
        require: true,
        type: String,
    },
    vacancies: {
        maxLength: 500,
        require: true,
        type: String,
    },
    companyName: {
        maxLength: 60,
        type: String,
        require: true,
    },
    companyId: {
        maxLength: 60,
        type: String,
        require: true,
    },
    status: {
        maxLength: 70,
        type: String,
        require: true,
        default: "open"
    },
    jobPostedDate: {
        maxLength: 70,
        type: String,
        require: true
    },
    LastApplyDate: {
        maxLength: 20,
        require: true,
        type: Date,
    }
})
module.exports = mongoose.model("job", jobSchema)