import {
  BsPeople,
  BsBookmarkCheck,
  BsFillPeopleFill,
  BsTelephone,
} from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaCalendarTimes, FaMedal } from "react-icons/fa";
import { AnimatePresence, motion, spring } from "framer-motion";
import { GiPriceTag } from "react-icons/gi";
import Accordion from "components/accordion";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DropAQueryForm from "modules/leadChat/components/DropAQueryForm";
import CourseCard from "components/CourseCard";
import CourseSlider from "components/courseSlider";
import InsideCourse from "components/insideCourseSubpoint";
import AccordionFaq from "components/accordionFaq";
interface accord {
  question: string;
  answer: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  answer5?: string;
  answer6?: string;
  answer7?: string;
}
const SapBtp = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };
  const [videoss, setVideoss] = useState(null);
  const transition = { type: "spring", duration: 3 };
  const transition2 = { type: "spring", duration: 1 };
  const [messageSent, setMessage] = useState(false);
  const [CountryCodeValue, setCountryCodeValue] = useState<any>("+91");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const isButtonVisble =
    watch("message") &&
    watch("email") &&
    watch("phone") &&
    watch("location") &&
    watch("name") &&
    CountryCodeValue;
  console.log(CountryCodeValue);
  const submit = handleSubmit(async (data) => {
    try {
      const response = await fetch(
        "https://54txkspp2molgb6p7mgzad2scu0niflz.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            message: data.message,
            email: data.email,
            phone: data.phone,
            location: data.location,
            name: data.name,
            countryCode: CountryCodeValue,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          message: "",
          phone: "",
          email: "",
          location: "",
          name: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  const tabs = [,];
  const clickOnTabs = () => {};
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <>
      <Head>
        <title>bSkilling </title>
        <meta
          name="bSkilling"
          content="Learn the skills you need to build and deploy intelligent applications on SAP Business Technology Platform"
        />
        <meta
          name="p:domain_verify"
          content="7bb84546e514612864b5b9d71d1649e4"
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

      <section className="bg-gray font-SourceSans">
        {/* mobile view  above*/}
        <section>
          <div className="relative border  md:h-[750px] w-auto md:min-h-[650px] min-h-[1125px]  h-fit">
            <div
              className="h-full absolute top-0 left-0 w-full   brightness-50"
              style={{
                backgroundImage: `url(${"/education.png"})`,
                // backgroundImage: `url(${"/bgcrs.jpg"})`,
                backgroundSize: "cover",
                objectFit: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <img className="absolute  h-auto w-fit" src="/bgcrs.jpg" alt="" /> */}
            </div>
            <div className="  w-full z-[1000] relative  flex  justify-center  text-white">
              <div className="md:w-[100%] md:basis-[90%] md:mt-10 mt-12  ">
                <div className=" flex flex-col md:flex-row justify-between">
                  <div className="flex items-center">
                    <p className=" pb-2 text-3xl mb-5 md:text-left text-center font-semibold">
                      SAP Business Technology Platform
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/crsInside/saplogo.png"
                      className="w-[200px] h-[200px]"
                      alt=""
                    />
                  </div>
                </div>
                <motion.div
                  // initial={{ y: "200px" }}
                  // whileInView={{ y: "0px" }}
                  // animate={{ y: 10 }}
                  // viewport={{ once: true }}
                  // transition={{ ease: "easeOut", duration: 2 }}
                  className="bg-glass text-xl text-center md:text-left md:pt-0 pt-3 md:text-2xl font-semibold"
                >
                  Learn the skills you need to build and deploy intelligent
                  <br />
                  applications on SAP Business Technology Platform
                </motion.div>

                <motion.div
                  // initial={{ right: "300px" }}
                  // whileInView={{ right: "0px" }}
                  // animate={{ x: 2 }}
                  // viewport={{ once: true }}
                  // transition={{ ease: "easeOut", duration: 2 }}
                  className=" flex flex-col md:flex-row pt-7 pb-7 md:gap-6 items-center"
                >
                  <div>
                    <div className="flex gap-2">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <div>275 Ratings</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center ">
                      <BsFillPeopleFill />
                    </div>
                    399 Learners
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center ">
                      <BsFillPeopleFill />
                    </div>
                    Instructor-led Training
                  </div>

                  <div className="flex gap-2">
                    <div className="flex items-center ">
                      <BiTime />
                    </div>{" "}
                    80 hrs
                  </div>
                </motion.div>

                <div className="mt-2 font-base md:p-0 p-4  md:text-left text-justify md:w-[100%]">
                  Are you ready to navigate the complex landscape of digital
                  transformations with confidence? Introducing our comprehensive
                  course on SAP Business Technology Platform (SAP BTP), designed
                  to equip students like you with the knowledge and skills to
                  drive successful business transformations in the digital age.{" "}
                  Gain a competitive edge and increase your chances of digital
                  transformation success with our comprehensive course on SAP
                  BTP. Developed by industry experts, this program will
                  demystify the complexities of digital transformations and
                  equip you with the essential knowledge and skills to harness
                  the full potential of SAP BTP.
                </div>
              </div>

              {/* //////////////////////////////////////rating and course name section //////////////////////////////////////////////////////////*/}
            </div>
          </div>

          {/* section with banner comes here above */}
        </section>
        <section className="md:relative md:-top-14   lg:-top-28 ">
          <motion.div
            initial={{ y: "200px" }}
            whileInView={{ y: "0px" }}
            animate={{ y: 10 }}
            viewport={{ once: true }}
            id="parent"
            className=" flex  flex-col -violet-600 w-full 0   md:flex-row justify-center  gap-10"
          >
            {/* main text content here */}
            <div className="  flex flex-col md:flex-row gap-5  md:basis-[90%] ">
              <div className="flex flex-col md:flex-1  gap-5 h-fit    ">
                <div className="bg-white px-5 md:px-6 w-full min-h-[1220px]  pb-8  rounded-xl">
                  <div>
                    <p className="mt-9 text-2xl font-bold   mb-4">Overview</p>
                    <p className="   ">
                      SAP Business Technology Platform (SAP BTP) is a
                      cloud-based platform that enables businesses to build,
                      deploy, and manage intelligent applications. SAP BTP
                      provides a wide range of services, including data and
                      analytics, artificial intelligence, application
                      development, automation, and integration.
                      Create personalized experiences across business processes,
                      build applications, analytics, and integrations faster,
                      and run mission-critical innovation confidently on major
                      cloud providers&#39; infrastructure fully managed by SAP.{" "}
                      <br /> <br /> Developers have what they need to connect,
                      extend, and enrich mission-critical business processes
                      quickly. Business users can automate tasks, create fast,
                      flexible workflows, or personalize interfaces without
                      coding. Collaborating on planning and sharing
                      insights across the business becomes easier with
                      instant access to business-context-rich information
                      from your SAP and third-party systems.
                    </p>
                    <div className="mt-2 flex md:flex-row flex-col">
                      <div className="flex-1">
                        <p className="pt-8 pb-4 text-xl md:text-left font-semibold">
                          Objectives
                        </p>
                        <div className="flex gap-1 pt-2    ">
                          <span className="text-blue-600 ">✔️</span>
                          Accelerate innovation on a modern cloud-based
                          technology platform
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 ">✔️</span>
                          Digitalise the unique ways in which your company
                          operates
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 ">✔️</span>
                          Integrate, extend, and enrich business processes
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 ">✔️</span>
                          Empower your people to innovate with governance
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 ">✔️</span>Grow
                          innovation agility without slowing down ongoing
                          business operations
                        </div>
                      </div>
                      <div className="md:w-[400px] justify-center  pt-8 items-center  flex flex-row  md:gap-10">
                        <div>
                          <a className="play-btn" onClick={handleClick}></a>
                        </div>

                        {showVideo && (
                          <div
                            className={`fixed flex justify-center items-center bg-opacity-80  z-[2000] top-0   left-0 w-screen h-screen bg-black`}
                          >
                            <div
                              className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-opacity-100"`}
                            >
                              <div className="lg:w-full bg-opacity-0 h-fit flex flex-col  overflow-auto w-full">
                                <div
                                  onClick={() => setShowVideo(false)}
                                  className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
                                >
                                  X
                                </div>
                                <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">
                                  <iframe
                                    width="780"
                                    height="315"
                                    src="https://www.youtube.com/embed/kWUcfALH1rk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="font-semibold md:mt- text-blue-600">
                          Watch <br /> Intro Video
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full md:flex-row gap-20 flex-col  justify-center">
                      <div className="flex flex-col   md:w-[50%]">
                        <p className="pt-8 pb-4 text-xl md:text-left font-semibold ">
                          Eligibility
                        </p>
                        <p className="text-justify   ">
                          This course is ideal for developers, IT professionals,
                          and business users seeking to unlock the full
                          potential of SAP BTP. To make the most of this course,
                          we recommend having the following prerequisites:
                          <br />
                        </p>

                        <div className="flex gap-1 pt-4   ">
                          <span className="text-blue-600 ">✔️</span>Basic
                          understanding of cloud computing concepts.
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Familiarity with programming languages such as Java,
                          Python, or C++.
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 ">✔️</span> Experience
                          in deploying applications to SAP BTP.
                        </div>

                        <p className="pt-8  text-xl  pb-4 font-semibold">
                          Key Features
                        </p>

                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 ">✔️</span>
                          SAP Cloud Platform
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600te  ">✔️</span>
                          Application Development
                        </div>
                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Integration
                        </div>
                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Database and Data Management
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Security and Identity Management
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Analytics and Reporting
                        </div>
                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>IoT and Big
                          Data
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          DevOps and Continuous Integration/Deployment (CI/CD)
                        </div>
                      </div>

                      <div className="flex flex-col md:w-[50%]">
                        <div className=" rounded-md px-4 pb-4 ">
                          <p className="pt-8 pb-4 text-xl font-semibold">
                            Skills Covered
                          </p>
                          <div className="flex md:grid flex-wrap md:grid-cols-2 flex-col gap-5">
                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              API Management
                            </div>
                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              Cloud Integration
                            </div>

                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              Cloud Transport Management
                            </div>

                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              Integration Advisor
                            </div>

                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              Integration Assessment
                            </div>

                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              SAP Integration Suite
                            </div>
                            <div className="border-2 rounded-md border-blue-600 text-center px-2 py-2 text-buttonBlue">
                              Trading Partner Management
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full md:flex-row flex-col  gap-4 justify-center">
                      <div className="flex flex-col  md:w-[50%]">
                        <p className="pt-8 pb-4 text-xl  font-semibold">
                          Benefits
                        </p>

                        <div className="flex  gap-1  ">
                          <span className="text-blue-600   ">✔️</span>
                          Accelerate innovation to withstand changing market
                          conditions
                        </div>

                        <div className="flex   gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Deliver innovation that works with your business
                          processes
                        </div>
                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 ">✔️</span>
                          Rely on modern technology and proven best practices
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Leverage SAP data effectively
                        </div>
                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          Run confidently in the cloud with peace of mind
                        </div>
                      </div>
                      <div className="flex flex-col  md:w-[50%]"></div>
                    </div>
                    <div>
                      <InsideCourse />
                    </div>
                  </div>

                  {/* tabsssssssssssssssssssssssssssssssssssssssss */}
                </div>
                <div className="bg-white px-5   w-full   pb-8  rounded-xl">
                  <p className="mt-9 text-2xl font-bold   mb-4">Curriculum</p>
                  <div className="bg-white flex-1  w-full   pb-8  rounded-xl">
                    {" "}
                    <div className="w-full ">
                      <Accordion
                        question="SAP Business Technology Platform"
                        answer="Describing cloud computing concepts, the need for cloud computing, and where SAP BTP fits in "
                        answer2="Understanding the SAP BTP account model and commercial model"
                        answer3="Recognizing the importance of the SAP BTP, Cloud Foundry environment, and its architecture and
              components"
                      />
                    </div>
                    <div>
                      <Accordion
                        question="Web Development Standards"
                        answer="Understanding web development standards"
                        answer2="Using APIs and the importance of REST and OData"
                        answer3="Working with JSON and YAML data formats"
                        answer4="Building a twelve-factor app"
                      />
                    </div>
                    <div>
                      <Accordion
                        question="SAP Cloud Application Programming Model"
                        answer="Understanding SAP Business Application Studio"
                        answer2="Understanding the SAP Cloud Application Programming Model Building and deploying SAP Cloud
              Application Programming Model applications using Cloud Foundry command-line tools"
                      />
                    </div>
                    <div>
                      {" "}
                      <Accordion
                        question="Connectivity"
                        answer="Consuming external OData service in an SAP Cloud Application Programming Model application"
                        answer2="Creating SAP BTP destination services"
                        answer3="Understanding cloud connector"
                        answer4="Recognizing the role of the SAP BTP connectivity service"
                      />
                    </div>
                    <div>
                      {" "}
                      <Accordion
                        question="SAP Fiori Elements"
                        answer="Understanding SAPUI5, SAP Fiori, and SAP Fiori elements"
                        answer2="Uncovering the inspiration for SAP Fiori elements"
                        answer3="Recognizing various floorplans and their use cases within SAP Fiori elements"
                        answer4="Using the draft functionality in SAP Cloud Application Programming Model applications"
                        answer5="Creating SAP Fiori elements apps using SAP Business Application Studio Using annotations"
                      />
                    </div>
                    <div>
                      {" "}
                      <Accordion
                        question="Authorization and Trust Management"
                        answer="Understanding how to add authentication"
                        answer2="Exploring authorization scopes, roles, and role collections"
                        answer3="Using techniques to require authorizations"
                        answer4="Working with AppRouter and understanding its role in authentication"
                      />
                    </div>
                    <div>
                      {" "}
                      <Accordion
                        question="Continuous Integration and Delivery"
                        answer="Understanding the CI/CD process"
                        answer2="Discovering various CI/CD tools"
                        answer3="Configuring the CI/CD pipeline for your SAP Cloud Application Programming Model application in SAP
              BTP"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white px-5 md:px-6 w-full   pb-8  rounded-xl">
                  {" "}
                  <p className="mt-9 text-2xl font-bold   mb-4">OutComes</p>
                  <div className=" flex  w-full flex-col">
                    <div className="flex   gap-1   ">
                      <span className="">✔️</span>
                      Dive into the core features and functionalities of SAP BTP
                      and explore how it can revolutionize your organization's
                      digital capabilities.
                    </div>
                    <div className="flex  gap-1   ">
                      <span className="text-blue-600 t">✔️</span>
                      Discover how to leverage the power of data and analytics
                      within SAP BTP to make informed business decisions and
                      drive growth.
                    </div>
                    <div className="flex gap-1    ">
                      <span className="text-blue-600 ">✔️</span>
                      Harness the potential of AI technologies integrated into
                      SAP BTP to automate processes, enhance customer
                      experiences, and unlock new opportunities.
                    </div>
                    <div className="flex gap-1    ">
                      <span className="text-blue-600 ">✔️</span>
                      Learn how to develop intelligent applications using SAP
                      BTP's robust application development tools, enabling you
                      to create tailored solutions for your organization's
                      unique needs.
                    </div>
                    <div className="flex gap-1    ">
                      <span className="text-blue-600 ">✔️</span>
                      Explore the automation and integration capabilities of SAP
                      BTP and learn how to streamline your business processes
                      for increased efficiency and agility.
                    </div>
                  </div>
                </div>
                <div className=" px-5 md:px-6 w-full bg-white  pb-8  rounded-xl">
                  {" "}
                  <p className="mt-9 text-2xl font-bold   mb-4">
                    Certification
                  </p>
                  <div className="md:bg-white   pb-8 w-full  rounded-xl">
                    <div className="flex w-full gap-8   flex-col md:flex-row justify-center">
                      <div className="md:w-[50%]  flex flex-col justify-start  pt-2">
                        <p className="">
                          Completion of course provides necessary knowledge:
                        </p>
                        <div className="flex pt-4 gap-1    ">
                          <span className="text-blue-600 ">✔️</span>
                          To become an SAP consultant to work with SAP Extension
                          Suite products and tools
                        </div>

                        <div className="flex pt-1 gap-1   ">
                          <span className="text-blue-600 ">✔️</span>
                          To attempt &quot;SAP Certified Development Associate –
                          SAP Extension Suite&quot; exam certification
                        </div>

                        <p className="pt-4 ">
                          Once you successfully complete the SAP BTP Extension
                          course, bSkilling will provide you with an industry-
                          recognized course completion certificate which will
                          have a lifelong validity.
                        </p>
                      </div>
                      <div className="md:w-[50%] flex items-center justify-center">
                        <img
                          src="/125.jpg"
                          className="max-w-full shadow-lg rounded-md max-h-full"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-5 md:px-6 w-full   pb-8  rounded-xl">
                  {" "}
                  <p className="mt-9 text-2xl font-bold   mb-4">FAQs</p>
                  <div className="bg-white  w-full pt-2  pb-8  rounded-xl">
                    <div>
                      <AccordionFaq
                        question="What is SAP BTP?"
                        answer="SAP BTP is a unified, cloud-based platform that provides a wide
                        range of services for application development, data
                        management, and business analytics. It is a subscription-based
                        service that can be used to build and deploy applications,
                        manage data, and analyze business data."
                      />
                    </div>
                    <div>
                      <AccordionFaq
                        question="What are the benefits of using SAP BTP?"
                        answer="SAP BTP offers a number of benefits, including:

                        A unified platform: SAP BTP provides a single platform for all of
                        your application development, data management, and business
                        analytics needs. This can help to simplify your IT environment
                        and reduce costs."
                        answer2="A wide range of services: SAP BTP offers a wide range of
                        services, including: "
                        answer3="Application development services: SAP BTP provides a variety of
                        tools and services for developing and deploying applications.  "
                        answer4="Data management services: SAP BTP provides a variety of tools
                        and services for managing data.  "
                        answer5="Business analytics services: SAP BTP provides a variety of tools
                        and services for analyzing business data."
                        answer6="A global reach: SAP BTP is available in a variety of regions
                        around the world, which can help you to reach a wider audience
                        with your applications."
                        answer7="A secure platform: SAP BTP is a secure platform that meets the
                        highest security standards. This can help you to protect your
                        data and applications.
                        "
                      />
                    </div>
                    <div>
                      <AccordionFaq
                        question="How do I get started with SAP BTP?"
                        answer="To get started with SAP BTP, you will need to create an account
                        and choose a subscription plan. Once you have created an
                        account, you can start using the services that are included in
                        your plan. "
                      />
                    </div>
                    <div>
                      <AccordionFaq
                        question="Where can I learn more about SAP BTP?"
                        answer="You can learn more about SAP BTP by visiting the SAP website. The website includes a variety of resources, including: "
                        answer2="Documentation: The SAP website includes documentation for all of the services that are available on SAP BTP. "
                        answer3="Training: The SAP website offers a variety of training courses on SAP BTP. "
                        answer4="Support: The SAP website includes a variety of support resources, including: "
                        answer5="1. Online support: The SAP website includes a knowledge base and a forum where you can ask questions and get help from SAP experts."
                        answer6="2. Phone support: SAP offers phone support for SAP BTP customers"
                      />
                    </div>

                    <div>
                      <AccordionFaq
                        question="What are the requirements to learn SAP BTP?"
                        answer="The prerequisites for SAP BTP vary depending on the services you want to use. However, some common prerequisites include:"
                        answer2="A computer with a recent operating system: SAP BTP can be accessed from a variety of devices, including computers, tablets, and smartphones. However, you will need to have a computer with a recent operating system, such as Windows 10 or macOS Catalina "
                        answer3="An internet connection: SAP BTP is a cloud-based platform, so you will need an internet connection to access it."
                        answer4="A web browser: SAP BTP can be accessed from a variety of web browsers, such as Chrome, Firefox, and Edge.                        "
                        answer5="A text editor: You may need to use a text editor to edit files on SAP BTP. "
                        answer6="A programming language: If you want to develop applications on SAP BTP, you will need to know a programming language, such as Java, Python, or Node.js."
                      />
                    </div>
                  </div>
                </div>
                {/* first sections second card */}
              </div>

              {/* side tab content here */}
              <div className="md:w-[350px]  md:min-h-[1240px]  flex justify-center">
                <div className="w-[100%] flex gap-5 flex-col items-center ">
                  <div className="w-full  bg-white  h-fit rounded-xl flex flex-col   items-center ">
                    <div className="mt-8">
                      <p className="text-center  text-black font-semibold">
                        {" "}
                        <span className=" font-bold text-xl text-blue-600 -top-[10px] -right-1 relative">
                          ₹
                        </span>{" "}
                        <span className="font-bold text-start text-blue-600 text-3xl">
                          99,999
                        </span>
                      </p>
                      <p className="text-center flex  text-slate-500 font-semibold">
                        <span className=" stroke-slate-900 text-2xl">
                          <span className="text-xl font-bold  -top-[5px] -right-1  relative">
                            ₹
                          </span>{" "}
                          <span className="line-through text-xl">
                            {" "}
                            1,24,998
                          </span>
                        </span>
                        <span className=" text-slate-500 ml-2 mt-1 text-xl">
                          25% Off
                        </span>
                      </p>
                    </div>
                    <div>
                      <button className="bg-buttonBlue text-white px-9 py-2 font-semibold text-xl mt-4">
                        <span>Enrol Me</span>
                      </button>
                    </div>
                    <div className="text-center mt-4 pb-8"></div>
                  </div>
                  <div className="flex  shadow-md w-full bg-white pb-12 pt-8 rounded-xl flex-col items-center  gap-5">
                    <div className="px-5">
                      <p className="pt-3 pb-4 text-xl text-left  font-semibold">
                        Upcoming Batches
                      </p>

                      <div className="flex m text-blue-600  text-left gap-1 ">
                        17th Jun - 2nd Jul (9am - 2pm)
                      </div>
                      <div className="flex m text-blue-600   text-left gap-1 ">
                        5th Jul - 12th Jul (9am - 2pm)
                      </div>
                      <div className="flex m text-blue-600  text-left gap-1 ">
                        22nd Jul - 6th Aug (9am - 2pm)
                      </div>
                    </div>
                  </div>
                  <div className="flex  shadow-md w-full bg-white pb-6 pt-5  rounded-xl   ">
                    <div className="flex px-2 w-full flex-col">
                      <p className="text-center pt-3 pb-4 text-xl  font-semibold ">
                        Contact Us
                      </p>

                      <div className="flex gap-2 justify-center  ">
                        <div className="text-left text-xl  ">
                          {" "}
                          +91-9845348601
                        </div>
                        <div className="flex ">
                          <div className="flex justify-center items-center">
                            <BsTelephone color="blue" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  shadow-md w-full bg-white pb-12 pt-5  rounded-xl flex-col justify-center items-center gap-5">
                    <div>
                      <p className="  pt-3 pb-4 text-xl t  font-semibold text-center">
                        Request More Information
                      </p>
                      <DropAQueryForm />
                    </div>
                  </div>

                  <div className="flex   w-full  pb-12 pt-5  rounded-xl flex-col justify-center items-center gap-5">
                    <div>
                      <p className="  pt-3 pb-4 text-xl t  font-semibold text-center">
                        Related Courses
                      </p>
                      <div className="w-fit">
                        {" "}
                        <CourseSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
};
export default SapBtp;
