import { ReactNode, useEffect, useState } from "react";
import Cards from "components/samplecard";
import { api } from "common/util/auth";
import { MdAdd } from "react-icons/md";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import Slider from "components/slider";
import Become from "components/become";
import ListOfCourses from "components/listOfCourses";
import CourseDetails from "data/CoursesData";
import ContactPopUp from "components/ContactPopUp";
import Testimonials from "components/testimonials";

const Home: NextPage<NextPage> = ({}) => {
  useEffect(() => {
    getData();
  }, []);
  const [resonseData, setresonseData] = useState(null);
  async function getData(): Promise<any> {
    try {
      const response: AxiosResponse = await axios.get(
        "https://bskilling.melimu.com/local/melimu_app/service.php?wstoken=462328d0432c3c7705d0e21d276722b7&wsfunction=local_melimu_app_get_courses_list&ws_device_token=68a8fced73ada8bd52ddcb67a003da8b&ws_device_timestamp=1681480072&timestamp=0"
      );
      setresonseData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  console.log(CourseDetails);
  console.log(resonseData);
  return (
    <>
      <ContactPopUp />
      {/* <section>
        <Slider />
      </section> */}
      {/* <section
        className=" lg:h-[800px]   "
        style={{
          backgroundImage: `url(${"/firstimage.png"})`,
          backgroundSize: "contained",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section> */}
      {/* <section>
        <Become />
      </section> */}
      <section>
        <img src="/firstimage.png" alt="" />
      </section>
      <section className="mt-[50px] md:container bg-[#f4f3ff] md:mx-auto">
        <ListOfCourses />
      </section>
      <section className="">
        <Testimonials />
      </section>
    </>
  );
};
export default Home;
