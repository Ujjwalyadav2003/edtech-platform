const passwordUpdateTemplate = (userName, supportEmail) => {
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
      .alert {
        color: #d9534f;
        font-weight: bold;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h2>🔒 Password Updated</h2>

      <p>Hi <strong>${userName}</strong>,</p>

      <p>Your password has been successfully updated.</p>

      <p>If you made this change, no further action is required.</p>

      <p class="alert">
        If you did NOT change your password, please contact support immediately.
      </p>

      <p>
        Support: ${supportEmail}
      </p>

      <p style="margin-top:20px;">
        Stay सुरक्षित 🔐 <br/>
        <strong>Your EdTech Team</strong>
      </p>
    </div>
  </body>
  </html>
  `;
};

module.exports = passwordUpdateTemplate;