const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            trim: true,
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Tag", tagSchema);