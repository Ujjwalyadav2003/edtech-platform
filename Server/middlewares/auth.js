const jwt = require("jsonwebtoken");
require("dotenv").config();


// ================= AUTH =================
exports.auth = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        const token =
            req.cookies.token ||
            req.body.token ||
            (authHeader && authHeader.replace("Bearer ", ""));

        console.log("AUTH HEADER =>", authHeader);   // ✅ ADD
        console.log("TOKEN =>", token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing",
            });
        }
        //verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }
        //verification issue
        catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            });
        }

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating token",
        });
    }
};


// ================= IS STUDENT =================
exports.isStudent = (req, res, next) => {
    if (req.user.accountType !== "Student") {
        return res.status(403).json({
            success: false,
            message: "Students only route",
        });
    }
    next();
};


// ================= IS INSTRUCTOR =================
exports.isInstructor = (req, res, next) => {
    if (req.user.accountType !== "Instructor") {
        return res.status(403).json({
            success: false,
            message: "Instructors only route",
        });
    }
    next();
};


// ================= IS ADMIN =================
exports.isAdmin = (req, res, next) => {
    if (req.user.accountType !== "Admin") {
        return res.status(403).json({
            success: false,
            message: "Admins only route",
        });
    }
    next();
};