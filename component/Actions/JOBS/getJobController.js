const { jobModel } = require("../../../model/Actions/JOBS/JobsModel");

const getJobController = (req, res) => {
  jobModel.find((err, result) => {
    if (err) {
      res.send({ message: "Internal server error", status: false });
    } else {
      if (!result) {
        res.send({ message: "Job is not available", status: false });
      } else {
        res.send({ message: "Showing jobs", status: true, result });
      }
    }
  });
};

module.exports = { getJobController };
