const { jobModel } = require("../../../model/Actions/JOBS/JobsModel");

const deleteJobController = (req, res) => {
  const { jobIndex } = req.body;

 if (jobIndex) {
  jobModel.findOneAndDelete({ _id: jobIndex }, (err, result) => {
    if (err) {
      res.send({ message: "Internal server error", status: false });
    } else {
      res.send({ message: "Job deleted!", status: true });
    }
  });
 }else{
  res.send({message:"Forbidined"})
 }
};

module.exports = { deleteJobController };
