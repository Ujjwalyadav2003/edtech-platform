console.log("ENV TEST =>", process.env.MONGODB_URL);

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

// ✅ LOAD MODELS HERE
require("./models/User");
require("./models/Category");
require("./models/Course");
require("./models/Section");
require("./models/SubSection");
require("./models/RatingAndReview");

const mongoose = require("mongoose");

console.log("REGISTERED MODELS:", mongoose.modelNames());

const PORT = process.env.PORT || 4000;

// routes
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const courseRoutes = require("./routes/course");
const paymentRoutes = require("./routes/payments");

// configs
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// middlewares
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// DB
database.connect();

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// cloudinary
cloudinaryConnect();

// routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

// default
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running 🚀",
  });
});

// server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});