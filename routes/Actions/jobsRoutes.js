const express = require("express");
const {
  addJobController,
} = require("../../component/Actions/JOBS/addJobController");
const {
  deleteJobController,
} = require("../../component/Actions/JOBS/deleteJobController");
const {
  editJobController,
} = require("../../component/Actions/JOBS/editJobController");
const {
  getJobController,
} = require("../../component/Actions/JOBS/getJobController");
const { getSignleJobController } = require("../../component/Actions/JOBS/getSignleJobController");

const jobRoutes = express.Router();

jobRoutes.post("/addJob", addJobController);

jobRoutes.post("/deleteJob", deleteJobController);

jobRoutes.post("/editJob", editJobController);

jobRoutes.get("/getJob", getJobController);

jobRoutes.get("/getSignleJob",getSignleJobController)

module.exports = { jobRoutes };
