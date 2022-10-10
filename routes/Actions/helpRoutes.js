const express = require("express");
const {
  addHelpController,
} = require("../../component/Actions/HELP/addHelpController");
const {
  deleteHelpController,
} = require("../../component/Actions/HELP/deleteHelpController");
const {
  editHelpController,
} = require("../../component/Actions/HELP/editHelpController");
const {
  getHelpController,
} = require("../../component/Actions/HELP/getHelpController");

const helpRoutes = express.Router();

helpRoutes.post("/addHelp", addHelpController);

helpRoutes.post("/editHelp", editHelpController);

helpRoutes.post("/deleteHelp", deleteHelpController);

helpRoutes.get("/getHelp", getHelpController);

module.exports = { helpRoutes };
