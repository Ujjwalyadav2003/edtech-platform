const User = require("../models/User");

// ================= UPDATE PROFILE =================
exports.updateProfile = async (req, res) => {
    try {
        const { userId, name, about, dob } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required",
            });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { name, about, dob },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Profile updated",
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating profile",
            error: error.message,
        });
    }
};

// ================= DELETE ACCOUNT =================
exports.deleteAccount = async (req, res) => {
    try {

        console.log("REQ.USER =>", req.user);  // ✅ ADD

        const userId = req.user.id;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required",
            });
        }

        await User.findByIdAndDelete(userId);

        res.status(200).json({
            success: true,
            message: "Account deleted",
        });
    } catch (error) {
        console.log("DELETE ERROR =>", error.message); // ✅ ADD
        res.status(500).json({
            success: false,
            message: "Error deleting account",
            error: error.message,
        });
    }
};

// ================= GET USER DETAILS =================
exports.getUserDetails = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required",
            });
        }

        const user = await User.findById(userId);

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching user",
            error: error.message,
        });
    }
};

// ================= ENROLLED COURSES =================
exports.getEnrolledCourses = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Dummy enrolled courses",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error",
        });
    }
};

// ================= UPDATE DISPLAY PICTURE =================
exports.updateDisplayPicture = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required",
            });
        }

        if (!req.files || !req.files.displayPicture) {
            return res.status(400).json({
                success: false,
                message: "Display picture is required",
            });
        }

        const displayPicture = req.files.displayPicture;

        const imageUrl = `uploaded/${displayPicture.name}`;

        const user = await User.findByIdAndUpdate(
            userId,
            { image: imageUrl },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Display picture updated successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating display picture",
            error: error.message,
        });
    }
};