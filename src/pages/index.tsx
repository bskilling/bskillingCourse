import ContactPopUp from "components/ContactPopUp";
import Blogs from "components/blognew";
import CertifiedPartners from "components/certifiedPartners";
import ListOfCourses from "components/listOfCourses";
import Playstore from "components/playstoreapp";
import Slider from "components/slider";
import Tabs from "components/tabs";
import Testimonials from "components/testimonials";
import { MyContext } from "context/PageContext";
import FloatWindow from "modules/leadChat/components/FloatWindow";
import { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";

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
      <Head>
        <title>bSkilling </title>
        <meta
          name="bSkilling"
          content="Unlock Your Potential with the Trending Online Courses of Today | Expand Your Knowledge and Skills"
        />

        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3PVZC9K8BH"
        ></script>
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
      <section className="bg-buttonBlue text-white">
        <Tabs />
      </section>
      <section onClick={clickOnMain}>
        {/* <ContactPopUp /> */}

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
        {/* <section>
          <Playstore />
        </section> */}
        <section className="bg-gray">
          <Blogs />
        </section>
        <section className="bg-gray-200">
          <div className="md:hidden flex ">
            <div>
              <p className="font-bold font-SourceSans text-xl text-center pt-12 py-2 ">
                Learn On The App
              </p>
              <p className="text-base text-justify font-SourceSans py-2 px-2">
                Download the lessons and learn anytime, anywhere from the
                courses available on our app.
              </p>

              <div className="flex flex-col hover:cursor-pointer py-14 px-1 gap-2 justify-center">
                <div className="flex p-2 gap-1 text-white px-2 py-1  rounded-md">
                  {/* <div className="flex items-center">
                    <img
                      src="/icon/playstore.svg"
                      className="w-[40px] h-[40px]"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="text-sm">Get It </p>
                    <p> On Google Play</p>
                  </div> */}
                  <div className="flex justify-center items-center w-full">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline-0 flex justify-center"
                      href="https://play.google.com/store/apps/details?id=com.melimu.app.bskilling&hl=en_IN&gl=US"
                    >
                      <img
                        src="/gp.png"
                        className="w-[50%] object-contain h-auto"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-1 text-white px-2 py-1  rounded-md">
                  {/* <div className="flex items-center">
                    <img
                      src="/icon/appstore.svg"
                      className="w-[50px] h-[50px]"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="text-sm">Get It </p>
                    <p> On Google Play</p>
                  </div> */}
                  <div className="flex justify-center items-center w-full">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline-0 flex justify-center"
                      href="https://apps.apple.com/eg/app/bskilling/id6445943298"
                    >
                      <img
                        src="/as.png"
                        className="w-[50%] object-contain h-auto"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden">
            <div className="relative">
              <div className="absolute w-[100%] flex  ">
                <div className="flex w-[100%] text-white mt-9 justify-center">
                  <p className="font-bold font-SourceSans text-xl text-center py-2 ">
                    Learn On The App
                  </p>
                </div>
              </div>
              <div className="absolute text-white  flex items-center  justify-center mt-16  w-[100%]">
                <div>
                  <p className="text-lg pt-12 text-white text-opacity-100 font-semibold font-SourceSans  py-2 px-1">
                    Download the lessons and learn anytime, anywhere from the
                    courses available on our app.
                  </p>
                </div>
              </div>
              <img
                src="qebg.png"
                alt="QR Code"
                className="w-full  object-contain h-auto"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Home;
