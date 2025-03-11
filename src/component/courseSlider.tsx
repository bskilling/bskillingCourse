/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CourseCard from './CourseCard';
interface UpcomingBatch {
  capacity: string;
  description: string;
  endDate: string;
  endRegistrationDate: string;
  id: string;
  isPaid: string;
  name: string;
  startDate: string;
  status: string;
}
interface ListOfCoursesDataType {
  batches: UpcomingBatch[];
  category: string;
  currency: string;
  description: string;
  discount: number;
  duration: string;
  endorsedBy: string;
  id: string;
  language: string;
  level: string;
  name: string;
  ownedBy: string;
  price: number;
  thumbnail: string;
  trainingTye: string;
}

interface CourseData {
  // Define the properties for course data here
}

const CourseSlider = () => {
  const router = useRouter();
  const { category, name, id } = router.query;
  const [datas, setDatas] = useState<string[]>([]);
  const [eachCourceList, SetEachCourceList] = useState<
    ListOfCoursesDataType[][]
  >([]);

  const [randomEightElements, setRandomEightElements] = useState<
    ListOfCoursesDataType[]
  >([]);
  const shuffleArray = (array: CourseData[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/outsource/trainingList?tenant=2`
      );
      const jsonData = response.data;

      const catagoryList = Object.keys(jsonData.trainings);

      const ListOfCourcesData = Object.values(jsonData.trainings);

      setDatas(catagoryList);
      // const flattenedData = ListOfCourcesData.flatMap(
      //   (innerArray) => innerArray
      // );
      // const shuffledData = shuffleArray(flattenedData as []);
      // const randomElements = shuffledData.slice(0, 8);
      const categoryIndex = catagoryList.indexOf(category as string);
      const coursesForCategory = ListOfCourcesData[
        categoryIndex
      ] as ListOfCoursesDataType[];
      const randomElements = coursesForCategory.slice(0, 8);
      // Now, store the flattened data in the state
      setRandomEightElements(randomElements as []);

      SetEachCourceList(ListOfCourcesData as ListOfCoursesDataType[][]);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, [category]);

  return (
    <>
      <div>
        <div className="flex  gap-5 flex-col ">
          {randomEightElements.map((data, index) => (
            <div key={index} className=" max-w-[350px]">
              <CourseCard data={data} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CourseSlider;
