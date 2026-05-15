const emailVerificationTemplate = (userName, verificationUrl) => {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 10px;
      }
      .btn {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007BFF;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 15px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h2>📧 Verify Your Email</h2>

      <p>Hello <strong>${userName}</strong>,</p>

      <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>

      <a href="${verificationUrl}" class="btn">Verify Email</a>

      <p style="margin-top:20px;">
        If you didn’t create an account, you can safely ignore this email.
      </p>

      <p>
        Regards, <br/>
        <strong>Your EdTech Team</strong>
      </p>
    </div>
  </body>
  </html>
  `;
};

module.exports = emailVerificationTemplate;