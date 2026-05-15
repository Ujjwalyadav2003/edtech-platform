const express = require("express");
const router = express.Router();


const { auth } = require("../middlewares/auth"); // ✅ ADD THIS 


// controllers
const {
  updateProfile,
  deleteAccount,
  getUserDetails,
  getEnrolledCourses,
  updateDisplayPicture,
} = require("../controllers/profile");

// routes
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Profile route working ✅",
  });
});

router.put("/updateProfile", updateProfile);
router.delete("/deleteAccount", auth, deleteAccount);
router.get("/getUserDetails", getUserDetails);
router.get("/getEnrolledCourses", getEnrolledCourses);
router.put("/updateDisplayPicture", updateDisplayPicture);

module.exports = router;