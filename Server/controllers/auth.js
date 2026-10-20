const User = require("../models/User");
const Otp = require("../models/Otp");
const Profile = require("../models/Profile");

const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");

require("dotenv").config();


// ================= SEND OTP =================
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists
    const userExists = await User.findOne({
      email: normalizedEmail,
    });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // Generate 6-digit OTP
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    // Ensure OTP is unique
    let existingOtp = await Otp.findOne({ otp });

    while (existingOtp) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits: true,
      });

      existingOtp = await Otp.findOne({ otp });
    }

    // Remove previous OTP for this email
    await Otp.deleteMany({
      email: normalizedEmail,
    });

    // Save new OTP
    await Otp.create({
      email: normalizedEmail,
      otp,
    });

    // Send OTP email using Brevo SMTP
    const emailResponse = await mailSender(
      normalizedEmail,
      "StudyNotion - Email Verification OTP",
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; color: #222;">
          <h2>Verify Your Email</h2>
          <p>Hi,</p>
          <p>Use the following OTP to verify your email address for StudyNotion:</p>

          <div style="background-color: #f4f4f4; padding: 18px; text-align: center; border-radius: 8px;">
            <h1 style="letter-spacing: 8px; margin: 0;">${otp}</h1>
          </div>

          <p>Please do not share this code with anyone.</p>
          <p>If you did not request this code, you can ignore this email.</p>

          <p>Regards,<br/>StudyNotion Team</p>
        </div>
      `
    );

    if (!emailResponse) {
      throw new Error("Email service did not confirm successful sending");
    }

    console.log("OTP email sent successfully");

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("SEND OTP ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error sending OTP",
    });
  }
};


// ================= SIGNUP =================
exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Verify the latest OTP for this email
    const recentOtp = await Otp.findOne({
      email: normalizedEmail,
    }).sort({ createdAt: -1 });

    if (!recentOtp || String(otp).trim() !== String(recentOtp.otp)) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Delete OTP after successful verification
    await Otp.deleteMany({
      email: normalizedEmail,
    });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create profile
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: contactNumber || null,
    });

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email: normalizedEmail,
      contactNumber,
      password: hashedPassword,
      accountType: accountType || "Student",
      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
        `${firstName} ${lastName}`
      )}`,
    });

    user.password = undefined;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};


// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await User.findOne({
      email: normalizedEmail,
    }).populate("additionalDetails");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered",
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    // Generate JWT
    const payload = {
      email: user.email,
      id: user._id,
      accountType: user.accountType,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Login successful",
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};


// ================= CHANGE PASSWORD =================
exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Old password and new password are required",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });

  } catch (error) {
    console.error("CHANGE PASSWORD ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error updating password",
    });
  }
};