import PdfFile from "@/pages/Pdffile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import Accordion from "components/accordion";
import AccordionFaq from "components/accordionFaq";
import CourseSlider from "components/courseSlider";
import LandingPageFooter from "components/landingPageFooter";
import RegisterForm from "components/registerForm";
import { Console } from "console";
import { motion } from "framer-motion";
import DropAQueryForm from "modules/leadChat/components/DropAQueryForm";
import moment from "moment";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { BsFillPeopleFill, BsTelephone } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

type Batch = {
  id: string;
  name: string;
  description: string;
  isPaid: string;
  capacity: string;
  startDate: string;
  endDate: string;
  endRegistrationDate: string;
  status: string;
};

type TrainingMetadataShape = {
  name: string;
  duration: string;
  thumbnail: string;
  price: number;
  level: string;
  trainingType: string;
  rating: number;
  batches: Batch[];
  headLine: string;
  body: string;
  overview: string;
  discount: number;
  previewVideo: string;
  objectives: string[];
  prerequisites: string[];
  audience: string[];
  couponCode: string;
  keyFeatures: string[];
  benefites: string[];
  skillsCovered: string[];
  resources: string[];
  certificationImage: string;
  certificationText: string;
  outcomes: string[];
  curriculum: {
    chapter: string;
    lessons: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

type TrainingMetadataProps = {
  category: string;
  trainingMetadata: TrainingMetadataShape | null;
};

const TrainingMetadata = (props: TrainingMetadataProps) => {
  const [showFixedLandingFooter, setShowFixedLandingFooter] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  console.log(props.trainingMetadata, "meta data");
  const generatePDF = async () => {
    try {
      const response = await axios.post(
        "/api/generate-pdf",
        {
          title: props.trainingMetadata?.name,
          bodyText: props.trainingMetadata?.body,
          overview: props.trainingMetadata?.overview,
          objectives: props.trainingMetadata?.objectives,
          Prerequisites: props.trainingMetadata?.prerequisites,
          skillsCovered: props.trainingMetadata?.skillsCovered,
          audience: props.trainingMetadata?.audience,
          KeyFeatures: props.trainingMetadata?.keyFeatures,
          Resources: props.trainingMetadata?.resources,
          benefites: props.trainingMetadata?.benefites,
          curriculum: props.trainingMetadata?.curriculum,
          outcomes: props.trainingMetadata?.outcomes,
          certification: props.trainingMetadata?.certificationText,
          certificationImage: props.trainingMetadata?.certificationImage,
          faq: props.trainingMetadata?.faqs,

          price: props.trainingMetadata?.price,
          level: props.trainingMetadata?.level,
          trainingType: props.trainingMetadata?.trainingType,
          duration: props.trainingMetadata?.duration,
          headLine: props.trainingMetadata?.headLine,
        },
        {
          responseType: "blob", // To receive binary data (PDF)
        }
      );

      // Create a blob URL for the PDF response
      const blob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(blob);

      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  useEffect(() => {
    generatePDF();
  }, []);
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const youtubeLink = props.trainingMetadata?.previewVideo || "";
  const videoId = youtubeLink?.split("/").pop();

  const formattedData =
    props.trainingMetadata?.curriculum.map(
      (item: TrainingMetadataShape["curriculum"][0]) => ({
        question: item.chapter,
        answer: item.lessons,
      })
    ) || [];

  const formattedPrice = props.trainingMetadata?.price.toLocaleString(
    undefined,
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );

  const calculateDiscountedPrice = () => {
    const formattedPrice = props.trainingMetadata?.price ?? "0";
    const priceAsNumber = parseFloat(String(formattedPrice));
    const discount = props.trainingMetadata?.discount ?? 0;

    if (discount === 0) {
      return priceAsNumber; // If the discount is 0, return the original price
    } else {
      // Calculate the discounted price using the formula: discountedPrice = price - (price * (discount / 100))
      const discountedPrice = priceAsNumber - priceAsNumber * (discount / 100);
      return Math.floor(discountedPrice);
    }
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const clickOnRegister = () => {
    setRegisterVisible(true);
  };

  useEffect(() => {}, [props.trainingMetadata]);

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
      {props.trainingMetadata && (
        <section className="bg-gray font-SourceSans">
          {/* mobile view  above*/}
          <section>
            <div className="relative border  md:h-[550px] w-auto md:min-h-[400px] min-h-[900px]  h-fit">
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
                      <p className=" pb-2 text-3xl mb-5 text-left px-5 md:px-0 font-semibold">
                        {props.trainingMetadata.name}
                      </p>
                    </div>
                  </div>
                  <motion.div className="bg-glass text-xl text-left px-5 md:px-0 md:pt-0 pt-3 md:text-xl font-semibold">
                    {props.trainingMetadata.headLine}
                  </motion.div>

                  <motion.div className=" flex  flex-col md:flex-row pt-7 pb-7 md:gap-6 text-left px-5 md:px-0  md:items-center">
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
                      399 Learners
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center ">
                        <BsFillPeopleFill />
                      </div>
                      {props.trainingMetadata.trainingType}
                    </div>

                    <div className="flex gap-2">
                      <div className="flex items-center ">
                        <BiTime />
                      </div>{" "}
                      {props.trainingMetadata.duration}
                    </div>
                  </motion.div>

                  <div className="mt-2 font-base md:p-0 p-4  md:text-left text-justify md:w-[100%]">
                    {props.trainingMetadata.body}
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
              <div className="  flex flex-col  md:flex-row gap-5  md:basis-[90%] ">
                <div className="flex flex-col md:flex-1  gap-5 h-fit    ">
                  <div className="bg-white px-5 md:px-12 w-full min-h-[1220px]  pb-8  rounded-xl">
                    <div id="Overview" className="h-12 "></div>
                    <div>
                      <p className="mt-2 text-2xl font-bold   mb-4">Overview</p>
                      <p className="   ">{props.trainingMetadata.overview}</p>
                      <div id="Objectives" className="h-12 "></div>
                      <div className=" flex md:flex-row flex-col">
                        <div className="flex-1">
                          <p className="_pt-8 pb-6 text-xl md:text-left font-semibold">
                            Objectives
                          </p>
                          {props.trainingMetadata.objectives.map(
                            (item, index) => (
                              <div key={index} className="flex gap-1     ">
                                <span className="text-blue-600 font-extrabold ">
                                  -
                                </span>
                                {item}
                              </div>
                            )
                          )}
                        </div>
                        <div className="md:w-[500px] justify-end md:pt-0 pt-4   mr-2 _pt-8 items-end  flex flex-row gap-3">
                          <div className="md:w-fit flex-3 w-full  md:pt-0 pt-4  h-[300px]  md:h-fit flex justify-center">
                            <iframe
                              className="rounded-lg"
                              width="400"
                              height="230"
                              src={`https://www.youtube.com/embed/${videoId}`}
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
                          <p className="pt- pb-7 text-xl md:text-left font-semibold ">
                            Prerequisites
                          </p>
                          {props.trainingMetadata.prerequisites.map(
                            (item, index) => (
                              <div key={index} className="flex gap-1   ">
                                <span className="text-blue-600 font-extrabold ">
                                  -
                                </span>
                                {item}
                              </div>
                            )
                          )}

                          <div id="Audience" className="h-12 "></div>
                          <p className="_pt-8  text-xl  pb-4 font-semibold">
                            Audience
                          </p>

                          {props.trainingMetadata.audience.map(
                            (item, index) => (
                              <div key={index} className="flex  gap-1    ">
                                <span className="text-blue-600 font-extrabold ">
                                  -
                                </span>
                                {item}
                              </div>
                            )
                          )}

                          <div id="KeyFeatures" className="h-12 "></div>
                          <p className="_pt-8  text-xl  pb-4 font-semibold">
                            Key Features
                          </p>

                          {props.trainingMetadata.keyFeatures.map(
                            (item, index) => (
                              <div key={index} className="flex  gap-1    ">
                                <span className="text-blue-600 font-extrabold ">
                                  -
                                </span>
                                {item}
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex flex-col md:w-[50%]">
                          <div className=" rounded-md px-4 pb-4 ">
                            <p className="_pt-8 pb-4 text-xl text-left md:text-right font-semibold">
                              Skills Covered
                            </p>
                            <div className="flex md:flex flex-wrap justify-left md:justify-end items-end   gap-5">
                              {props.trainingMetadata.skillsCovered.map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="border rounded-md w-fit border-buttonBlue text-center px-2 py-2 text-buttonBlue"
                                  >
                                    {item}
                                  </div>
                                )
                              )}
                            </div>
                            <div className="pt-16">
                              <p className="_pt-8 pb-4 text-xl text-left md:text-right font-semibold">
                                Resources
                              </p>
                              <div className="flex md:flex flex-wrap justify-left md:justify-end items-end   gap-5">
                                {props.trainingMetadata.resources.map(
                                  (item, index) => (
                                    <div
                                      key={index}
                                      className="border rounded-md w-fit border-buttonBlue text-center px-2 py-2 text-buttonBlue"
                                    >
                                      {item}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="Benefits" className="h-12 "></div>
                      <div className="flex w-full md:flex-row flex-col  gap-4 justify-center">
                        <div className="flex flex-col  md:w-[50%]">
                          <p className="_pt-8 pb-4 text-xl  font-semibold">
                            Benefits
                          </p>

                          {props.trainingMetadata.benefites?.map(
                            (item, index) => (
                              <div key={index} className="flex  gap-1  ">
                                <span className="text-blue-600 font-extrabold ">
                                  -
                                </span>
                                {item}
                              </div>
                            )
                          )}
                        </div>
                        <div className="flex flex-col  md:w-[50%]"></div>
                      </div>
                    </div>

                    {/* tabsssssssssssssssssssssssssssssssssssssssss */}
                  </div>

                  <div className="bg-white md:px-12 px-5  w-full   pb-8  rounded-xl">
                    <div id="Curriculum" className="h-12 "></div>
                    <p className="_mt-9 text-2xl font-bold   mb-4">
                      Curriculum
                    </p>
                    <div className="bg-white flex-1  w-full   pb-8  rounded-xl">
                      {" "}
                      <div className="w-full ">
                        {formattedData.map((item, index) => (
                          <Accordion
                            key={index}
                            question={item.question}
                            answer={item.answer}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-5 md:px-12 w-full   pb-8  rounded-xl">
                    {" "}
                    <div id="OutComes" className="h-12 "></div>
                    <p className="_mt-9 text-2xl font-bold   mb-4">OutComes</p>
                    <div className=" flex  w-full flex-col">
                      {props.trainingMetadata.outcomes.map((item, index) => (
                        <div key={index} className="flex   gap-1   ">
                          <span className="text-blue-600 font-extrabold ">
                            -
                          </span>
                          {item}
                        </div>
                      ))}
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
                            {props.trainingMetadata.certificationText}
                          </p>
                        </div>
                        <div className="md:w-[50%] flex items-center justify-center">
                          <img
                            src={props.trainingMetadata.certificationImage}
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
                        {props.trainingMetadata.faqs.map((item, index) => (
                          <AccordionFaq
                            key={index}
                            question={item.question}
                            answer={item.answer}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* first sections second card */}
                  {pdfUrl && (
                    <a href={pdfUrl} download>
                      Download PDF
                    </a>
                  )}
                </div>

                {/* side tab content here */}
                <div className="md:w-[350px]  md:min-h-[1240px]  flex justify-center">
                  <div className="w-[100%] flex gap-5 flex-col items-center ">
                    <div className="w-full  bg-white  h-fit rounded-xl flex flex-col   items-center ">
                      <div className="mt-8 w-full px-4">
                        <div className="text-center  text-black font-semibold">
                          <span className=" font-bold text-xl text-blue-600 -top-[10px] -right-1 relative">
                            {registerVisible ? (
                              ""
                            ) : props.trainingMetadata.discount === 0 ? (
                              ""
                            ) : (
                              <span className="line-through text-slate-400">
                                ₹ &nbsp;{formattedPrice}
                              </span>
                            )}
                          </span>{" "}
                          <div className="flex gap-2 items-center justify-center w-full relative mb-2">
                            <span className="font-bold text-blue-600 text-2xl">
                              {registerVisible ? (
                                props.trainingMetadata.batches.length > 0 ? (
                                  "Enroll Now"
                                ) : (
                                  ""
                                )
                              ) : props.trainingMetadata.discount === 0 ? (
                                <span className="font-bold text-blue">
                                  ₹ {formattedPrice}
                                </span>
                              ) : (
                                <div>
                                  <span className="font-bold text-blue">
                                    ₹ {calculateDiscountedPrice()}
                                  </span>
                                </div>
                              )}
                            </span>
                            {registerVisible && (
                              <button
                                className="absolute right-0 text-2xl text-[#888888]"
                                onClick={() => setRegisterVisible(false)}
                              >
                                <FaTimes />
                              </button>
                            )}
                          </div>
                          {registerVisible === false ? (
                            <div>
                              {props.trainingMetadata.discount === 0 ? (
                                ""
                              ) : (
                                <div className="text-red-700 text-lg">
                                  {props.trainingMetadata.discount} % &nbsp;OFF
                                </div>
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                          <div>
                            {props.trainingMetadata.discount === 0 ? (
                              ""
                            ) : props.trainingMetadata.couponCode ? (
                              <div className="text-red-700">
                                Use Coupon Code &nbsp;:&nbsp;
                                {props.trainingMetadata.couponCode}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      {registerVisible ? (
                        ""
                      ) : (
                        <div className="pb-7" onClick={() => clickOnRegister()}>
                          <button className="bg-buttonBlue rounded-md text-white px-9 py-2 font-semibold text-xl mt-4">
                            <span>Enrol Me</span>
                          </button>
                        </div>
                      )}
                      <motion.div
                        className="w-full px-5"
                        animate={registerVisible ? "open" : "closed"}
                        variants={variants}
                      >
                        {registerVisible &&
                          (props.trainingMetadata.batches.length === 0 ? (
                            <div className="py-8 text-center">
                              <p className="text-buttonBlue text-center  text-md font-semibold mb-4 px-2">
                                There are no batches scheduled for this course.
                                Please check later.
                              </p>
                            </div>
                          ) : (
                            <RegisterForm
                              email="jkdiadihsadsaio"
                              BatchName={props.trainingMetadata.batches || []}
                              price={props.trainingMetadata.price}
                              course={`${props.trainingMetadata.name}`}
                              courseName={props.trainingMetadata.name}
                            />
                          ))}
                      </motion.div>
                      <div className="text-center mt-4 pb-"></div>
                    </div>
                    <div className="flex  shadow-md w-full bg-white pb-12 pt-8 rounded-xl flex-col items-center  gap-5">
                      <div className="px-5">
                        <p className="pt-3 pb-4 text-xl  text-center  font-semibold">
                          Upcoming Batches
                        </p>

                        <div className="flex m text-blue-600  text-center gap-1 ">
                          {props.trainingMetadata.batches.map((item, index) => (
                            <div className="ml-5 text-sm " key={index}>
                              {" "}
                              {item.name}{" "}
                              <div>
                                {moment(item.startDate).format(
                                  "YYYY-MMM-DD HH:mm"
                                )}{" "}
                                -{" "}
                                {moment(item.endDate).format(
                                  "YYYY-MMM-DD HH:mm"
                                )}
                              </div>
                              <div></div>
                            </div>
                          ))}
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
                        <div className="w-fit px-2">
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
      )}
    </>
  );
};

export default TrainingMetadata;

export const getServerSideProps: GetServerSideProps<
  TrainingMetadataProps
> = async (context) => {
  const trainingId = context.params?.trainingId as string;
  const category = context.params?.category as string;
  let trainingMetadata: TrainingMetadataShape | null = null;

  try {
    const response = await axios.get<TrainingMetadataShape>(
      `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}/api/outsource/trainingMetadataDetails?tenant=2&trainingId=${trainingId}`
    );
    trainingMetadata = response.data;
  } catch (error) {
    console.error("Error fetching API:", error);
  }

  return {
    props: {
      category,
      trainingMetadata,
    },
  };
};
