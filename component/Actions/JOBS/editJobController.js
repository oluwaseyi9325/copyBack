const { jobModel } = require("../../../model/Actions/JOBS/JobsModel");

const editJobController = (req, res) => {
  console.log(req.body);
  const {
    job_company,
          job_title,
          job_location,
          job_desc,
          min_salary,
          max_salary,
          job_company_about,
          job_type,
          role_level,
          role_type,
          deleteId
  } = req.body;

  jobModel.findOneAndUpdate(
    { _id: deleteId },
    {
      job_company,
          job_title,
          job_location,
          job_desc,
          min_salary,
          max_salary,
          job_company_about,
          job_type,
          role_level,
          role_type,
    },
    (err, result) => {
      if (err) {
        res.send({ message: "Internal server error", status: false });
      } else {
        res.send({ message: "Job edited!", status: true });
      }
    }
  );
};

module.exports = { editJobController };
