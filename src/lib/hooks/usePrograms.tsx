import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Course } from 'common/util/types';

interface groupedItems {
  [key: string]: Course[];
}
const usePrograms = () => {
  const response = useQuery<groupedItems>({
    queryKey: ['programs'],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`,
        {
          withCredentials: true,
        }
      );

      const data = res?.data?.courses as Course[];
      const groupedItems: { [key: string]: Course[] } = data.reduce((acc, item) => {
        // @ts-expect-error error
        if (!acc[item.category as string]) {
          // @ts-expect-error error
          acc[item.category as string] = [];
        }
        // @ts-expect-error error
        acc[item.category as string].push(item);
        return acc;
      }, {});
      return groupedItems as groupedItems;
    },
    staleTime: 1000 * 60 * 5,
  });

  return response;
};

export default usePrograms;
