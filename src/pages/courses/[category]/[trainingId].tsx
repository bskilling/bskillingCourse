import PdfFile from "@/pages/Pdffile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import ContactPopUp from "components/ContactPopUp";
import Accordion from "components/accordion";
import AccordionFaq from "components/accordionFaq";
import CourseSlider from "components/courseSlider";
import LandingPageFooter from "components/landingPageFooter";
import RegisterForm from "components/registerForm";
import Testimonials from "components/testimonials";
import { Console } from "console";
import { motion } from "framer-motion";
import DropAQueryForm from "modules/leadChat/components/DropAQueryForm";
import EnquiryForm from "modules/leadChat/components/EnquiryForm";
import moment from "moment";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { BsFillPeopleFill, BsTelephone } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import LeadForm from "modules/leadChat/components/LeadForm";
import PmpForm from "modules/leadChat/components/PmpForm";
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
  trainingId: string;
  trainingMetadata: TrainingMetadataShape | null;
};

const TrainingMetadata = (props: TrainingMetadataProps) => {
  const [showFixedLandingFooter, setShowFixedLandingFooter] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [isContactPopupVisible, setContactPopupVisible] = useState(false);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {

    const delayTime = 4000;

    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, delayTime);


    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const generatePDF = async () => {
    try {
      setLoadingVisible(true);
      const response = await axios.post(
        "https://tooejiytepk5pybi4mxtsmne4i0qybvm.lambda-url.ap-south-1.on.aws/",
        {
          id: props.trainingId,
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
        }
      );
      return response.data.url;
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoadingVisible(false);
    }
  };

  const handleFormSubmit = () => {
    // Your logic after the form is successfully submitted
    console.log("Form submitted successfully!");
    // For example, you can update state, trigger animations, etc.
  };

  const handleGeneratePdf = async () => {
    const urlPdf = await generatePDF();
    const fileName = props.trainingMetadata?.name;
    if (urlPdf && fileName) {
      const a = document.createElement("a");
      a.href = urlPdf;
      a.download = `bSkilling_${fileName}_Brochure.pdf`;
      a.click();
    }
  };

  // useEffect(() => {
  //   generatePDF();
  // }, []);
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

  useEffect(() => { }, [props.trainingMetadata]);
  // console.log("course", props.trainingMetadata)
  return (
    <>
      {props.trainingMetadata && (
        <Head>
          {props.trainingMetadata.name == "PRINCE2® Foundation and Practitioner " && (
            <>
              <title>bSkilling | PRINCE2 Foundation & Practitioner Training | Online Course and Certification </title>
              <meta
                name="description"
                content="Enhance project skills with bSkilling PRINCE2 training. Gain Foundation and Practitioner certification through our online courses. Enroll now!"
              />
              <meta
                name="keywords"
                content="prince2 , prince2 certificate , prince2 practitioner ,prince2 foundation, prince2 project management , prince2 course price , prince2 course"
              />
            </>
          )}

          {props.trainingMetadata.name == "Project Management Professional (PMP)® Certification Prep Course " && (
            <>
              <title>bSkilling | PMP Certification Training in Bangalore | Project Management Professional Courses </title>
              <meta
                name="description"
                content="Unlock potential with PMP Certification in Bangalore. Expert-led courses for Program Management Professionals. Gain PMP skills. Enroll now!"
              />
              <meta
                name="keywords"
                content="pmp cost , pmp online , pmp certification near me, pmi pmp, pmp exam, pmp,pmp certification Bangalore, pmp training in bangalore"
              />
            </>
          )}

          {props.trainingMetadata.name == "Generative AI" && (
            <>
              <title>bSkilling | Online Generative AI - Courses and Certification </title>
              <meta
                name="description"
                content="Discover Online courses and certifications in Generative AI with bSkilling. Elevate yours skills with advanced training. Get Certified Now!"
              />
              <meta
                name="keywords"
                content="Generative ai, ai generative, generative ai courses, Generative ai online, generative ai certification, generative ai training,gen ai, gen ai course, generative ai course near me"
              />
            </>
          )}

          {props.trainingMetadata.name == "Cloud Engineering- Azure, AWS, GCP Training Certification" && (
            <>
              <title>Cloud Engineering Certification: Azure, AWS, GCP Training</title>
              <meta
                name="description"
                content="Find opportunities by obtaining a Cloud Engineering Certification, improve your skills to the next level and reveal your expertise in cloud technologies."
              />
              <meta
                name="keywords"
                content=" Best Cloud Computing Courses,cloud computing certificate courses,aws cloud computing course,google cloud certification courses,microsoft azure training and certification,cloud engineer certification training,AWS Cloud Certification Course,aws cloud computing certification,Microsoft Azure Certification Training"
              />
            </>
          )}

          {props.trainingMetadata.name == "PRINCE2® 7th Edition Foundation Certification" && (
            <>
              <title>bSkilling | PRINCE2 Foundation | Online Training Course and Certification</title>
              <meta
                name="description"
                content="Elevate your project management prowess with bSkilling exclusive PRINCE2 Foundation Online Training and Certification. Level up your career now!."
              />
              <meta
                name="keywords"
                content="prince2 , prince2 certificate , prince2  online course ,prince2 foundation, prince2 foundation online training ,prince2 project management , prince2 course price , prince2 course"
              />

            </>
          )}

          {props.trainingMetadata.name == "SAP Business Technology Platform (BTP)" && (
            <>
              <title>bSkilling | SAP BTP - Online Courses With Certification</title>
              <meta
                name="description"
                content="Explore live, online SAP BTP courses for dynamic learning. Master SAP BTP with bSkilling and get course Certification with Placement."
              />
              <meta
                name="keywords"
                content="sap course,sap btp training, learn sap, sap certification, sap training nd certification, sap training courses,sap online,sap btp certifiaction course, sap btp course details"
              />

            </>
          )}

          {props.trainingMetadata.name !== "PRINCE2® Foundation and Practitioner " &&
            props.trainingMetadata.name !== "Project Management Professional (PMP)® Certification Prep Course " &&
            props.trainingMetadata.name !== "Generative AI" &&
            props.trainingMetadata.name !== "Cloud Engineering- Azure, AWS, GCP Training Certification" &&
            props.trainingMetadata.name !== "PRINCE2® 7th Edition Foundation Certification" &&
            props.trainingMetadata.name !== "SAP Business Technology Platform (BTP)" && (
              <>
                <title>bSkilling </title>
                <meta
                  name="bSkilling"
                  content="Learn the skills you need to build and deploy intelligent applications on SAP Business Technology Platform"
                />
                <meta
                  name="p:domain_verify"
                  content="7bb84546e514612864b5b9d71d1649e4"
                />
              </>
            )}



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
      )}
      {showFixedLandingFooter && <LandingPageFooter />}

      {props.trainingMetadata && (
        <>
          <section>

            <section className="bg-gray font-SourceSans">
              {/* mobile view  above*/}
              <section>

                <div className="relative border  md:h-[550px] w-auto md:min-h-[400px] min-h-[900px]  h-fit">
                  <div
                    className="h-full absolute top-0 left-0 w-full"
                    style={{
                      backgroundImage: `url(${props.trainingMetadata.name === 'Microsoft Copilot Training Certification' ? "/copilot.png" : "/education6.jpeg"})`,
                      backgroundSize: "cover",
                      objectFit: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      filter: "brightness(60%)",
                    }}
                  >
                    {/* Add any additional content or components inside this div if needed */}
                  </div>

                  <div className="  w-full z-[1000] relative  flex  justify-center  text-white">
                    <div className="md:w-[100%] md:basis-[90%] md:mt-10 mt-12  ">
                      <div className=" flex flex-col md:w-[80%] md:flex-row justify-between">
                        <div className="flex items-center">
                          <h1 className=" pb-2 text-3xl mb-5 text-left px-5 md:px-0 font-semibold">
                            {props.trainingMetadata.name}
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <motion.div className="bg-glass md:w-[58%] lg:w-[60%] text-xl text-left px-5 md:px-0 md:pt-0 pt-3 md:text-xl font-semibold">
                          <h2>{props.trainingMetadata.headLine}</h2>
                        </motion.div>

                        <button
                          onClick={() => setContactPopupVisible(true)}
                          style={{ textDecoration: "none" }}
                          className="md:block  underline-0  hidden mr-14"
                        >
                          <div className={`bg-white rounded-md py-2 text-white flex w-[] hover:bg-gray ${props.trainingMetadata.name === 'Microsoft Copilot Training Certification' ? 'hidden' : ''}`}>
                            <div className="flex gap-2"></div>
                            <div className="flex w-full px-2 font-semibold text-xl text-blue-600 flex-col">
                              Download Brochure
                            </div>
                          </div>

                        </button>
                        {isContactPopupVisible && (
                          <div className="text-black fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                            <EnquiryForm
                              onClose={() => setContactPopupVisible(false)}
                              onFormSubmit={handleFormSubmit}
                              onPdfDownload={handleGeneratePdf}
                              courseName={props.trainingMetadata?.name}
                            />
                          </div>
                        )}
                      </div>

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
                            <div><b>275 Ratings</b></div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex items-center ">
                            <BsFillPeopleFill />
                          </div>
                          <b>399 Learners</b>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex items-center ">
                            <BsFillPeopleFill />
                          </div>
                          <b>{props.trainingMetadata.trainingType}</b>
                        </div>

                        <div className="flex gap-2">
                          <div className="flex items-center ">
                            <BiTime />
                          </div>{" "}
                          <b>{props.trainingMetadata.duration}</b>
                        </div>
                      </motion.div>

                      {props.trainingMetadata.name === 'Microsoft Copilot Training Certification' && (
                        <div className="flex items-center">
                          <img src="/microsoftLogo.png" alt="Microsoft Logo" className="w-10 h-10" />
                          <div className="ml-2">
                            <p className="text-[11px]">Power By</p>
                            <p className="text-[15px] tracking-wider font-semibold">MICROSOFT</p>
                          </div>
                        </div>
                      )}




                      <div className="mt-2 md:w-[75%] font-base md:p-0 p-4  md:text-left text-justify ">
                        {props.trainingMetadata.body}


                        <button
                          onClick={() => setContactPopupVisible(true)}
                          style={{ textDecoration: "none" }}
                          className="md:hidden  w-full underline-0 block mr-14"
                        >
                          <div className="  mt-12 flex justify-center text-white  opa  rounded-md py-2  ">
                            <div className="flex gap-2"></div>
                            <div className="flex  px-2  rounded-md py-2 font-semibold text-xl bg-white w-fit text-blue-600  flex-col">
                              Download Brochure
                            </div>
                          </div>
                        </button>
                        {isContactPopupVisible && (
                          <div className="text-black top-0 left-0 w-full h-20 flex justify-center items-center bg-black bg-opacity-50">
                            <EnquiryForm
                              onClose={() => setContactPopupVisible(false)}
                              onFormSubmit={handleFormSubmit}
                              onPdfDownload={handleGeneratePdf}
                              courseName={props.trainingMetadata?.name}
                            />
                          </div>
                        )}
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
                        <div className="mt-2 mb-3">
                          <div className="flex justify-between">
                            <p className=" text-2xl font-bold   mb-4">Overview</p>
                          </div>
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
                            <div className="md:w-[500px] justify-end md:pt-0 pt-4 mr-2 _pt-8 items-end  flex flex-row gap-3">
                              <div className="md:w-fit flex-3 w-full  md:pt-0 pt-4 h-[300px]  md:h-fit flex justify-center">
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
                                    <div className="flex flex-col items-center">
                                      <span className="font-bold text-blue">
                                        ₹ {formattedPrice}
                                      </span>
                                      <p className="mb-1 text-[16px] font-medium">(Incl. taxes)</p>
                                      <p className="text-[16px] font-dark">Easy EMIs from ₹5333 per month</p>
                                    </div>

                                  ) : (
                                    <div className="flex flex-col items-center">
                                      <span className="font-bold text-blue">
                                        ₹ {calculateDiscountedPrice()}
                                      </span>
                                      <p className="mb-1 text-[16px] font-medium">(Incl. taxes)</p>
                                      <p className="text-[16px] font-dark">Easy EMIs from ₹5333 per month</p>
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
                              <button className="bg-lightBlue  hover:bg-blue-600 rounded-md text-white px-9 py-2 font-semibold text-xl mt-4">
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
                        <div className="flex shadow-md w-full bg-white pb-12 pt-8 rounded-xl flex-col items-center gap-5">
                          <div className="px-5">
                            <p className="pt-3 pb-4 text-xl text-center font-semibold">
                              Upcoming Batches
                            </p>

                            <div className="flex flex-col items-center text-blue-600 text-center gap-3">
                              {props.trainingMetadata.batches.map((item, index) => (
                                <div className="text-sm" key={index}>
                                  <div className="mb-1 font-Mynerve font-bold text-2xl tracking-wide">{item.name}</div>
                                  <div className="font-bold">
                                    {moment(item.startDate).format("YYYY-MMM-DD HH:mm")} -{" "}
                                    {moment(item.endDate).format("YYYY-MMM-DD HH:mm")}
                                  </div>
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

                            <div className="flex items-center gap-2 justify-center">
                              <div className="text-left text-xl font-semibold">
                                <span className="tracking-wider">+91-9845 348 601</span>
                              </div>
                              <div className="flex items-center">
                                <div className="text-blue-600">
                                  <BsTelephone size={24} />
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
                <div className="mt-10">
                  <Testimonials />
                </div>
              </section>
              {loadingVisible === true ? (
                <div
                  className="inset-0 bg-[#3d3c3d] opacity-75 fixed  flex w-full h-full items-center justify-center duration-300 transition-opacity"
                  style={{ zIndex: 6000 }}
                >
                  <div className="flex-col">
                    <div className="w-24 h-24 ">
                      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#3d3c3d] opacity-75 flex flex-col items-center justify-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-4 border-buttonBlue h-16 w-16 mb-4"></div>
                        <h2 className="text-center text-white text-xl font-semibold">
                          Loading...
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {showPopup && (
                <div className=" bg-black opacity-82 fixed" style={{ zIndex: 7000 }}>
                  <LeadForm onClose={closePopup} />
                </div>
              )}
            </section>

          </section>
        </>

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
      trainingId,
    },
  };
};
