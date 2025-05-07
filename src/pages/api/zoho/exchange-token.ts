// pages/api/zoho/exchange-token.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { code } = req.body;

  if (!code) return res.status(400).json({ error: 'Code is required' });
  const url = process.env.ZOHO_URL ?? 'https://accounts.zoho.in';
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', process.env.ZOHO_CLIENT_ID ?? '1000.6Y9JQK3G0T1EG4I3SKYI7N2IW7RMJW');
    params.append(
      'client_secret',
      process.env.ZOHO_CLIENT_SECRET ?? '7f462caa6919876cad2756f81c33c691ee50ee5c38'
    );
    params.append('redirect_uri', 'https://www.bskilling.com/auth');
    params.append('code', code);

    console.log('Exchange token params:', params);

    const tokenRes = await axios.post(
      `${url}/oauth/v2/token?client_id=${process.env.ZOHO_CLIENT_ID ?? '1000.6Y9JQK3G0T1EG4I3SKYI7N2IW7RMJW'}
&client_secret=${process.env.ZOHO_CLIENT_SECRET ?? '7f462caa6919876cad2756f81c33c691ee50ee5c38'}
&grant_type=authorization_code
&redirect_uri=https://www.bskilling.com/auth
&code=${code}`,
      null,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    const data = tokenRes.data;

    console.log('Token data:', data);

    // TODO: 🔒 Save `data.access_token` and `data.refresh_token` securely
    // For now just respond (you'll replace this with saving logic)
    res.status(200).json({
      data,
      params,
    });
  } catch (error: any) {
    console.log('Exchange token error', error);
    console.error('Error exchanging token:', error?.response?.data || error.message);
    res.status(500).json({ error: error });
  }
}
