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
interface accord {
  question: string;
  answer: string;
}
const SapBtp = () => {
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

  const tabs = [
    {
      icon: "Overview",
      label: (
        <div>
          <p className=" pt-5 text-sm ">
            SAP BTP is a cutting-edge cloud-based platform that empowers
            businesses to build, deploy, and manage intelligent applications.
            With its diverse range of services, including data and analytics,
            artificial intelligence, application development, automation, and
            integration, SAP BTP provides the essential tools and capabilities
            to propel your organization forward. <br /> <br /> Are you an SAP
            BTP consultant eager to expand your knowledge and master the art of
            building and deploying intelligent applications? Look no further
            than our specialized course tailored for existing SAP BTP
            consultants.
          </p>
          <div className="flex w-full md:flex-row gap-7 flex-col  justify-center">
            <div className="flex flex-col   md:w-[50%]">
              <p className="pt-8 pb-4 text-xl md:text-left font-semibold ">
                Eligibility
              </p>
              <p className="text-justify text-sm  ">
                This course is ideal for developers, IT professionals, and
                business users seeking to unlock the full potential of SAP BTP.
                To make the most of this course, we recommend having the
                following prerequisites:
                <br />
              </p>

              <div className="flex gap-1 pt-2 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>Basic
                understanding of cloud computing concepts.
              </div>

              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>Familiarity
                with programming languages such as Java, Python, or C++.
              </div>
              <div className="flex gap-1 text-sm  ">
                <span className="text-blue-600 text-xs">✔️</span> Experience in
                deploying applications to SAP BTP.
              </div>

              <p className="pt-8  text-xl  pb-4 font-semibold">Key Features</p>

              <div className="flex  gap-1 text-sm  ">
                <span className="text-blue-600 text-xs">✔️</span>
                Engaging lectures presented by seasoned experts.
              </div>

              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600te text-xs ">✔️</span>
                Interactive quizzes to test your understanding and reinforce key
                concepts.
              </div>
              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>
                Practical exercises to apply your knowledge in real-world
                scenarios.
              </div>
              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>
                An opportunity to showcase your skills through a final project.
              </div>

              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>A dedicated
                forum where you can seek guidance from the instructor and
                collaborate with fellow students.
              </div>
            </div>

            <div className="flex flex-col md:w-[50%]">
              <div className=" rounded-md px-4 pb-4 ">
                <p className="pt-8 pb-4 text-xl font-semibold">
                  Skills Covered
                </p>

                <div className="flex  gap-3 mb-2 text-sm">
                  <span className="text-blue-600 text-xs ">✔️</span>
                  Skill 1
                </div>

                <div className="flex   gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs ">✔️</span>
                  Skill 2
                </div>
                <div className="flex  gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs">✔️</span>
                  Skill 3
                </div>
                <div className="flex  gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs">✔️</span>
                  Skill 4
                </div>
                <div className="flex  gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs">✔️</span>
                  Skill 5
                </div>
                <div className="flex  gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs">✔️</span>
                  Skill 6
                </div>
                <div className="flex  gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs">✔️</span>
                  Skill 7
                </div>
                <div className="flex  gap-3 mb-2  text-sm ">
                  <span className="text-blue-600 text-xs">✔️</span>
                  Skill 8
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full md:flex-row flex-col  gap-4 justify-center">
            <div className="flex flex-col  md:w-[50%]">
              <p className="pt-4 pb-4 text-xl font-semibold">Benefits</p>

              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>
                Acquire the necessary skills to develop and deploy intelligent
                applications.
              </div>

              <div className="flex   gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>
                Gain practical, hands-on experience utilizing the diverse range
                of SAP BTP services.
              </div>
              <div className="flex  gap-1 text-sm ">
                <span className="text-blue-600 text-xs">✔️</span>
                Learn how to seamlessly deploy your applications to SAP BTP.
              </div>
            </div>
            <div className="flex flex-col  md:w-[50%]"></div>
          </div>
          <div>
            <InsideCourse />
          </div>
        </div>
      ),
      id: 0,
    },
    {
      icon: "Curriculum",
      label: (
        <div className="bg-white flex-1  w-full pt-8  pb-8  rounded-xl">
          {" "}
          <div className="w-full ">
            <Accordion question="Lesson 1" answer="Chapter " />
          </div>
          <div>
            <Accordion question="Lesson 2" answer="Chapter " />
          </div>
          <div>
            <Accordion question="Lesson 3" answer="Chapter " />
          </div>
        </div>
      ),
      id: 1,
    },
    {
      icon: "Outcomes",
      label: (
        <div className="px-5 flex pt-8 w-full flex-col">
          <div className="flex  gap-1  text-sm ">
            <span className="text-xs">✔️</span>
            Dive into the core features and functionalities of SAP BTP and
            explore how it can revolutionize your organization's digital
            capabilities.
          </div>
          <div className="flex pt-4 gap-1  text-sm ">
            <span className="text-blue-600 text-xs">✔️</span>
            Discover how to leverage the power of data and analytics within SAP
            BTP to make informed business decisions and drive growth.
          </div>
          <div className="flex pt-4 gap-1  text-sm ">
            <span className="text-blue-600 text-xs">✔️</span>
            Harness the potential of AI technologies integrated into SAP BTP to
            automate processes, enhance customer experiences, and unlock new
            opportunities.
          </div>
          <div className="flex pt-4 gap-1 text-sm  ">
            <span className="text-blue-600 text-xs">✔️</span>
            Learn how to develop intelligent applications using SAP BTP's robust
            application development tools, enabling you to create tailored
            solutions for your organization's unique needs.
          </div>
          <div className="flex pt-4 gap-1 text-sm  ">
            <span className="text-blue-600 text-xs">✔️</span>
            Explore the automation and integration capabilities of SAP BTP and
            learn how to streamline your business processes for increased
            efficiency and agility.
          </div>
        </div>
      ),
      id: 2,
    },
    {
      icon: "Certification",
      label: (
        <div className="bg-white md:px-12 pt-8 w-full pb-8 rounded-xl">
          <div className="flex w-full gap-8 pt-4 flex-col md:flex-row justify-center">
            <div className="md:w-[50%] flex justify-start  pt-8">
              <div className=" text-justify text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                blanditiis rerum, pariatur odio est fuga quae facere porro
                placeat autem. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. At blanditiis rerum, pariatur odio est fuga
                quae facere porro placeat autem. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. At blanditiis rerum, pariatur odio
                est fuga quae facere porro placeat autem. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. At blanditiis rerum, pariatur
                odio est fuga quae facere porro placeat autem. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. At blanditiis
                rerum, pariatur odio est fuga quae facere porro placeat autem.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                blanditiis rerum, pariatur odio est fuga quae facere porro
                placeat autem. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. At blanditiis rerum, pariatur odio est fuga
                quae facere porro placeat autem.
              </div>
            </div>
            <div className="md:w-[50%] flex items-center justify-center">
              <img
                src="/125.jpg"
                className="max-w-full rounded-md max-h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      ),
      id: 3,
    },
    {
      icon: "FAQs",
      label: (
        <div className="bg-white md:px-12 w-full pt-8  pb-8  rounded-xl">
          <div>
            <Accordion
              question="Question 1"
              answer="Lorum ipsum asd dkaf asdlkk asdiwid asmdnadad"
            />
          </div>
          <div>
            <Accordion
              question="Question 2"
              answer="Lorum ipsum asd dkaf asdlkk asdiwid asmdnadad"
            />
          </div>
          <div>
            <Accordion
              question="Question 3"
              answer="Lorum ipsum asd dkaf asdlkk asdiwid asmdnadad"
            />
          </div>
        </div>
      ),
      id: 4,
    },
  ];
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
              <div className="md:w-[100%] md:basis-[90%] md:mt-28 mt-12  ">
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
                  Unlock the Power of SAP Business Technology Platform (SAP BTP)
                  <br />
                  for Successful Digital Transformations
                </motion.div>

                <motion.div
                  // initial={{ right: "300px" }}
                  // whileInView={{ right: "0px" }}
                  // animate={{ x: 2 }}
                  // viewport={{ once: true }}
                  // transition={{ ease: "easeOut", duration: 2 }}
                  className=" flex flex-col md:flex-row pt-7 pb-7 md:gap-6 items-center"
                >
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
                    36 hrs
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
        <section className="md:relative md:-top-14   lg:-top-24 ">
          <motion.div
            initial={{ y: "200px" }}
            whileInView={{ y: "0px" }}
            animate={{ y: 10 }}
            viewport={{ once: true }}
            id="parent"
            className=" flex  flex-col -violet-600 w-full 0   md:flex-row justify-center  gap-10"
          >
            {/* main text content here */}
            <div className="  flex flex-col md:flex-row gap-4  md:basis-[90%] ">
              <div className="flex flex-col md:flex-1  gap-3 h-fit    ">
                <div className="bg-white px-5 md:px-6 w-full min-h-[1220px]  pb-8  rounded-xl">
                  {/* tabsssssssssssssssssssssssssssssssssssssssss */}

                  <nav className="pb-2 w-full">
                    <ul className="grid grid-cols-3 md:flex w-full justify-center mt-5  flex-row">
                      {tabs.map((item) => (
                        <li
                          key={item.icon}
                          className={`list  
                         ${
                           item.id === selectedTabIndex
                             ? "  py-5  text-center text-buttonBlue font-bold rounded-sm "
                             : "relative py-5  pb-8   text-center "
                         }
                      `}
                          onClick={() => {
                            setSelectedTab(item);
                            setSelectedTabIndex(item.id);
                          }}
                        >
                          <p className="w-full  text-center">
                            {" "}
                            {`${item.icon}`}
                          </p>
                          {item.id === selectedTabIndex ? (
                            <motion.div
                              className="absolute bottom-[-1px] left-0 right-0 w-full h-[3px] rounded-lg bg-buttonBlue"
                              layoutId="underline"
                            />
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <main className="">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedTab ? selectedTab.icon : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-[100%] px-4 "
                      >
                        {selectedTab ? selectedTab.label : ""}
                      </motion.div>
                    </AnimatePresence>
                  </main>
                </div>
                {/* first sections second card */}
                {/* <div className="border md:container md:mx-auto px-24">
                  <CourseSlider />
                </div> */}
              </div>

              {/* side tab content here */}
              <div className="md:w-[450px]  md:min-h-[1240px]  flex justify-center">
                <div className="w-[100%] flex gap-5 flex-col items-center ">
                  <div className="w-full  bg-white  h-fit rounded-xl flex flex-col   items-center ">
                    <div className="mt-8">
                      <p className="text-center  text-black font-semibold">
                        {" "}
                        <span className=" font-bold text-xl text-blue-600 -top-[10px] -right-1 relative">
                          ₹
                        </span>{" "}
                        <span className="font-bold text-start text-blue-600 text-3xl">
                          600
                        </span>
                      </p>
                      <p className="text-center flex  text-slate-500 font-semibold">
                        <span className=" stroke-slate-900 text-2xl">
                          <span className="text-xl font-bold  -top-[5px] -right-1  relative">
                            ₹
                          </span>{" "}
                          <span className="line-through text-xl"> 700</span>
                        </span>
                        <span className=" text-slate-500 ml-2 mt-1 text-xl">
                          70% Off
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
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <div>
          <div className=" max-w-[90%] m-auto  px-3 pb-8 pt-8 md:pt-0 relative md:-top-14 ">
            <p className=" pt-3 pb-4 text-xl t  font-semibold text-left">
              Related Courses
            </p>
            <CourseSlider />
          </div>
        </div>
      </section>
    </>
  );
};
export default SapBtp;
