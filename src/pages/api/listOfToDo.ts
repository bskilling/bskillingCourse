import { api } from '@/component/common/util/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await api.get('/todo/allCreatedTodo');
    return res.status(200).json(data);
  } catch (error) {
    res.status(403).json({ err: 'Error!' });
  }
};
export default handler;
