const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // TLS
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },

            // 🔥 THIS IS THE FIX
            tls: {
                rejectUnauthorized: false,
            },
        });

        console.log("📧 Sending mail to:", email);

        const info = await transporter.sendMail({
            from: `"UjjwalDev" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
        });

        console.log("✅ Email sent:", info.response);

        return info;

    } catch (error) {
        console.log("❌ Mail Error:", error.message);
        throw error;
    }
};

module.exports = mailSender;