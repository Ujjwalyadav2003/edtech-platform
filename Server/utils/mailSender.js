
const { google } = require("googleapis");

const mailSender = async (email, title, body) => {
    try {
        const {
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            GOOGLE_REFRESH_TOKEN,
            MAIL_USER,
        } = process.env;

        if (
            !GOOGLE_CLIENT_ID ||
            !GOOGLE_CLIENT_SECRET ||
            !GOOGLE_REFRESH_TOKEN ||
            !MAIL_USER
        ) {
            throw new Error("Gmail API environment variables are missing");
        }

        const oauth2Client = new google.auth.OAuth2(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: GOOGLE_REFRESH_TOKEN,
        });

        const gmail = google.gmail({
            version: "v1",
            auth: oauth2Client,
        });

        const encodeHeader = (value) =>
            `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;

        const message = [
            `From: StudyNotion <${MAIL_USER}>`,
            `To: ${email}`,
            `Subject: ${encodeHeader(title)}`,
            "MIME-Version: 1.0",
            'Content-Type: text/html; charset="UTF-8"',
            "Content-Transfer-Encoding: base64",
            "",
            Buffer.from(body, "utf8").toString("base64"),
        ].join("\r\n");

        const raw = Buffer.from(message, "utf8").toString("base64url");

        const response = await gmail.users.messages.send({
            userId: "me",
            requestBody: { raw },
        });

        console.log("Gmail API email sent:", response.data.id);

        return response.data;
    } catch (error) {
        console.error(
            "Gmail API sending failed:",
            error.response?.data || error.message
        );
        throw error;
    }
};

module.exports = mailSender;
