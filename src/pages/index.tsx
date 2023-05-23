import { ReactNode, useContext, useEffect, useState } from "react";
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
import { MyContext } from "context/PageContext";
import FloatWindow from "modules/leadChat/components/FloatWindow";

const Home: NextPage<NextPage> = ({}) => {
  const {
    setButtonIndex,
    buttonIndex,
    clickOnSearch,
    setClickOnSearch,
    currentTab,
    setCurrentTab,
    dropSearchData,
    setDropSearchData,
    inputValue,
    setInputValue,
    loadingVisible,
    setLoadingVisible,
    searchData,
    setSearchData,
    setTabVisible,
    tabVisible,
    fetchSearchData,
    setFetchSearchData,
    isDropdownOpen,
    setIsDropdownOpen,
    setCategoryVisible,
  } = useContext(MyContext);
  const clickOnMain = () => {
    setIsDropdownOpen(false);
    setCategoryVisible(false);
  };
  return (
    <>
      <section className="bg-buttonBlue text-white">
        <Tabs />
      </section>
      <section onClick={clickOnMain}>
        <ContactPopUp />
        <FloatWindow />
        <section>
          <Slider />
        </section>

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
      </section>
    </>
  );
};
export default Home;
