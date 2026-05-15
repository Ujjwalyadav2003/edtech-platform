const Section = require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");

// ===================== CREATE SECTION =====================
exports.createSection = async (req, res) => {
    try {
        const { sectionName, courseId } = req.body;

        // validation
        if (!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // check if course exists
        const courseDetails = await Course.findById(courseId);
        if (!courseDetails) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        // create section
        const newSection = await Section.create({
            sectionName,
        });

        // update course
        const updatedCourseDetails = await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    courseContent: newSection._id,
                },
            },
            { new: true }
        )
            .populate({
                path: "courseContent",
                populate: {
                    path: "subSection",
                },
            })
            .exec();

        return res.status(200).json({
            success: true,
            message: "Section created successfully",
            data: updatedCourseDetails,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to create section",
            error: error.message,
        });
    }
};

// ===================== UPDATE SECTION =====================
exports.updateSection = async (req, res) => {
    try {
        const { sectionName, sectionId } = req.body;

        if (!sectionId || !sectionName) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const updatedSection = await Section.findByIdAndUpdate(
            sectionId,
            { sectionName },
            { new: true }
        );

        if (!updatedSection) {
            return res.status(404).json({
                success: false,
                message: "Section not found",
            });
        }

        const course = await Course.findOne({
            courseContent: sectionId,
        })
            .populate({
                path: "courseContent",
                populate: {
                    path: "subSection",
                },
            })
            .exec();

        return res.status(200).json({
            success: true,
            message: "Section updated successfully",
            data: course || updatedSection,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to update section",
            error: error.message,
        });
    }
};

// ===================== DELETE SECTION =====================
exports.deleteSection = async (req, res) => {
    try {
        const { sectionId } = req.params;

        if (!sectionId) {
            return res.status(400).json({
                success: false,
                message: "Section ID is required",
            });
        }

        // check if section exists
        const section = await Section.findById(sectionId);
        if (!section) {
            return res.status(404).json({
                success: false,
                message: "Section not found",
            });
        }

        // delete all subsections inside this section (important)
        await SubSection.deleteMany({ _id: { $in: section.subSection } });

        // remove section from course
        await Course.findOneAndUpdate(
            { courseContent: sectionId },
            {
                $pull: {
                    courseContent: sectionId,
                },
            }
        );

        // delete section
        await Section.findByIdAndDelete(sectionId);

        return res.status(200).json({
            success: true,
            message: "Section deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to delete section",
            error: error.message,
        });
    }
};