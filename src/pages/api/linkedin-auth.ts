import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // LinkedIn's OAuth endpoint
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ error: 'No authorization code provided.' });
    }

    // Exchange the authorization code for an access token
    try {
      const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code as string,
          redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URL as string,
          client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID as string,
          client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET as string,
        }),
      });

      const data = await response.json();

      if (data.error) {
        return res.status(400).json({ error: data.error_description });
      }

      const accessToken = data.access_token;

      // Fetch user profile data using the access token
      const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const profileData = await profileResponse.json();

      // Now you have the profile data
      return res.status(200).json(profileData);
    } catch (error) {
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
