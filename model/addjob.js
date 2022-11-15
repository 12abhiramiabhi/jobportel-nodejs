const mongoose = require("mongoose")
const jobSchema = mongoose.Schema({
    name: {
        maxLength: 25,
        require: true,
        type: String,
    },
    jobdiscription: {
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
    vacancies:{
        maxLength:500,
        require:true,
        type:Number,
    },
    Experience:{
        maxLength:500,
        require:true,
        type:String,
    },
    Last_apply_date:{
        maxLength:20,
        require:true,
        type:Date,
    }
})
module.exports =mongoose.model("addjob",jobSchema)