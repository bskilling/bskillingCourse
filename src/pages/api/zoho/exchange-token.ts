// // pages/api/zoho/exchange-token.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import { serialize } from 'cookie';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

//   const { code } = req.body;

//   if (!code) return res.status(400).json({ error: 'Code is required' });
//   const url = process.env.ZOHO_URL ?? 'https://accounts.zoho.com';
//   const clientId = process.env.ZOHO_CLIENT_ID ?? '1000.6Y9JQK3G0T1EG4I3SKYI7N2IW7RMJW';
//   const clientSecret = '7f462caa6919876cad2756f81c33c691ee50ee5c38';
//   const redirect_uri = process.env.ZOHO_REDIRECT_URL;

//   try {
//     const tokenRes = await axios.post(`${url}/oauth/v2/token`, null, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       params: {
//         client_id: clientId,
//         client_secret: clientSecret,
//         grant_type: 'authorization_code',
//         redirect_uri: redirect_uri,
//         code: code,
//       },
//     });
//     console.log(
//       {
//         client_id: clientId,
//         client_secret: clientSecret,
//         grant_type: 'authorization_code',
//         redirect_uri: redirect_uri,
//         code: code,
//       },
//       'params'
//     );
//     const data = tokenRes.data;

//     res.setHeader('Set-Cookie', [
//       serialize('accessToken', data?.access_token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         path: '/',
//         sameSite: 'strict',
//         maxAge: 60 * 60, // 1 hour
//       }),
//       serialize('refreshToken', data?.refresh_token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         path: '/',
//         sameSite: 'strict',
//         maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
//       }),
//     ]);

//     console.log('Token data:', data);

//     // TODO: 🔒 Save `data.access_token` and `data.refresh_token` securely
//     // For now just respond (you'll replace this with saving logic)
//     res.status(200).json({
//       data,
//     });
//   } catch (error: any) {
//     console.log('Exchange token error', error);
//     console.error('Error exchanging token:', error?.response?.data || error.message);
//     res.status(500).json({ error: error });
//   }
// }
