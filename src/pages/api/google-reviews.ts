import { NextApiRequest, NextApiResponse } from 'next';

const PLACE_ID = 'ChIJOVzkcLEVrjsRdiwYjPoHOPM'; // Replace with your actual API Key
const GOOGLE_API_KEY = 'AIzaSyBZuzz5hcluZ07tvgk3tZH9kNC8tJsj17g'; // Replace with your actual Place ID
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // Fix CORS
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Google Reviews' });
  }
}
