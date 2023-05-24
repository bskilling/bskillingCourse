import ContactPopUp from "components/ContactPopUp";
import Blogs from "components/blognew";
import CertifiedPartners from "components/certifiedPartners";
import ListOfCourses from "components/listOfCourses";
import Slider from "components/slider";
import Tabs from "components/tabs";
import Testimonials from "components/testimonials";
import { MyContext } from "context/PageContext";
import FloatWindow from "modules/leadChat/components/FloatWindow";
import { NextPage } from "next";
import { useContext } from "react";

const Home: NextPage<NextPage> = ({ }) => {
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
