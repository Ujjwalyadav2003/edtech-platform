console.log("Course routes loaded");

const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");

// CATEGORY CONTROLLER
const {
  createCategory,
  showAllCategories,
} = require("../controllers/Category");

// COURSE CONTROLLER
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
} = require("../controllers/Course");

// SECTION CONTROLLER
const { createSection } = require("../controllers/Section");

// ✅ ADD THIS (SubSection controller)
const { createSubSection } = require("../controllers/SubSection");

// ================= CATEGORY ROUTES =================
router.post("/createCategory", auth, createCategory);

// ================= COURSE ROUTES =================
router.post("/createCourse", auth, createCourse);
router.get("/getAllCourses", getAllCourses);
router.post("/getCourseDetails", getCourseDetails);

// ================= SECTION ROUTE =================
router.post("/createSection", auth, createSection);
console.log("createSection route registered");

// ================= SUBSECTION ROUTE (NEW) =================
router.post("/createSubSection", auth, createSubSection);
console.log("createSubSection route registered");

// ================= CATEGORY FETCH =================
console.log("showAllCategories =>", showAllCategories);
router.get("/showAllCategories", showAllCategories);

module.exports = router;