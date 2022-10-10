const { coursesModel } = require("../../../model/Actions/COURSES/courseModel")


const deleteCourseController=(req,res)=>{
    console.log(req.body)

    coursesModel.findOneAndDelete({ id: id }, (err, result) => {
        if (err) {
          res.send({ message: "Internal server error", status: false });
        } else {
          res.send({ message: "Courses deleted!", status: true });
        }
      });
  }
  
  module.exports={deleteCourseController}