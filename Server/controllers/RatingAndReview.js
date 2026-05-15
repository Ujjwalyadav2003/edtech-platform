const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// ==================== CREATE RATING ====================
exports.createRating = async (req, res) => {
    try {
        const { rating, review, courseId } = req.body;
        const userId = req.user.id;

        // validation
        if (!rating || !courseId) {
            return res.status(400).json({
                success: false,
                message: "Rating and CourseId are required",
            });
        }

        // check if user enrolled in course
        const courseDetails = await Course.findOne({
            _id: courseId,
            studentsEnrolled: { $elemMatch: { $eq: userId } },
        });

        if (!courseDetails) {
            return res.status(403).json({
                success: false,
                message: "Student is not enrolled in this course",
            });
        }

        // check if already reviewed
        const alreadyReviewed = await RatingAndReview.findOne({
            user: userId,
            course: courseId,
        });

        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "Course already reviewed",
            });
        }

        // create rating
        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            user: userId,
            course: courseId,
        });

        // add rating to course
        await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    ratingAndReviews: ratingReview._id,
                },
            },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Rating added successfully",
            data: ratingReview,
        });

    } catch (error) {
        console.error("Create Rating Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create rating",
        });
    }
};

// ==================== GET AVERAGE RATING ====================
exports.getAverageRating = async (req, res) => {
    try {
        const { courseId } = req.body;

        const result = await RatingAndReview.aggregate([
            {
                $match: { course: courseId },
            },
            {
                $group: {
                    _id: "$course",
                    averageRating: { $avg: "$rating" },
                },
            },
        ]);

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            });
        }

        return res.status(200).json({
            success: true,
            averageRating: 0,
            message: "No ratings found",
        });

    } catch (error) {
        console.error("Average Rating Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch average rating",
        });
    }
};


// ==================== GET ALL RATINGS ====================
exports.getAllRating = async (req, res) => {
    try {
        const allReviews = await RatingAndReview.find({})
            .populate("user", "firstName lastName email image")
            .populate("course", "courseName")
            .sort({ rating: -1 })
            .exec();

        return res.status(200).json({
            success: true,
            message: "All ratings fetched successfully",
            data: allReviews,
        });

    } catch (error) {
        console.error("Get All Rating Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch ratings",
        });
    }
};