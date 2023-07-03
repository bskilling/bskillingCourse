import Accordion from "components/accordion";
import AccordionFaq from "components/accordionFaq";
import CourseSlider from "components/courseSlider";
import InsideCourse from "components/insideCourseSubpoint";
import LandingPageFooter from "components/landingPageFooter";
import { motion } from "framer-motion";
import DropAQueryForm from "modules/leadChat/components/DropAQueryForm";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiTime } from "react-icons/bi";
import { BsFillPeopleFill, BsTelephone } from "react-icons/bs";
import "react-phone-number-input/style.css";
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
const AIwithPrompt = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };
  const [videoss, setVideoss] = useState(null);
  const transition = { type: "spring", duration: 3 };
  const transition2 = { type: "spring", duration: 1 };
  const [messageSent, setMessage] = useState(false);
  const [CountryCodeValue, setCountryCodeValue] = useState<any>("+91");

  const [showFixedLandingFooter, setShowFixedLandingFooter] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const halfScreenHeight = window.innerHeight / 4.9;

      if (scrollPosition >= halfScreenHeight) {
        setShowFixedLandingFooter(true);
      } else {
        setShowFixedLandingFooter(false);
      }
    }

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      {showFixedLandingFooter && <LandingPageFooter />}
      <section className="bg-gray font-SourceSans">
        {/* mobile view  above*/}
        <section>
          <div className="relative border  md:h-[750px] w-auto md:min-h-[650px] min-h-[655px]  h-fit">
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
            <div className="  w-full  z-[1000] relative  flex  justify-center  text-white">
              <div className="md:w-[100%] md:basis-[90%] md:mt-10 mt-12  ">
                <div className=" flex flex-col md:flex-row justify-between">
                  <div className="flex items-center">
                    <p className="w-full p-4 md:p-0 pb-2 text-3xl mb-5 text-left  font-semibold">
                      Prompt Engineering
                    </p>
                  </div>
                  {/* <div className="flex justify-center">
                    <img
                      src="/crsInside/saplogo.png"
                      className="w-[200px] h-[200px]"
                      alt=""
                    />
                  </div> */}
                </div>
                <motion.div
                  // initial={{ y: "200px" }}
                  // whileInView={{ y: "0px" }}
                  // animate={{ y: 10 }}
                  // viewport={{ once: true }}
                  // transition={{ ease: "easeOut", duration: 2 }}
                  className="bg-glass text-xl p-4 md:p-0 text-left md:pt-0 pt-3 md:text-2xl font-semibold"
                >
                  Learn the Future of AI with Prompt Engineering
                  <br />
                </motion.div>

                <motion.div
                  // initial={{ right: "300px" }}
                  // whileInView={{ right: "0px" }}
                  // animate={{ x: 2 }}
                  // viewport={{ once: true }}
                  // transition={{ ease: "easeOut", duration: 2 }}
                  className=" flex flex-col px-4 md:px-0 md:flex-row pt-7 pb-7 md:gap-6 md:items-center"
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
                      </div>
                      <div>275 Ratings</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center ">
                      <BsFillPeopleFill />
                    </div>
                    411 Learners
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

                <div className="mt-2 font-base md:p-0 p-4  text-left md:text-justify md:w-[100%]">
                  Prompt engineering is an emerging and rapidly expanding field
                  that is reshaping human interactions with AI. By mastering the
                  art of constructing effective prompts, one can unlock the full
                  potential of large language models (LLMs) and create
                  innovative applications. Generative AI tools like ChatGPT and
                  Bard are already revolutionizing tasks automation, content
                  creation, and code generation. Prompt engineering finds
                  application across various industries. In the tech industry,
                  prompt engineers develop AI-powered products such as chatbots,
                  virtual assistants, and content generators. In education, they
                  create interactive textbooks and virtual tutors. In marketing,
                  they drive personalized campaigns and generate creative
                  content. Even in the government sector, prompt engineers play
                  a role in developing citizen interaction tools like chatbots
                  and virtual assistants.
                </div>
              </div>

              {/* //////////////////////////////////////rating and course name section //////////////////////////////////////////////////////////*/}
            </div>
          </div>

          {/* section with banner comes here above */}
        </section>
        <section className="md:relative md:-top-14    lg:-top-32 ">
          <motion.div
            initial={{ y: "200px" }}
            whileInView={{ y: "0px" }}
            animate={{ y: 10 }}
            viewport={{ once: true }}
            id="parent"
            className=" flex  flex-col -violet-600 w-full 0   md:flex-row justify-center  gap-10"
          >
            {/* main text content here */}
            <div className="  flex flex-col  md:flex-row gap-5  md:basis-[90%] ">
              <div className="flex flex-col md:flex-1  gap-5 h-fit    ">
                <div className="bg-white px-5 md:px-12 w-full min-h-[1220px]  pb-8  rounded-xl">
                  <div id="Overview" className="h-12 "></div>
                  <div>
                    <p className="mt-2 text-2xl font-bold   mb-4">Overview</p>
                    <p className="   ">
                      Prompt engineering is an increasingly important field that
                      involves crafting precise instructions for generative AI
                      models. With the advancement and sophistication of these
                      models, the demand for skilled prompt engineers is growing
                      rapidly. Their expertise lies in leveraging generative AI
                      models to tackle a wide range of problems. For instance,
                      prompt engineers can utilize these models to generate
                      diverse and creative text formats, including poems, code,
                      scripts, musical pieces, emails, letters, and more. They
                      can also provide informative answers to complex and
                      open-ended questions, as well as facilitate language
                      translation. Additionally, prompt engineers excel in
                      producing various forms of creative content, harnessing
                      the power of generative AI models to generate compelling
                      and engaging text in different formats.
                    </p>
                    <div id="Objectives" className="h-12 "></div>
                    <div className=" flex md:flex-row flex-col">
                      <div className="flex-1">
                        <p className="_pt-8 pb-4 text-xl md:text-left font-semibold">
                          Objectives
                        </p>
                        <div className="flex gap-1 pt-2    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Understand the basics of prompt engineering
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Learn how to write effective prompts
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Be able to use prompts to generate different creative
                          text formats
                        </div>
                        <div className="flex gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Be able to use prompts to solve real-world problems
                        </div>
                      </div>
                      <div className="md:w-[500px] justify-end  mr-2 _pt-8 items-end  flex flex-row gap-3">
                        {/* <div>
                          <a className="play-btn" onClick={handleClick}></a>
                        </div> */}
                        <div className="md:w-fit md:pt-0 pt-4 flex-3 w-full  h-[300px]  md:h-fit flex justify-center">
                          <iframe
                            className="rounded-lg"
                            width="400"
                            height="230"
                            src="https://www.youtube.com/embed/pLigr-CbKVI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div id="Prerequisites" className="h-12 "></div>
                    <div className="flex w-full md:flex-row gap-20 flex-col  justify-center">
                      <div className="flex flex-col   md:w-[50%]">
                        <p className="pt- pb-3 text-xl md:text-left font-semibold ">
                          Prerequisites
                        </p>

                        <div className="flex gap-1 pt-4   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Good communication
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Basic understanding of AI tools such as Chat GPT,
                          Bard.. etc
                        </div>

                        <div id="Audience" className="h-12 "></div>
                        <p className="_pt-8  text-xl  pb-4 font-semibold">
                          Audience
                        </p>
                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          AI researchers, engineers, and developers
                        </div>

                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Companies and organizations
                        </div>

                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Enthusiasts and hobbyists
                        </div>

                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          OpenAI partners or clients
                        </div>

                        <div id="KeyFeatures" className="h-12 "></div>
                        <p className="_pt-8  text-xl  pb-4 font-semibold">
                          Key Features
                        </p>

                        <div className="flex  gap-1    ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          The anatomy of a prompt
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Tips for writing effective prompts
                        </div>
                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          How to use AI in your workflow
                        </div>
                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          The skills you need to succeed in the field
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Less time consuming
                        </div>

                        <div className="flex  gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          Hands on practice
                        </div>

                        <div id="Benefits" className="h-12 "></div>
                        <div className="flex w-full md:flex-row flex-col  gap-4 justify-center">
                          <div className="flex flex-col  md:w-[50%]">
                            <p className="_pt-8 pb-4 text-xl  font-semibold">
                              Benefits
                            </p>

                            <div className="flex  gap-1  ">
                              <span className="text-blue-600 font-extrabold ">
                                -
                              </span>
                              Learn the fundamentals of prompt engineering
                            </div>

                            <div className="flex   gap-1   ">
                              <span className="text-blue-600 font-extrabold ">
                                -
                              </span>
                              Gain hands-on experience with prompt engineering
                            </div>
                            <div className="flex  gap-1    ">
                              <span className="text-blue-600 font-extrabold ">
                                -
                              </span>
                              Learn about the latest trends in prompt
                              engineering
                            </div>

                            <div className="flex  gap-1   ">
                              <span className="text-blue-600 font-extrabold ">
                                -
                              </span>
                              Network with other prompt engineers
                            </div>
                          </div>
                          <div className="flex flex-col  md:w-[50%]"></div>
                        </div>
                      </div>

                      <div className="flex flex-col  md:w-[50%]">
                        <div className=" rounded-md px-4 pb-4 ">
                          <p className="_pt-8 pb-4 text-xl text-left md:text-right font-semibold">
                            Skills Covered
                          </p>
                          <div className="flex md:flex flex-wrap justify-left md:justify-end items-end   gap-5">
                            <div className="border rounded-md w-fit border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Understanding Chat GPT
                            </div>
                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Prompt engineering techniques
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Model limitations and biases
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Customization and fine-tuning
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Context manipulation
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Input/output filtering
                            </div>
                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Text tokenization
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Integration and deployment
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Monitoring and iteration
                            </div>

                            <div className="border rounded-md border-buttonBlue text-center px-2 py-2 text-buttonBlue">
                              Ensuring compliance and ethical considerations
                            </div>
                          </div>
                          <div className="pt-8">
                            <div id="Resources" className="h-12 "></div>
                            <InsideCourse />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tabsssssssssssssssssssssssssssssssssssssssss */}
                </div>

                <div className="bg-white px-5 md:px-12   w-full   pb-8  rounded-xl">
                  <div id="Curriculum" className="h-12 "></div>
                  <p className="_mt-9 text-2xl font-bold   mb-4">Curriculum</p>
                  <div className="bg-white flex-1  w-full   pb-8  rounded-xl">
                    {" "}
                    <div className="w-full ">
                      <Accordion
                        question="Introduction"
                        answer="Talking to the AI’s "
                        answer2="Using the included handouts"
                      />
                    </div>
                    <div>
                      <Accordion
                        question="Prompt engineering"
                        answer="What is prompt engineering?"
                        answer2="Why is prompt engineering important?"
                        answer3="The different types of prompts"
                        answer4="Generative AI resolution"
                      />
                    </div>
                    <div>
                      <Accordion
                        question="How to write effective prompts"
                        answer="The key elements of an effective prompt"
                        answer2="How to choose the right words and phrases"
                        answer3="How to structure a prompt"
                      />
                    </div>
                    <div>
                      {" "}
                      <Accordion
                        question="Case studies of prompt engineering "
                        answer="Examples of effective prompts"
                        answer2="How these prompts were used to generate creative text formats"
                        answer3="Prompt Engineering tips & tricks"
                      />
                    </div>
                    <div>
                      {" "}
                      <Accordion
                        question="Advanced prompt engineering techniques"
                        answer="How to use prompts to generate different creative text formats"
                        answer2="How to use prompts to solve real-world problems"
                        answer3="A hands-on exercise in prompt engineering"
                        answer4="Participants will have the opportunity to write their own prompts and
                        generate creative text formats"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white px-5 md:px-12 w-full   pb-8  rounded-xl">
                  {" "}
                  <div id="OutComes" className="h-12 "></div>
                  <p className="_mt-9 text-2xl font-bold   mb-4">OutComes</p>
                  <div className=" flex  w-full flex-col">
                    <div className="flex   gap-1   ">
                      <span className="text-blue-600 font-extrabold ">-</span>
                      Understand the basics of prompt engineering
                    </div>
                    <div className="flex  gap-1   ">
                      <span className="text-blue-600 font-extrabold ">-</span>
                      Learn how to write effective prompts
                    </div>
                    <div className="flex gap-1    ">
                      <span className="text-blue-600 font-extrabold ">-</span>
                      Be able to use prompts to generate different creative text
                      formats
                    </div>
                    <div className="flex gap-1    ">
                      <span className="text-blue-600 font-extrabold ">-</span>
                      Be able to use prompts to solve real-world problems
                    </div>
                  </div>
                </div>
                <div className=" px-5 md:px-12 w-full bg-white  pb-8  rounded-xl">
                  {" "}
                  <div id="Certification" className="h-12 "></div>
                  <p className="_mt-9 text-2xl font-bold   mb-4">
                    Certification
                  </p>
                  <div className="md:bg-white   pb-8 w-full  rounded-xl">
                    <div className="flex w-full gap-8   flex-col md:flex-row justify-center">
                      <div className="md:w-[50%]  flex flex-col justify-start  pt-2">
                        <p className="">
                          Completion of course provides necessary knowledge:
                        </p>

                        <p className="pt-4 ">
                          Once you successfully complete the Prompt Engineering
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

                <div className="bg-white px-5 md:px-12 w-full   pb-8  rounded-xl">
                  {" "}
                  <div id="FAQs" className="h-12 "></div>
                  <p className="_mt-9 text-2xl font-bold   mb-4">FAQs</p>
                  <div className="bg-white  w-full pt-2  pb-8  rounded-xl">
                    <div>
                      <AccordionFaq
                        question="What is prompt engineering?"
                        answer="Prompt engineering is the process of writing instructions to generative AI models. It is a rapidly
                        growing field, as generative AI models become more powerful and sophisticated."
                      />
                    </div>
                    <div>
                      <AccordionFaq
                        question="What are the benefits of prompt engineering?"
                        answer="Prompt engineering can help to improve the performance, capabilities, and accessibility of
                        generative AI models. It can also help to expand the range of tasks that generative AI models
                        can perform."
                      />
                    </div>
                    <div>
                      <AccordionFaq
                        question="What are the challenges of prompt engineering?"
                        answer="One of the challenges of prompt engineering is that it can be difficult to write prompts that are
                        clear, concise, and effective. Another challenge is that the performance of generative AI models
                        can vary depending on the prompt that is used."
                      />
                    </div>
                    <div>
                      <AccordionFaq
                        question="What are the future trends in prompt engineering?"
                        answer="One of the future trends in prompt engineering is the development of new techniques for
                        writing prompts. Another trend is the use of prompt engineering to create new AI-powered
                        products and services."
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
                          29,999
                        </span>
                      </p>
                    </div>
                    <div>
                      <Link
                        href={
                          "https://bskilling.melimu.com/course/view.php?id=197"
                        }
                      >
                        <button className="bg-buttonBlue text-white px-9 py-2 font-semibold text-xl mt-4">
                          <span>Enrol Me</span>
                        </button>
                      </Link>
                    </div>
                    <div className="text-center mt-4 pb-8"></div>
                  </div>
                  <div className="flex  shadow-md w-full bg-white pb-12 pt-8 rounded-xl flex-col items-center  gap-5">
                    <div className="px-5">
                      <p className="pt-3 pb-4 text-xl text-left  font-semibold">
                        Upcoming Batches
                      </p>

                      <div className="flex m text-blue-600  text-left gap-1 ">
                        03th July- 9th Oct (9am - 1pm)
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
export default AIwithPrompt;
