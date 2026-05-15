const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300, // 5 min
    },
});

// 🔥 function to send email
async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(
            email,
            "Verification Email from UjjwalDev",
            `<h2>Your OTP is: ${otp}</h2>`
        );
        console.log("Email sent successfully:", mailResponse);
    } catch (error) {
        console.log("Error occurred while sending mail:", error);
        throw error;
    }
}

// ✅ FIXED PRE-SAVE HOOK (NO next, PURE ASYNC)
otpSchema.pre("save", async function () {
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp);
    }
});

module.exports = mongoose.model("Otp", otpSchema);