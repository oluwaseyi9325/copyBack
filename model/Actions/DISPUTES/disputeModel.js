const mongoose = require("mongoose");


const DisputeSchema=mongoose.Schema({
    full_name: { type: String },
    email: { type: String },
    phone_no: { type: String },
    title: { type: String },
    message: { type: String },
})

const DisputeModel= mongoose.model("Dispute_model",DisputeSchema)

module.exports={DisputeModel}