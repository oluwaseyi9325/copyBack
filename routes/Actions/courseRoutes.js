const express = require("express");
const {
  addCourseController,
} = require("../../component/Actions/Courses/addCoueseController");
const {
  deleteCourseController,
} = require("../../component/Actions/Courses/deleteCoursesControllers");
const {
  editCourseController,
} = require("../../component/Actions/Courses/editCoursesController");
const {
  getCourseController,
} = require("../../component/Actions/Courses/getCourseController");

const courseRoutes = express.Router();

courseRoutes.post("/addCourse", addCourseController);

courseRoutes.post("/deleteCourse", deleteCourseController);

courseRoutes.post("/editCourse", editCourseController);

courseRoutes.post("/getCourse", getCourseController);

module.exports = { courseRoutes };
