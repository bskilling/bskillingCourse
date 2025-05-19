// /pages/api/zoho/lead.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { parse, serialize } from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const cookies = parse(req.headers.cookie || '');

    let accessToken = cookies?.accessToken;
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    console.log(accessToken, 'accessToken');
    if (!accessToken) {
      try {
        const res1 = await axios.post(
          process?.env?.API_URL + '/api/zoho/refresh-token',
          {
            refreshToken,
          },
          {
            withCredentials: true,
          }
        );
        accessToken = res1.data?.data?.access_token;
        res.setHeader(
          'Set-Cookie',
          // @ts-ignore
          serialize('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'strict',
            maxAge: 60 * 60, // 1 hour
          })
        );
        console.log(accessToken, 'accessToken');
      } catch (error) {
        console.log(error);
        return res
          .status(401)
          .json({ message: 'Not able to refresh access token found in cookies' });
      }
      //   return res.status(401).json({ message: 'No access token found in cookies' });
    }

    const { course: course1 } = req.body;
    const category = course1?.category;
    console.log(req.body);
    console.log(category);
    if (category === 'nasscom') {
      const body = req.body;
      console.log('body', body);
      const name = body?.name;
      const firstName = name?.split(' ')?.[0];
      const lastName = name?.split(' ')?.[1] || name;
      const skillTitle =
        body?.course?._id === '67f4f46a0547cfbc81cebceb' ? 'Generative AI' : 'Cloud Computing';
      const payload = {
        data: [
          {
            Layout: {
              id: '6307981000000000167', // your layout ID
            },
            Lead_Source: 'nasscom',
            Company: body?.type === 'b2c' ? 'Personal' : 'Corporate',
            Last_Name: lastName,
            First_Name: firstName,
            Email: body?.email,
            State: 'Unknown',
            Phone: body?.phoneNumber,
            Skill: `${category}-${skillTitle}`,
            Title: body?.course?.title,
          },
        ],
        trigger: ['approval', 'workflow', 'blueprint'],
      };
      const response = await axios.post('https://www.zohoapis.com/crm/v2.1/Leads', payload, {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      return res.status(200).json({ message: 'Lead created successfully', data: response.data });
    }

    const {
      name,
      email,
      phoneNumber,
      countryCode,
      type, // 'b2b', 'b2c'
      query,
      websiteUrl,
      course, // full populated course object
    } = req.body;

    console.log(req.body, 'req.body');

    const firstName = name?.split(' ')[0];
    const lastName = name?.split(' ')[1] || name;
    const fullPhone = `${countryCode || '+91'}${phoneNumber}`;

    // 🔍 Find category where category.type === main type
    const matchingCategory = course?.category?.find((cat: any) => cat.type === course?.type);

    // 🔗 Create link to course page
    const courseLink = `https://yourdomain.com/courses/${course.slug}`;
    const payload = {
      data: [
        {
          Layout: {
            id: '6307981000000000167', // your layout ID
          },
          Lead_Source: 'Website',
          Company: type === 'b2c' ? 'Personal' : 'Corporate',
          Last_Name: lastName,
          First_Name: firstName,
          Email: email,
          State: 'Unknown',
          Phone: fullPhone,
          Description: query,
          Website: websiteUrl,
          Skill: `${type}-${matchingCategory?.name}`,
          Title: course?.title,
        },
      ],
      trigger: ['approval', 'workflow', 'blueprint'],
    };
    // const { name, email, phoneNumber, countryCode, type, subCategory, query, websiteUrl, course } =
    //   req.body;

    // const payload = {
    //   data: [
    //     {
    //       Layout: {
    //         id: '6307981000000000167', // Replace with your actual layout ID
    //       },
    //       Lead_Source: 'Website',
    //       Company: websiteUrl || 'Personal',
    //       Last_Name: name.split(' ')[1] || name,
    //       First_Name: name.split(' ')[0],
    //       Email: email,
    //       State: 'Unknown',
    //       Phone: `${countryCode || '+91'}${phoneNumber}`,
    //       Description: query,
    //       Custom_Type: type,
    //       Sub_Category: subCategory || undefined,
    //       Course_Id__c: course,
    //     },
    //   ],
    //   trigger: ['approval', 'workflow', 'blueprint'],
    // };

    const response = await axios.post('https://www.zohoapis.com/crm/v2.1/Leads', payload, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return res.status(200).json({ message: 'Lead created successfully', data: response.data });
  } catch (error: any) {
    console.error('Zoho Lead Error:', error?.response?.data || error.message);
    return res.status(500).json({ message: 'Failed to create lead', error: error?.response?.data });
  }
}
