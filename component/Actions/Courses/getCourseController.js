const { coursesModel } = require("../../../model/Actions/COURSES/courseModel")


const getCourseController=(req,res)=>{
    console.log(req.body)

    coursesModel.find((err, result) => {
        if (err) {
          res.send({ message: "Internal server error", status: false });
        } else {
          if (!result) {
            res.send({ message: "Course is not available", status: false });
          } else {
            res.send({ message: "Showing Courses resources", status: true, result });
          }
        }
      });
  }
  
  module.exports={getCourseController}