
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

console.log("ENV CHECK:", {
  MONGODB_URL: !!process.env.MONGODB_URL,
  MAIL_USER: !!process.env.MAIL_USER,
  MAIL_PASS: !!process.env.MAIL_PASS,
});

console.log("MAIL_USER:", process.env.MAIL_USER || "MISSING");
console.log(
  "MAIL_PASS length:",
  process.env.MAIL_PASS
    ? process.env.MAIL_PASS.replace(/\s/g, "").length
    : 0
);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

require("./models/User");
require("./models/Category");
require("./models/Course");
require("./models/Section");
require("./models/SubSection");
require("./models/RatingAndReview");

console.log("REGISTERED MODELS:", mongoose.modelNames());

const PORT = process.env.PORT || 4000;

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const courseRoutes = require("./routes/course");
const paymentRoutes = require("./routes/payments");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

database.connect();

app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000",
        "https://edtech-platform-git-main-ujjwal-yadavs-projects-a3e651ac.vercel.app",
      ];

      const isProjectVercelDomain =
        origin &&
        /^https:\/\/edtech-platform(?:-[a-z0-9-]+)?\.vercel\.app$/.test(
          origin
        );

      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        isProjectVercelDomain
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinaryConnect();

// API routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

// Server health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
