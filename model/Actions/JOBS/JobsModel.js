const mongoose = require("mongoose");


const jobSchema=mongoose.Schema({
    job_company: { type: String },
    job_title: { type: String },
    job_location: { type: String },
    job_desc: { type: String },
    min_salary: { type: String },
    max_salary: { type: String },
    job_company_about: { type: String },
    job_type: { type: String },
    role_level: { type: String },
    role_type: { type: String },
})

const jobModel= mongoose.model("jobs_model",jobSchema)

module.exports={jobModel}