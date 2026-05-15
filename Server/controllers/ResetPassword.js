const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const crypto = require("crypto");
const bcrypt = require("bcrypt");


// ================= RESET PASSWORD TOKEN =================
exports.resetPasswordToken = async (req, res) => {
    try {
        const { email } = req.body;

        // validation
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        // check user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // 🔥 generate token
        const token = crypto.randomBytes(20).toString("hex");

        // 🔥 save token + expiry
        user.token = token;
        user.resetPasswordExpires = Date.now() + 5 * 60 * 1000;
        await user.save();

        // 🔥 create reset URL
        const url = `http://localhost:3000/update-password/${token}`;

        console.log("🔗 RESET LINK 👉", url);

        // 🔥 SEND MAIL
        console.log("📧 Sending reset email...");

        const mailResponse = await mailSender(
            email,
            "Password Reset Link",
            `<p>Click below link to reset your password:</p>
             <a href="${url}">${url}</a>`
        );

        console.log("✅ MAIL RESPONSE 👉", mailResponse);

        return res.status(200).json({
            success: true,
            message: "Reset link sent to email",
        });

    } catch (error) {
        console.log("❌ RESET TOKEN ERROR 👉", error);

        return res.status(500).json({
            success: false,
            message: "Error generating reset token",
        });
    }
};



// ================= RESET PASSWORD =================
exports.resetPassword = async (req, res) => {
    try {
        const { password, confirmPassword, token } = req.body;

        // validation
        if (!password || !confirmPassword || !token) {
            return res.status(400).json({
                success: false,
                message: "All fields required",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        // 🔥 find user
        const user = await User.findOne({
            token: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Token is invalid or expired",
            });
        }

        // 🔥 hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 🔥 update
        user.password = hashedPassword;
        user.token = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successful",
        });

    } catch (error) {
        console.log("❌ RESET PASSWORD ERROR 👉", error);

        return res.status(500).json({
            success: false,
            message: "Reset failed",
        });
    }
};