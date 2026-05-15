const express = require("express");
const router = express.Router();

// controllers
const authController = require("../controllers/Auth");
const resetController = require("../controllers/ResetPassword");

// middleware
const { auth } = require("../middlewares/auth");

// AUTH ROUTES
router.post("/sendOTP", authController.sendOtp);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/changePassword", auth, authController.changePassword);

// RESET PASSWORD
router.post("/reset-password-token", resetController.resetPasswordToken);
router.post("/reset-password", resetController.resetPassword);

module.exports = router;