const express = require("express");
const { model } = require("mongoose");
const {
  addDisputeController,
} = require("../../component/Actions/Disputes/addDisputes");
const {
  deleteDisputesController,
} = require("../../component/Actions/Disputes/deleteDisputesController");
const {
  getDisputeController,
} = require("../../component/Actions/Disputes/getDisputes");

const disputesRoute = express.Router();

disputesRoute.post("/addDispute", addDisputeController);

disputesRoute.get("/getDispute", getDisputeController);

disputesRoute.post("/deleteDispute", deleteDisputesController);

module.exports = { disputesRoute };
