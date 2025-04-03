// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { SESClient } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { type, courseName, firstName, lastName, email, phone, experience } = req.body;

  if (!type || !courseName || !firstName || !lastName || !email || !phone) {
    res.status(400).json({ message: 'Bad Request: Missing required fields' });
    return;
  }

  // Configure the Nodemailer transporter using SES
  const transporter = nodemailer.createTransport({
    SES: { ses: sesClient, aws: require('@aws-sdk/client-ses') },
  });

  const mailOptions = {
    from: 'lmsadmin@bskilling.com',
    to: ['lmsadmin@bskilling.com', 'support@bskilling.com', 'sarangiankit097@gmail.com'],
    subject: `Website Enquiry from Bskilling`,
    text: `
            Type: ${type}
            Course Name: ${courseName}
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Experience: ${experience}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
