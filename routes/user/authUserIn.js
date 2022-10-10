const express = require("express");
const {
  getSignleUserController,
} = require("../../component/Actions/getSignleUserController");
const {
  manageUserController,
} = require("../../component/Actions/manageUserController");
const {
  addSummaryController,
} = require("../../component/user/addSummaryController");
const { jwtController } = require("../../component/user/authToken");
const {
  editLoginController,
} = require("../../component/user/editLoginController");
const {
  editNamesController,
} = require("../../component/user/editNameController");
const { forgetPassword } = require("../../component/user/forgetPassword");
const { jwtUser } = require("../../component/user/jwt");
const { userLoginController } = require("../../component/user/login");
const {
  portfolioLinkController,
} = require("../../component/user/portfolioLinks");
const { signupController } = require("../../component/user/signup");
const authUser = express.Router();

authUser.get("/jwt", jwtUser);

authUser.post("/signin", userLoginController);

authUser.get("/token", jwtController);

authUser.post("/signup", signupController);

authUser.post("/editNames", editNamesController);

authUser.post("/addSummary", addSummaryController);

authUser.post("/portfolioLink", portfolioLinkController);

authUser.post("/forgetPassword", forgetPassword);

authUser.post("/editLoginDetails", editLoginController);

authUser.get("/manageUser", manageUserController);

authUser.get("/getSignleUser", getSignleUserController);

module.exports = { authUser };
