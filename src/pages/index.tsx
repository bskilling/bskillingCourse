import { ReactNode, useEffect, useState } from "react";
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
import CertifiedPartners from "components/certifiedPartners";
import Tabs from "components/tabs";
import Blogs from "components/blognew";

const Home: NextPage<NextPage> = ({}) => {
 
  return (
    <>
      <Tabs />
      <ContactPopUp />
      <section>
        <Slider />
      </section>

      {/* <section>
        <Become />
      </section> */}
      {/* <section>
        <img src="/firstimage.png" alt="" />
      </section> */}
      <section className="bg-gray">
        <ListOfCourses />
      </section>
      <section>
        <CertifiedPartners />
      </section>
      <section className="">
        <Testimonials />
      </section>
      <section className="bg-gray">
        <Blogs />
      </section>
    </>
  );
};
export default Home;
