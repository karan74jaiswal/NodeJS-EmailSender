const nodemailer = require("nodemailer");
// Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL || "karan74jaiswal@gmail.com", // TODO: your gmail account
    pass: process.env.PASSWORD || "lizipwnyzacytwps", // TODO: your customised gmail password for third party Apps
  },
});
// Step 2
let mailOptions = {
  from: "karan74jaiswal@gmail.com", // TODO: email sender
  to: "karanjaiswalpaytm@gmail.com", // TODO: email receiver
  subject: "Nodemailer - Test",
  text: "Wooohooo it works!!",
};
// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log("Error occurs");
  }
  console.log("Email sent!!!");
});
