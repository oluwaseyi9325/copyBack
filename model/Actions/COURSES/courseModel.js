const mongoose = require("mongoose");


const coursesSchema=mongoose.Schema({
     course_title:{type:String,required:true},
     course_desc:{type:String,required:true},
     course_price:{type:String,required:true},
     course_thumb:{type:String,required:true},
     course_level:{type:String,required:true},
     course_language:{type:String,required:true},
     module_details:[{}],
     instructor_name:{type:String,required:true},
     instructor_position:{type:String,required:true},
     instructor_summary:{type:String,required:true},
     instructor_pic:{type:String,required:true}


})

const coursesModel= mongoose.model("courses_model",coursesSchema)

module.exports={coursesModel}