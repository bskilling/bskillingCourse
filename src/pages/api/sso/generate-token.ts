// import type { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';

// type ResponseData = {
//   success: boolean;
//   message?: string;
//   token?: string;
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   // Only allow POST requests
//   if (req.method !== 'POST') {
//     return res.status(405).json({ success: false, message: 'Method not allowed' });
//   }

//   try {
//     const { user } = req.body;

//     // Validate required user fields
//     if (!user || !user.name || !user.email) {
//       return res.status(400).json({
//         success: false,
//         message: 'User data is missing required fields (name, email)',
//       });
//     }

//     // Get API token from environment variables
//     const apiToken = process.env.EDMINGLE_API_TOKEN;

//     if (!apiToken) {
//       return res.status(500).json({
//         success: false,
//         message: 'API token is not configured on the server',
//       });
//     }

//     // Generate name parts
//     const nameParts = user.name.split(' ');
//     const firstName = nameParts[0];
//     const lastName = nameParts.slice(1).join(' ') || '';

//     // Create JWT payload
//     const now = Math.floor(Date.now() / 1000);
//     const payload = {
//       iss: 'Online JWT Builder',
//       iat: now,
//       exp: now + 120, // Token expires after 120 seconds
//       first_name: firstName,
//       last_name: lastName,
//       email: user.email,
//       contact_number: user.phone || '',
//     };

//     // Sign the token with HS256 algorithm
//     const token = jwt.sign(payload, apiToken, { algorithm: 'HS256' });

//     // Return the token
//     return res.status(200).json({
//       success: true,
//       token,
//     });
//   } catch (error: any) {
//     console.error('Error generating JWT token:', error);
//     return res.status(500).json({
//       success: false,
//       message: `Failed to generate token: ${error.message}`,
//     });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

type ResponseData = {
  success: boolean;
  message?: string;
  token?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { user } = req.body;

    if (!user || !user.name || !user.email) {
      return res.status(400).json({
        success: false,
        message: 'User data is missing required fields (name, email)',
      });
    }

    // Generate 32-character random hex token
    const edauthToken = crypto.randomBytes(16).toString('hex');

    // Simulate storing it in a database or cache (e.g. Redis) with expiry
    // You should replace this with actual DB/cache logic
    console.log('Store in DB/cache:', {
      token: edauthToken,
      email: user.email,
      name: user.name,
      phone: user.phone || '',
      expiresAt: Date.now() + 2 * 60 * 1000, // valid for 2 minutes
    });

    // Return the token
    return res.status(200).json({
      success: true,
      token: edauthToken,
    });
  } catch (error: any) {
    console.error('Error generating token:', error);
    return res.status(500).json({
      success: false,
      message: `Failed to generate token: ${error.message}`,
    });
  }
}
