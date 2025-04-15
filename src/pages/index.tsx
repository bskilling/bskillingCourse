/* eslint-disable @next/next/next-script-for-ga */
import Blogs from '@/component/blognew';
import CertifiedPartners from '@/component/certfiedPratnersSilder';
import ListOfCourses from '@/component/listOfCourses';
import Slider from '@/component/slider';
import Tabs from '@/component/tabs';
import Testimonials from '@/component/testimonials';
import { MyContext } from '@/component/context/PageContext';
import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfFile from '../pages/Pdffile';
import axios from 'axios';
import LeadForm from '@/component/modules/leadChat/components/LeadForm';
import Gateway from '@/component/Gateway';
import Chooseus from '@/component/Chooseus';
import Experience from '@/component/Experience';
import Testimonial from '@/component/Testimonial';
import Placement from '@/component/Placement';
import Program from '@/component/Program';

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
type NestedArrayOfPeople = Array<Array<ListOfCoursesDataType>>;
const Home: NextPage<NextPage> = ({}) => {
  const [datas, setDatas] = useState<string[]>([]);
  const [eachCourceList, SetEachCourceList] = useState<ListOfCoursesDataType[][]>([]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/outsource/trainingList?tenant=2`
      );
      const jsonData = response.data;
      console.log(jsonData);
      const catagoryList = Object.keys(jsonData.trainings);
      const ListOfCourcesData = Object.values(jsonData.trainings);

      setDatas(catagoryList);

      SetEachCourceList(ListOfCourcesData as ListOfCoursesDataType[][]);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const { setIsDropdownOpen, setCategoryVisible } = useContext(MyContext);
  const clickOnMain = () => {
    setIsDropdownOpen(false);
    setCategoryVisible(false);
  };

  return (
    <>
      <Head>
        <title>bSkilling | Online Courses - Live Training and Certification Programs</title>
        <meta
          name="description"
          content="Unlock success with bSkilling online courses and live training. Get certified in Generative AI, SAP BTP, Cloud Engineering, Prince2, PMP. The best online training experience!"
        />
        <meta
          name="keywords"
          content="bskilling, generative ai, generative ai online certification, gen ai,sap btp course, sap btp online,prince2 certification, prince2 examination, pmp online certification, pmp online course, cloud engineering course, cloud engineering training,Online course , Online course with placement, online training course, online certification with placement, training certification with placement"
        />

        <link rel="icon" href="/favicon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3PVZC9K8BH');
            `,
          }}
        />
      </Head>

      <section onClick={clickOnMain} className="w-full ">
        <section className="relative w-full">
          <Slider />
        </section>
        <section>
          <CertifiedPartners />
        </section>
        <section>
          <Program />
        </section>
        <section>
          <Chooseus />
        </section>

        <section>
          <Gateway />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Testimonial />
        </section>

        <section>
          <Placement />
        </section>
      </section>
    </>
  );
};
export default Home;
