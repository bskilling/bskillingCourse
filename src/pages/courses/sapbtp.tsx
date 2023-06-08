import { BsPeople, BsBookmarkCheck, BsFillPeopleFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaCalendarTimes, FaMedal } from "react-icons/fa";
import { AnimatePresence, motion, spring } from "framer-motion";
import { GiPriceTag } from "react-icons/gi";
import Accordion from "components/accordion";
import Head from "next/head";
import { useState } from "react";
interface accord {
  question: string;
  answer: string;
}
const SapBtp = () => {
  const transition = { type: "spring", duration: 3 };
  const transition2 = { type: "spring", duration: 1 };

  const tabs = [
    {
      icon: "OverView",
      label: (
        <div>
          <p className=" pt-8">
            SAP BTP is a cutting-edge cloud-based platform that empowers
            businesses to build, deploy, and manage intelligent applications.
            With its diverse range of services, including data and analytics,
            artificial intelligence, application development, automation, and
            integration, SAP BTP provides the essential tools and capabilities
            to propel your organization forward.
          </p>
          <p className="pt-8 pb-4 text-xl font-semibold">Eligibility</p>
          <p className="ml-4 ">
            Are you an SAP BTP consultant eager to expand your knowledge and
            master the art of building and deploying intelligent applications?
            Look no further than our specialized course tailored for existing
            SAP BTP consultants. This course is ideal for developers, IT
            professionals, and business users seeking to unlock the full
            potential of SAP BTP.
          </p>

          <p className="pt-8 pb-4 text-xl font-semibold">Prerequisites</p>
          <p className=" ">
            To make the most of this course, we recommend having the following
            prerequisites:
          </p>

          <div className="flex ml-4 gap-1 ">
            <span>•</span>Basic understanding of cloud computing concepts.
          </div>

          <div className="flex ml-4  gap-1 ">
            <span>•</span>Familiarity with programming languages such as Java,
            Python, or C++.
          </div>
          <div className="flex ml-4 gap-1 ">
            <span>•</span> Experience in deploying applications to SAP BTP.
          </div>

          <p className="pt-8 pb-4 text-xl font-semibold">
            Benefits of the Course
          </p>
          <p className=" ">
            Enroll in our course and reap the following benefits:
          </p>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>Acquire the necessary skills to develop and deploy
            intelligent applications.
          </div>

          <div className="flex ml-4  gap-1 ">
            <span>•</span>Gain practical, hands-on experience utilizing the
            diverse range of SAP BTP services.
          </div>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>Learn how to seamlessly deploy your applications to
            SAP BTP.
          </div>

          <p className="pt-8  text-xl pb-4 font-semibold">Abundant Resources</p>
          <p className=" ">
            When you join our course, you'll have access to an array of valuable
            resources, including:
          </p>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>Engaging lectures presented by seasoned experts.
          </div>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>Engaging lectures presented by seasoned experts.
          </div>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>Interactive quizzes to test your understanding and
            reinforce key concepts.
          </div>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>Practical exercises to apply your knowledge in
            real-world scenarios.
          </div>
          <div className="flex ml-4 gap-1 ">
            <span>•</span>An opportunity to showcase your skills through a final
            project.
          </div>

          <div className="flex ml-4 gap-1 ">
            <span>•</span> A dedicated forum where you can seek guidance from
            the instructor and collaborate with fellow students.
          </div>

          <p className="pt-8 pb-4 text-xl font-semibold">Assessment Method</p>
          <div className="flex ml-4 gap-1 ">
            To ensure your progress and understanding, the course will be
            assessed through a combination of quizzes, exercises, and a final
            project. This multifaceted approach guarantees a comprehensive
            evaluation of your newfound knowledge and skills.
          </div>

          <p className="font-normal mt-4">
            Don't miss out on this opportunity to enhance your expertise in SAP
            BTP. Enroll today and embark on a transformative learning journey
            that will elevate your career to new heights.
          </p>
        </div>
      ),
      id: 0,
    },
    {
      icon: "Curriculum",
      label: (
        <div className="bg-white px-12 w-full   pb-8  rounded-xl">
          <div>
            <Accordion question="Lesson 1" answer="Your answer goes here" />
          </div>
          <div>
            <Accordion question="Lesson 2" answer="Your answer goes here" />
          </div>
          <div>
            <Accordion question="Lesson 3" answer="Your answer goes here" />
          </div>
        </div>
      ),
      id: 1,
    },
    {
      icon: "Faqs",
      label: (
        <div className="bg-white px-12 w-full   pb-8  rounded-xl">
          <div>
            <Accordion question="Question One" answer="Your answer goes here" />
          </div>
          <div>
            <Accordion question="Question Two" answer="Your answer goes here" />
          </div>
          <div>
            <Accordion
              question="Question Three"
              answer="Your answer goes here"
            />
          </div>
        </div>
      ),
      id: 2,
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
          content="Learn the skills you need to build and deploy intelligent
          applications on SAP Business Technology Platform"
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
        <section>
          <div className="relative">
            <div
              className="md:h-[650px] h-[1200px] brightness-50"
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
            <div className="absolute   w-full    flex flex-col md:flex-row justify-center top-0 text-white">
              <div className="md:w-[55%] mt-28 mr-16 ">
                <motion.div
                  // initial={{ y: "200px" }}
                  // whileInView={{ y: "0px" }}
                  // animate={{ y: 10 }}
                  // viewport={{ once: true }}
                  // transition={{ ease: "easeOut", duration: 2 }}
                  className="bg-glass text-2xl font-semibold"
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
                  <div className="flex">
                    {" "}
                    <div className="flex  mt-1">
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
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-300 dark:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <div className="ml-2">(12) reviews</div>
                  </div>
                  <p>49523 Learners</p>
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

                <div className="mt-2 font-base  w-[100%]">
                  Are you ready to navigate the complex landscape of digital
                  transformations with confidence? Introducing our comprehensive
                  course on SAP Business Technology Platform (SAP BTP), designed
                  to equip students like you with the knowledge and skills to
                  drive successful business transformations in the digital age.{" "}
                  <br />
                  Gain a competitive edge and increase your chances of digital
                  transformation success with our comprehensive course on SAP
                  BTP. Developed by industry experts, this program will
                  demystify the complexities of digital transformations and
                  equip you with the essential knowledge and skills to harness
                  the full potential of SAP BTP.
                </div>
              </div>

              {/* //////////////////////////////////////rating and course name section //////////////////////////////////////////////////////////*/}

              <motion.div
                // initial={{ left: "360px" }}
                // whileInView={{ left: "8px" }}
                // transition={{ ...transition, type: "tween" }}
                // viewport={{ once: true }}
                className="md:w-[20%] h-min-[50%] mr-16  relative  mt-28"
              >
                <p className=" pb-5 text-3xl font-semibold">
                  SAP Business Technology Platform
                </p>
                <div className="w-full bg-white h-fit rounded-md flex flex-col   items-center absolute">
                  <div className="mt-8">
                    <p className="text-center  text-black font-semibold">
                      {" "}
                      <span className="text-xs font-bold text-blue-600 -top-[10px] -right-1 relative">
                        ₹
                      </span>{" "}
                      <span className="font-bold text-start text-blue-600 text-3xl">
                        600
                      </span>
                    </p>
                    <p className="text-center flex  text-slate-500 font-semibold">
                      <span className=" stroke-slate-900 text-2xl">
                        <span className="text-xs font-bold  -top-[5px] -right-1  relative">
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
                    <button className="bg-buttonBlue px-9 py-2 font-semibold text-xl mt-4">
                      <span>Enroll Me</span>
                    </button>
                  </div>
                  <div className="text-center mt-4 pb-8"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* section with banner comes here above */}
        </section>
        <section className="flex justify-center px-32 pb-4 relative md:-top-16  lg:-top-24 ">
          <motion.div
            initial={{ y: "200px" }}
            whileInView={{ y: "0px" }}
            animate={{ y: 10 }}
            viewport={{ once: true }}
            transition={{ ...transition2, type: "tween" }}
            id="parent"
            className="flex  justify-center pt-8 gap-10"
          >
            {/* main text content here */}
            <div className="flex flex-col gap-3 h-fit    w-[120%]">
              <div className="bg-white px-12 w-full  pb-8  rounded-xl">
                {/* tabsssssssssssssssssssssssssssssssssssssssss */}

                <nav>
                  <ul className="flex w-full justify-center mt-10  flex-row">
                    {tabs.map((item) => (
                      <li
                        key={item.icon}
                        className={
                          item.id === selectedTabIndex
                            ? "  py-8  text-center text-buttonBlue font-bold rounded-sm "
                            : "relative  py-8  text-center "
                        }
                        onClick={() => {
                          setSelectedTab(item);
                          setSelectedTabIndex(item.id);
                        }}
                      >
                        <p className="w-full  text-center"> {`${item.icon}`}</p>
                        {item.id === selectedTabIndex ? (
                          <motion.div
                            className="absolute bottom-[-1px] left-0 right-0 w-full h-[3px] rounded-lg bg-blue-500"
                            layoutId="underline"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>

                <main>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedTab ? selectedTab.icon : "empty"}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedTab ? selectedTab.label : ""}
                    </motion.div>
                  </AnimatePresence>
                </main>
              </div>
              {/* first sections second card */}
            </div>

            {/* side tab content here */}
            <div className="w-[60%]  flex justify-center">
              <div className="w-[100%] flex gap-8 flex-col items-center ">
                <div className="flex  shadow-md w-full bg-white pb-12 pt-5  rounded-xl flex-col justify-center items-center gap-5">
                  <div className="px-5 text-jus">
                    <p className="pt-3 pb-4  text-center text-xl font-semibold">
                      Learning Outcomes
                    </p>

                    <div className="flex  gap-1text-blue-600 text-blue-600 ">
                      Dive into the core features and functionalities of SAP BTP
                      and explore how it can revolutionize your organization's
                      digital capabilities.
                    </div>
                    <div className="flex pt-4 gap-1  text-blue-600">
                      Discover how to leverage the power of data and analytics
                      within SAP BTP to make informed business decisions and
                      drive growth.
                    </div>
                    <div className="flex pt-4 gap-1  text-blue-600">
                      Harness the potential of AI technologies integrated into
                      SAP BTP to automate processes, enhance customer
                      experiences, and unlock new opportunities.
                    </div>
                    <div className="flex pt-4 gap-1 text-blue-600 ">
                      Learn how to develop intelligent applications using SAP
                      BTP's robust application development tools, enabling you
                      to create tailored solutions for your organization's
                      unique needs.
                    </div>
                    <div className="flex pt-4 gap-1 text-blue-600">
                      Explore the automation and integration capabilities of SAP
                      BTP and learn how to streamline your business processes
                      for increased efficiency and agility.
                    </div>
                  </div>
                </div>
                <div className="flex  shadow-md w-full bg-white pb-12 pt-8 rounded-xl flex-col justify-center items-center gap-5">
                  <div className="px-5">
                    <p className="pt-3 pb-4 text-xl text-center text-xl font-semibold">
                      Upcoming Batches
                    </p>

                    <div className="flex m text-buttonBlue gap-1 ">
                      17th Jun - 2nd Jul (9am - 2pm) | 5th Jul - 12th Jul (9am -
                      2pm) | 22nd Jul - 6th Aug (9am - 2pm)
                    </div>
                    <div className="flex  mt-4 gap-1 text-buttonBlue ">
                      17th Jun - 2nd Jul (9am - 2pm) | 5th Jul - 12th Jul (9am -
                      2pm) | 22nd Jul - 6th Aug (9am - 2pm)
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col  gap-5">
                  <div className="text-xl  w-full text-left font-semibold ">
                    Related Courses
                  </div>
                  <div className="flex gap-1 text-blue-600">
                    <span>•</span>SAP Business Technology Platform Extension
                    Developer
                  </div>

                  <div className="flex gap-1 text-blue-600">
                    <span>•</span>Secure your application by using OpenID
                    Connect and Azure ADS
                  </div>
                  <div className="flex gap-1 text-blue-600">
                    <span>•</span>Troubleshooting Microsoft Azure Connectivity
                  </div>
                  <div className="flex gap-1 text-blue-600">
                    <span>•</span>Use Automated Machine Learning in Azure
                    Machine Learning
                  </div>

                  <div></div>
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
