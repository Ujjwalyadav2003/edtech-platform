const mongoose = require("mongoose");
const crypto = require("crypto");
const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { courseEnrollmentEmail } = require("../mail/templates/courseEnrollmentEmail");

// ==================== CAPTURE PAYMENT ====================
exports.capturePayment = async (req, res) => {
    try {
        const { course_Id } = req.body;
        const userId = req.user.id;

        if (!course_Id) {
            return res.status(400).json({
                success: false,
                message: "Course ID is required",
            });
        }

        const course = await Course.findById(course_Id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        if (
            course.studentsEnrolled.some(
                (studentId) => studentId.toString() === userId
            )
        ) {
            return res.status(400).json({
                success: false,
                message: "Student already enrolled",
            });
        }

        const options = {
            amount: course.price * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                courseId: course_Id,
                userId: userId,
            },
        };

        const paymentResponse = await instance.orders.create(options);

        return res.status(200).json({
            success: true,
            orderId: paymentResponse.id,
            amount: paymentResponse.amount,
            currency: paymentResponse.currency,
            courseName: course.courseName,
            thumbnail: course.thumbnail,
            message: "Order created successfully",
        });

    } catch (error) {
        console.error("Capture Payment Error:", error);
        return res.status(500).json({
            success: false,
            message: "Could not initiate payment",
        });
    }
};


// ==================== VERIFY SIGNATURE ====================
exports.verifySignature = async (req, res) => {
    try {
        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

        const signature = req.headers["x-razorpay-signature"];

        const shasum = crypto.createHmac("sha256", webhookSecret);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest("hex");

        if (signature === digest) {
            console.log("Payment is Authorised");

            const { courseId, userId } =
                req.body.payload.payment.entity.notes;

            // enroll student in course
            const enrolledCourse = await Course.findByIdAndUpdate(
                courseId,
                { $push: { studentsEnrolled: userId } },
                { new: true }
            );

            if (!enrolledCourse) {
                return res.status(404).json({
                    success: false,
                    message: "Course Not Found",
                });
            }

            // add course to user
            const enrolledStudent = await User.findByIdAndUpdate(
                userId,
                { $push: { courses: courseId } },
                { new: true }
            );

            // send email
            await mailSender(
                enrolledStudent.email,
                "Congratulations from UjjwalDEV",
                courseEnrollmentEmail(
                    enrolledStudent.firstName,
                    enrolledCourse.courseName,
                    `${process.env.FRONTEND_URL || "http://localhost:3000"}/dashboard`
                )
            );

            return res.status(200).json({
                success: true,
                message: "Signature verified and course added",
            });

        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid signature",
            });
        }

    } catch (error) {
        console.error("Signature Verification Error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};