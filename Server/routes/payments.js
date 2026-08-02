const express = require("express");
const router = express.Router();

// controllers
const {
    capturePayment,
    verifySignature,
} = require("../controllers/Payments");

// middleware
const { auth, isStudent } = require("../middlewares/auth");


// ==================== PAYMENT ROUTES ====================

// create order (only logged-in student)
router.post("/capturePayment", auth, isStudent, capturePayment);

// webhook / signature verification (Razorpay calls this)
router.post("/verifySignature", verifySignature);


// ==================== EXPORT ====================
module.exports = router;