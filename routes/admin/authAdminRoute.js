const express = require("express");
const { adminForgetPwsControl } = require("../../component/admin/adminFogetPwsControl");
const { adminSignInControl } = require("../../component/admin/adminSignInController");
const { adminSignUpControl } = require("../../component/admin/adminUpController");
const authAdminRoute=express.Router();


authAdminRoute.post("/signup",adminSignUpControl);

authAdminRoute.post("/signin",adminSignInControl)

authAdminRoute.post('/forgetPassword',adminForgetPwsControl)


module.exports={authAdminRoute}