import { BsPeople, BsBookmarkCheck } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaCalendarTimes, FaMedal } from "react-icons/fa";
import { motion, spring } from "framer-motion";
import { GiPriceTag } from "react-icons/gi";
const SapBtp = () => {
  const transition = { type: "spring", duration: 3 };
  const transition2 = { type: "spring", duration: 1 };
  return (
    <section className="bg-gray">
      <section>
        <div className="relative">
          <div
            className="h-[600px] brightness-50"
            style={{
              backgroundImage: `url(${"/bgcrs.jpg"})`,
              backgroundSize: "cover",
              objectFit: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img className="absolute  h-auto w-fit" src="/bgcrs.jpg" alt="" /> */}
          </div>
          <div className="absolute   w-full px-14  flex justify-center top-0 text-white">
            <div className="w-[50%] mt-28">
              <motion.div
                initial={{ y: "200px" }}
                whileInView={{ y: "0px" }}
                animate={{ y: 10 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="bg-glass text-2xl font-semibold"
              >
                Learn the skills you need to build and deploy intelligent <br />
                applications on SAP Business Technology Platform
              </motion.div>

              <div className="mt-8 	font-style: italic">By Bskilling</div>
              <div className="mt-2 w-[90%]">
                Systems, Applications, and Products in Data Processing. Some of
                the most common subjects covered in these courses include human
                resource software administration, database management, and
                business training.
              </div>
              <div className="flex gap-5">
                <motion.div
                  initial={{ right: "300px" }}
                  whileInView={{ right: "0px" }}
                  animate={{ x: 8 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="flex items-center"
                >
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
                </motion.div>
                <div>(12) review</div>
              </div>
            </div>

            {/* //////////////////////////////////////rating and course name section //////////////////////////////////////////////////////////*/}

            <motion.div
              initial={{ left: "360px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
              viewport={{ once: true }}
              className="w-[20%] h-min-[50%]  bg-glass2 relative rounded-md mt-28"
            >
              <div className="bg-glass w-full  flex flex-col  justify-center items-center absolute">
                <div className="mt-8">
                  <p className="text-center font-semibold">March 21,2023</p>
                  <p className="text-center font-semibold"> Virtual</p>
                </div>
                <div>
                  <button className="bg-buttonBlue px-9 py-2 font-semibold text-xl mt-8">
                    <span>Enroll</span>
                  </button>
                </div>
                <div className="text-center mt-2">
                  Enroll before 10 to get the <br /> best course offer
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* section with banner comes here above */}
      </section>
      <section className="md:container pb-20 relative -top-24 md:mx-auto">
        <motion.div
          initial={{ y: "200px" }}
          whileInView={{ y: "0px" }}
          animate={{ y: 10 }}
          viewport={{ once: true }}
          transition={{ ...transition2, type: "tween" }}
          id="parent"
          className="flex justify-center pt-8 gap-10"
        >
          {/* main text content here */}
          <div className="flex-1 shadow-md px-12 pb-8 bg-white rounded-xl w-[70%]">
            <div>
              <p className="pt-8 pb-4 text-2xl font-medium">
                About This Course
              </p>
              <p className="ml-4 ">
                SAP Business Technology Platform (SAP BTP) is a cloud-based
                platform that enables businesses to build, deploy, and manage
                intelligent applications. SAP BTP provides a wide range of
                services, including data and analytics, artificial intelligence,
                application development, automation, and integration.
              </p>
              <p className="mt-4 ml-4 ">
                Business transformations can be challenging, but digital
                transformations are even more difficult. According to McKinsey,
                less than 20% of companies embarking on a digital transformation
                journey achieve success. One of the primary reasons for this is
                the risk associated with data in digital transformation
                projects. Many of these initiatives fail to meet their expected
                outcomes because the data involved is not suitable for the
                intended purpose. Understand the different services that SAP BTP
                offers.
              </p>
              <p className="font-normal mt-4">
                Enrol in this course today and start building your skills in SAP
                BTP!
              </p>

              <p className="pt-8 pb-4 text-2xl font-medium">Benefits</p>
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

              <div>
                <p className="pt-8 pb-4 text-2xl font-medium">Audience</p>

                <div className="flex ml-4 gap-1 ">
                  This course is designed for an already existing SAP BTP
                  consultant who wants to learn about SAP BTP and how to use it
                  to build and deploy intelligent applications. The course is
                  suitable for developers, IT professionals, and business users.
                </div>
              </div>

              <p className="pt-8 pb-4 text-2xl font-medium">Prerequisites</p>
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

              <p className="pt-8 pb-4 text-2xl font-medium">
                Learning outcomes
              </p>
              <div className="flex ml-4 gap-1 ">
                <span>•</span>Upon completion of this course, you will be able
                to :-
              </div>

              <div className="flex ml-4  gap-1 ">
                <span>•</span>Understand the different services that SAP BTP
                offers
              </div>
              <div className="flex ml-4 gap-1 ">
                <span>•</span>Use the SAP BTP services to build a real-world
                application
              </div>
              <div className="flex ml-4 gap-1 ">
                <span>•</span> Deploy your application to SAP BTP
              </div>

              <p className="pt-8 pb-4 text-2xl font-medium">Course outline</p>
              <div className="flex ml-4 gap-1 ">
                <span>•</span>SAP Business Technology Platform
              </div>

              <div className="flex ml-4  gap-1 ">
                <span>•</span>Web Development Standards
              </div>
              <div className="flex ml-4 gap-1 ">
                <span>•</span>SAP Cloud Application Programming Model
              </div>

              <div className="flex ml-4 gap-1 ">
                <span>•</span>Connectivity
              </div>

              <div className="flex ml-4 gap-1 ">
                <span>•</span>Authorization and Trust Management
              </div>

              <div className="flex ml-4 gap-1 ">
                <span>•</span>Continuous Integration and Delivery
              </div>
            </div>
          </div>

          {/* side tab content here */}
          <div className="w-[25%]  flex justify-center">
            <div className="w-[100%] flex gap-8 flex-col items-center ">
              <div className="flex  shadow-md w-full bg-white py-20 rounded-xl flex-col justify-center items-center gap-5">
                <div className="flex gap-2 ">
                  <div className="mt-1">
                    <BsPeople color="gray" />
                  </div>
                  <p className="text-slate-500 min-w-[150px] font-semibold">
                    146 Learners
                  </p>
                </div>

                <div className="flex gap-2 ">
                  <div className="mt-1">
                    <GiPriceTag color="gray" />
                  </div>
                  <p className="text-slate-500 min-w-[150px] font-semibold">
                    21,545/-
                  </p>
                </div>

                <div className="flex gap-2 ">
                  <div className="mt-1">
                    <BiTime color="gray" />
                  </div>
                  <p className="text-slate-500 min-w-[150px] font-semibold">
                    3 weeks
                  </p>
                </div>

                <div className="flex gap-2 ">
                  <div className="mt-1">
                    <FaCalendarTimes color="gray" />
                  </div>
                  <p className="text-slate-500 min-w-[150px] font-semibold">
                    3-4 hours per week
                  </p>
                </div>

                <div className="flex gap-2 ">
                  <div className="mt-1">
                    <FaMedal color="gray" />
                  </div>
                  <p className="text-slate-500 min-w-[150px] font-semibold">
                    Intermediate
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col  gap-5">
                <div className="text-xl = w-full text-left font-semibold ">
                  Related Courses
                </div>
                <div className="flex gap-1 text-blue-600">
                  <span>•</span>SAP Business Technology Platform Extension
                  Developer
                </div>

                <div className="flex gap-1 text-blue-600">
                  <span>•</span>Secure your application by using OpenID Connect
                  and Azure ADS
                </div>
                <div className="flex gap-1 text-blue-600">
                  <span>•</span>Troubleshooting Microsoft Azure Connectivity
                </div>
                <div className="flex gap-1 text-blue-600">
                  <span>•</span>Use Automated Machine Learning in Azure Machine
                  Learning
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};
export default SapBtp;
