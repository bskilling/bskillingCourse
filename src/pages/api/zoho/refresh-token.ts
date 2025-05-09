// // pages/api/zoho/refresh-token.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import { parse, serialize } from 'cookie';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log('🔁 Refreshing token...');
//   if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

//   const { refreshToken } = req.body;

//   const refresh_token = refreshToken;
//   const accountsServerUrl = process?.env?.ZOHO_URL;

//   console.log({ refresh_token, accountsServerUrl });

//   if (!refresh_token || !accountsServerUrl) {
//     return res.status(400).json({ error: 'Refresh token and accountsServerUrl are required' });
//   }

//   const clientId = process.env.ZOHO_CLIENT_ID!;
//   const clientSecret = process.env.ZOHO_CLIENT_SECRET!;

//   try {
//     const params = new URLSearchParams({
//       grant_type: 'refresh_token',
//       client_id: clientId,
//       client_secret: clientSecret,
//       refresh_token,
//     });

//     const tokenRes = await axios.post(`${accountsServerUrl}/oauth/v2/token`, params, {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     });

//     const data = tokenRes?.data;

//     console.log('🔁 Refreshed token:', data);
//     return res.status(200).json({ data });
//   } catch (error: any) {
//     console.error('❌ Refresh token error:', error?.response?.data || error.message);
//     return res.status(500).json({ error: error?.response?.data || error.message });
//   }
// }
