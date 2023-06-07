import { BsPeople, BsBookmarkCheck, BsFillPeopleFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaCalendarTimes, FaMedal } from "react-icons/fa";
import { motion, spring } from "framer-motion";
import { GiPriceTag } from "react-icons/gi";
import Accordion from "components/accordion";
import Head from "next/head";
interface accord {
  question: string;
  answer: string;
}
const SapBtp = () => {
  const transition = { type: "spring", duration: 3 };
  const transition2 = { type: "spring", duration: 1 };
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
            <div className="absolute   w-full md:px-14 md:gap-14  flex flex-col md:flex-row justify-center top-0 text-white">
              <div className="md:w-[60%] mt-28">
                <motion.div
                  initial={{ y: "200px" }}
                  whileInView={{ y: "0px" }}
                  animate={{ y: 10 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="bg-glass text-2xl font-semibold"
                >
                  Learn the skills you need to build and deploy intelligent{" "}
                  <br />
                  applications on SAP Business Technology Platform
                </motion.div>

                <motion.div
                  initial={{ right: "300px" }}
                  whileInView={{ right: "0px" }}
                  animate={{ x: 2 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 2 }}
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

                <div className="mt-2  w-[100%]">
                  SAP Business Technology Platform (SAP BTP) is a cloud-based
                  platform that enables businesses to build, deploy, and manage
                  intelligent applications. SAP BTP provides a wide range of
                  services, including data and analytics, artificial
                  intelligence, application development, automation, and
                  integration.
                  <br />
                  Business transformations can be challenging, but digital
                  transformations are even more difficult. According to
                  McKinsey, less than 20% of companies embarking on a digital
                  transformation journey achieve success. One of the primary
                  reasons for this is the risk associated with data in digital
                  transformation projects. Many of these initiatives fail to
                  meet their expected outcomes because the data involved is not
                  suitable for the intended purpose. Understand the different
                  services that SAP BTP offers.
                </div>
              </div>

              {/* //////////////////////////////////////rating and course name section //////////////////////////////////////////////////////////*/}

              <motion.div
                initial={{ left: "360px" }}
                whileInView={{ left: "8px" }}
                transition={{ ...transition, type: "tween" }}
                viewport={{ once: true }}
                className="md:w-[20%] h-min-[50%]   relative  mt-28"
              >
                <div className="w-full bg-white h-fit rounded-md flex flex-col   items-center absolute">
                  <div className="mt-8">
                    <p className="text-center  text-black font-semibold">
                      {" "}
                      Actual Price :{" "}
                      <span className="font-semibold">23,456/-</span>
                    </p>
                    <p className="text-center text-black font-semibold">
                      Discount Price :{" "}
                      <span className="font-semibold">23,456/-</span>
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
        <section className="flex justify-center px-44 pb-4 relative md:-top-16  lg:-top-24 ">
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
                <p className="pt-8 pb- text-3xl font-semibold">
                  SAP Business Technology Platform
                </p>
                <p className="pt-8 pb-4 text-xl font-semibold">Eligibility</p>
                <p className="ml-4 ">
                  This course is designed for an already existing SAP BTP
                  consultant who wants to learn about SAP BTP and how to use it
                  to build and deploy intelligent applications. The course is
                  suitable for developers, IT professionals, and business users.
                </p>

                <p className="pt-8 pb-4 text-xl font-semibold">Prerequisites</p>
                <div className="flex ml-4 gap-1 ">
                  <span>•</span>Basic knowledge of cloud computing
                </div>

                <div className="flex ml-4  gap-1 ">
                  <span>•</span>Basic knowledge of programming languages such as
                  Java, Python, or C++
                </div>
                <div className="flex ml-4 gap-1 ">
                  <span>•</span>Deploy your application to SAP BTP
                </div>

                <div className="flex ml-4 gap-1 ">
                  <span>•</span>Deploy your application to SAP BTP
                </div>

                <p className="pt-8 pb-4 text-xl font-semibold">Benefits</p>
                <div className="flex ml-4 gap-1 ">
                  <span>•</span>Learn the skills you need to build and deploy
                  intelligent applications
                </div>

                <div className="flex ml-4  gap-1 ">
                  <span>•</span>Gain hands-on experience using SAP BTP services
                </div>
                <div className="flex ml-4 gap-1 ">
                  <span>•</span>Deploy your application to SAP BTP
                </div>

                <p className="pt-8  text-xl pb-4 font-semibold">Resources</p>
                <p className="flex  gap-1 ">
                  The course will provide access to a variety of resources,
                  including Lectures , Quizzes , Exercises and A final project.
                  A forum where you can ask questions and get help from the
                  instructor and other students
                </p>

                <p className="pt-8 pb-4 text-xl font-semibold">Assessment</p>
                <div className="flex ml-4 gap-1 ">
                  <span>•</span>The course will be assessed through a
                  combination of quizzes, exercises, and a final project.
                </div>

                <p className="font-normal mt-4">
                  Enrol in this course today and start building your skills in
                  SAP BTP!
                </p>
              </div>
              {/* first sections second card */}
              <div className="bg-white px-12 w-full   pb-8  rounded-xl">
                <div className="pt-8 text-xl font-semibold">Course Content</div>
                <div>
                  <Accordion
                    question="Lesson 1"
                    answer="Your answer goes here"
                  />
                </div>
                <div>
                  <Accordion
                    question="Lesson 2"
                    answer="Your answer goes here"
                  />
                </div>
                <div>
                  <Accordion
                    question="Lesson 3"
                    answer="Your answer goes here"
                  />
                </div>
              </div>
            </div>

            {/* side tab content here */}
            <div className="w-[39%]  flex justify-center">
              <div className="w-[100%] flex gap-8 flex-col items-center ">
                <div className="flex  shadow-md w-full bg-white pb-12 pt-5  rounded-xl flex-col justify-center items-center gap-5">
                  <div className="px-5">
                    <p className="pt-3 pb-4  text-center text-xl font-semibold">
                      Learning Outcomes
                    </p>

                    <div className="flex ml-4  gap-1 ">
                      <span>•</span>Understand the different services that SAP
                      BTP offers
                    </div>
                    <div className="flex ml-4 gap-1 ">
                      <span>•</span>Use the SAP BTP services to build a
                      real-world application
                    </div>
                    <div className="flex ml-4 gap-1 ">
                      <span>•</span> Deploy your application to SAP BTP
                    </div>
                  </div>
                </div>
                <div className="flex  shadow-md w-full bg-white pb-12 pt-8 rounded-xl flex-col justify-center items-center gap-5">
                  <div className="px-5">
                    <p className="pt-3 pb-4 text-xl text-center text-xl font-semibold">
                      Upcoming Batches
                    </p>

                    <div className="flex ml-4 text-buttonBlue gap-1 ">
                      17th June - 2nd July (9am - 2pm) | 5th July - 12th July
                      (9am - 2pm) | 22nd July - 6th August (9am - 2pm)
                    </div>
                    <div className="flex ml-4 mt-4 gap-1 text-buttonBlue ">
                      17th June - 2nd July (9am - 2pm) | 5th July - 12th July
                      (9am - 2pm) | 22nd July - 6th August (9am - 2pm)
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
