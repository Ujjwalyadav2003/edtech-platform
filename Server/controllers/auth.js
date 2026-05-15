const User = require("../models/User");
const Otp = require("../models/Otp");
const Profile = require("../models/Profile");

const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let existingOtp = await Otp.findOne({ otp });

    while (existingOtp) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      existingOtp = await Otp.findOne({ otp });
    }

    await Otp.create({ email, otp });

    console.log("OTP 👉", otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.log("SEND OTP ERROR 👉", error);
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

    if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const recentOtp = await Otp.findOne({ email }).sort({ createdAt: -1 });

    if (!recentOtp || otp !== recentOtp.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await Otp.deleteMany({ email });

    const hashedPassword = await bcrypt.hash(password, 10);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    // 🔥 IMPORTANT FIX
    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,

      // ✅ default Student, but allow Admin if passed
      accountType: accountType || "Student",

      additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    user.password = undefined;

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    console.log("SIGNUP ERROR 👉", error);
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

    // validation
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // find user
    const user = await User.findOne({ email }).populate("additionalDetails");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered",
      });
    }

    // password match
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    // token
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
    console.log("LOGIN ERROR 👉", error);
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

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });

  } catch (error) {
    console.log("CHANGE PASSWORD ERROR 👉", error);
    return res.status(500).json({
      success: false,
      message: "Error updating password",
    });
  }
};