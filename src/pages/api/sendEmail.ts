// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, contact } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP server
      port: 587, // Port number (usually 587 for TLS or 465 for SSL)
      secure: false,
      service: 'gmail', // or another email service
      auth: {
        user: 'lmsbskilling@gmail.com', // Your Gmail address
        pass: 'xuwe nxyj qboy gryz', // Your Gmail password or App password if 2FA is enabled
      },
    });
    // console.log(process.env.EMAIL_USER);

    // try {
    // Send email with the defined transport object
    const dat = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: [
        'support@bskilling.com',
        'sarangiankit097@gmail.com',
        'lmsadmin@bskilling.com',
        'maan.harmeet7@gmail.com',
      ], // list of receivers
      subject: 'Corporate Training Enquiry',
      html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Contact:</strong> ${contact}</p>
                `,
    });

    console.log(dat, 'emial sdfinfs');
    res.status(200).json({ message: 'Email sent successfully' });
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   res.status(500).json({ message: "Failed to send email" });
    // }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
