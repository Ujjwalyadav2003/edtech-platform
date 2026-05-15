const Tag = require("../models/tags");

// create tag
exports.createTag = async (req, res) => {
    try {
        const { name, description } = req.body;

        // validation
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "All Fields Are Required",
            });
        }

        // create entry in DB
        const tagDetails = await Tag.create({
            name,
            description,
        });

        console.log(tagDetails);

        return res.status(200).json({
            success: true,
            message: "Tag Created Successfully",
            data: tagDetails, // 👍 better to send data
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// Get All Tags
exports.showAlltags = async (req, res) => {
    try {
        const allTags = await Tag.find({}, { name: true, description: true });

        return res.status(200).json({
            success: true,
            message: "All Tags Returned Successfully",
            data: allTags,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};