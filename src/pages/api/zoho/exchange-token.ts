// pages/api/zoho/exchange-token.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { code } = req.body;

  if (!code) return res.status(400).json({ error: 'Code is required' });

  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', process.env.ZOHO_CLIENT_ID!);
    params.append('client_secret', process.env.ZOHO_CLIENT_SECRET!);
    params.append('redirect_uri', 'https://www.bskilling.com/auth');
    params.append('code', code);

    const tokenRes = await axios.post(`${process.env.ZOHO_URL}/oauth/v2/token`, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const data = tokenRes.data;

    console.log('Token data:', data);

    // TODO: 🔒 Save `data.access_token` and `data.refresh_token` securely
    // For now just respond (you'll replace this with saving logic)
    res.status(200).json({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
    });
  } catch (error: any) {
    console.error('Error exchanging token:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to exchange token' });
  }
}
