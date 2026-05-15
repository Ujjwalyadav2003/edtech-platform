const mongoose = require("mongoose");

// define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

// export the category model
module.exports = mongoose.model("Category", categorySchema);