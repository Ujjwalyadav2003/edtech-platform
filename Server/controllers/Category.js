const Category = require("../models/Category");

// ==================== CREATE CATEGORY ====================
exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        // validation
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "Name and description are required",
            });
        }

        // check duplicate
        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category already exists",
            });
        }

        // create category
        const category = await Category.create({
            name,
            description,
        });

        return res.status(200).json({
            success: true,
            message: "Category created successfully",
            data: category,
        });

    } catch (error) {
        console.error("CREATE CATEGORY ERROR 👉", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create category",
        });
    }
};


// ==================== GET ALL CATEGORIES ====================
// ==================== GET ALL CATEGORIES ====================
exports.showAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find({}, { name: true, description: true });

        return res.status(200).json({
            success: true,
            message: "All categories fetched successfully",
            data: allCategories,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching categories",
        });
    }
};

// ==================== CATEGORY PAGE DETAILS ====================
exports.categoryPageDetails = async (req, res) => {
    try {
        const { categoryId } = req.body;

        if (!categoryId) {
            return res.status(400).json({
                success: false,
                message: "CategoryId is required",
            });
        }

        const selectedCategory = await Category.findById(categoryId)
            .populate("courses")
            .exec();

        if (!selectedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }

        const differentCategories = await Category.find({
            _id: { $ne: categoryId },
        }).limit(3);

        return res.status(200).json({
            success: true,
            message: "Category page details fetched",
            data: {
                selectedCategory,
                differentCategories,
            },
        });

    } catch (error) {
        console.error("CATEGORY PAGE ERROR 👉", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch category page details",
        });
    }
};