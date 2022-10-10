const { jobModel } = require("../../../model/Actions/JOBS/JobsModel");

const addJobController = (req, res) => {
// console.log(req.body)
//  const {job_company,job_title,job_location,job_desc,job_salary,job_company_about,job_type,role_level,role_type} =req.body
  const jobDetails = new jobModel(req.body);
  jobDetails.save((err, result) => {
    if (err) {
      res.send({ message: "Internal server error!!!", status: false });
    } else {
      res.send({ message: "Job added successful", status: true });
    }
  });
};

module.exports = { addJobController };
