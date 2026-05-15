const courseEnrollmentEmail = (userName, courseName, loginUrl) => {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
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
        background-color: #4CAF50;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 15px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h2>🎉 Enrollment Confirmed!</h2>
      <p>Hi <strong>${userName}</strong>,</p>

      <p>You have successfully enrolled in the course:</p>
      <h3>${courseName}</h3>

      <p>You can now start learning right away.</p>

      <a href="${loginUrl}" class="btn">Start Learning</a>

      <p style="margin-top:20px;">
        Happy Learning 🚀 <br/>
        <strong>Your EdTech Team</strong>
      </p>
    </div>
  </body>
  </html>
  `;
};

module.exports = courseEnrollmentEmail;