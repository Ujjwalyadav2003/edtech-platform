const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// ===================== CREATE SUBSECTION =====================
exports.createSubSection = async (req, res) => {
    try {
        const { sectionId, title, timeDuration, description } = req.body;

        const video = req.files?.videoFile;

        // validation
        if (!sectionId || !title || !description || !timeDuration || !video) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // check section
        const sectionDetails = await Section.findById(sectionId);
        if (!sectionDetails) {
            return res.status(404).json({
                success: false,
                message: "Section not found",
            });
        }

        // upload video
        const uploadDetails = await uploadImageToCloudinary(
            video,
            process.env.FOLDER_NAME
        );

        // create subsection
        const newSubSection = await SubSection.create({
            title,
            description,
            videoUrl: uploadDetails.secure_url,
            timeDuration: uploadDetails.duration || timeDuration,
        });

        // push into section
        const updatedSection = await Section.findByIdAndUpdate(
            sectionId,
            {
                $push: {
                    subSection: newSubSection._id,
                },
            },
            { new: true }
        ).populate("subSection");

        return res.status(200).json({
            success: true,
            message: "SubSection created successfully",
            data: updatedSection,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to create subsection",
            error: error.message,
        });
    }
};


// ===================== UPDATE SUBSECTION =====================
exports.updateSubSection = async (req, res) => {
    try {
        const { subSectionId, title, description, timeDuration } = req.body;

        const video = req.files?.videoFile;

        if (!subSectionId) {
            return res.status(400).json({
                success: false,
                message: "SubSection ID is required",
            });
        }

        let subSection = await SubSection.findById(subSectionId);

        if (!subSection) {
            return res.status(404).json({
                success: false,
                message: "SubSection not found",
            });
        }

        // update fields
        if (title) subSection.title = title;
        if (description) subSection.description = description;
        if (timeDuration) subSection.timeDuration = timeDuration;

        // update video if provided
        if (video) {
            const uploadDetails = await uploadImageToCloudinary(
                video,
                process.env.FOLDER_NAME
            );

            subSection.videoUrl = uploadDetails.secure_url;
            subSection.timeDuration = uploadDetails.duration || timeDuration;
        }

        await subSection.save();

        return res.status(200).json({
            success: true,
            message: "SubSection updated successfully",
            data: subSection,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to update subsection",
            error: error.message,
        });
    }
};


// ===================== DELETE SUBSECTION =====================
exports.deleteSubSection = async (req, res) => {
    try {
        const { subSectionId, sectionId } = req.params;

        if (!subSectionId || !sectionId) {
            return res.status(400).json({
                success: false,
                message: "SubSection ID and Section ID are required",
            });
        }

        // check existence
        const subSection = await SubSection.findById(subSectionId);
        if (!subSection) {
            return res.status(404).json({
                success: false,
                message: "SubSection not found",
            });
        }

        // remove from section
        await Section.findByIdAndUpdate(
            sectionId,
            {
                $pull: {
                    subSection: subSectionId,
                },
            }
        );

        // delete subsection
        await SubSection.findByIdAndDelete(subSectionId);

        return res.status(200).json({
            success: true,
            message: "SubSection deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to delete subsection",
            error: error.message,
        });
    }
};