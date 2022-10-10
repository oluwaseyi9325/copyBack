const mongoose = require("mongoose");


const helpSchema=mongoose.Schema({
    help_title: { type: String },
    help_desc: { type: String },
    help_video_url: { type: String },
    video_public_id:{type:String}
})

const helpModel= mongoose.model("helps_model",helpSchema)

module.exports={helpModel}