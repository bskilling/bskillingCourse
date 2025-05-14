import { api } from '@/component/common/util/auth';
import { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description } = req.body;
  try {
    const data = await api.post('/todo/createtodo', {
      title,
      description,
    });
    return res.status(201).json({ message: 'Created Successfully' });
  } catch (error) {
    return res.status(500).json({
      error: 'Something went  wrong didnt created the topic',
    });
  }
};
export default handler;
