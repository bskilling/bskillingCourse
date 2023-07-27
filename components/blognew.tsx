import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Testimonials() {
  const blog = [
    {
      id: 4,
      name: "Learning Trends in IT Skills",
      logo: "/blog/4.jpg",
      desc: "  As businesses and organizations look towards the future with optimism, hoping for normalcy to return soon, there is no............  ",
      link: "https://www.peoplematters.in/blog/hr-technology/learning-trends-in-india-skilling-digital-learning-and-the-future-28784",
      auth: "Manav Seth",
      sorc: "peoplematters.in",
    },

    {
      id: 7,
      name: "Role of Big Data Analytics For Business",
      logo: "/blog/7.jpg",
      desc: "Succeeding in today digital era is difficult. Business leaders have to be extremely aware of their market ........",
      link: "https://appinventiv.com/blog/big-data-analytics/",
      auth: "Sudeep Srivastava",
      sorc: "appinventiv.com",
    },
    {
      id: 8,
      name: "Role of Big Data Analytics For Business",
      logo: "/blog/eight.jpg",
      desc: " Big data analytics is the use of advanced computing technologies on huge data sets to discover valuable........",
      link: "https://blog.rgbsi.com/big-data-analytics-in-industry-4.0",
      auth: "null",
      sorc: "rgbsi.com",
    },
    {
      id: 9,
      name: "Relevance and Impact of AI/ML For Business",
      logo: "/aiandml.jpg",
      desc: "The world of work has become incredibly complex. Workers are trying to navigate a maze of hierarchies, work processes.........",
      link: "https://www.business2community.com/strategy/why-is-ai-ml-important-and-how-will-it-impact-buisiness-02404860",
      auth: "",
      sorc: "",
    },
    {
      id: 10,
      name: "Relevance and Impact of AI/ML For Business",
      logo: "/blog/10.jpg",
      desc: "AI/ML—short for artificial intelligence (AI) and machine learning (ML)represents an important evolution.......",
      link: "https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business",
      auth: "Deb Richardson",
      sorc: "redhat.com",
    },
    {
      id: 13,
      name: "Cloud Service Industry Trends",
      logo: "/blog/13.jpg",
      desc: "Over the years, cloud hosting has become synonymous with quality, speed and performance. The ........",
      link: "https://www.cloudoye.com/?utm_source=google&utm_medium=search&utm_campaign=Cloud&utm_id=CloudOYE-Cloudhosting&utm_term=Cloud-Hosting-India",
      auth: "Cloudoye",
      sorc: "cloudoye.com",
    },
    {
      id: 18,
      name: "Oracle",
      logo: "/blog/18.jpg",
      desc: "Today, at Microsoft Inspire, Satya Nadella, CEO of Microsoft, and Larry Ellison,.........",
      link: "https://blogs.oracle.com/cloud-infrastructure/post/announcing-oracle-database-service-for-microsoft-azure",
      auth: "Karan Batta",
      sorc: "oracle.com",
    },
    {
      id: 19,
      name: "SAP",
      logo: "/blog/19.jpg",
      desc: "Hello Everyone, Welcome to the technical series of the SAP Transportation Management .....",
      link: "https://blogs.sap.com/tags/73554900100800000266/",
      auth: "Andreas Riehl",
      sorc: "sap.com",
    },
    {
      id: 12,
      name: "IT Skills For The Future Economy",
      logo: "/blog/twelve.jpg",
      desc: "Many feel anxious about the impact of new technology on their jobs. This is not new. In fact, it dates .......",
      link: "https://blogs.imf.org/2018/05/01/technology-and-the-future-of-work/",
      auth: "Adrian Peralta",
      sorc: "blogs.imf.org",
    },
  ];
  const blog1 = [
    {
      id: 10,
      name: "Relevance and Impact of AI/ML For Business",
      logo: "/blog/10.jpg",
      desc: "AI/ML—short for artificial intelligence (AI) and machine learning (ML)represents an important evolution.......",
      link: "https://www.redhat.com/en/blog/what-aiml-and-why-does-it-matter-your-business",
      auth: "Deb Richardson",
      sorc: "redhat.com",
    },
    {
      id: 13,
      name: "Cloud Service Industry Trends",
      logo: "/blog/13.jpg",
      desc: "Over the years, cloud hosting has become synonymous with quality, speed and performance. The ........",
      link: "https://www.cloudoye.com/?utm_source=google&utm_medium=search&utm_campaign=Cloud&utm_id=CloudOYE-Cloudhosting&utm_term=Cloud-Hosting-India",
      auth: "Cloudoye",
      sorc: "cloudoye.com",
    },
    {
      id: 18,
      name: "Oracle",
      logo: "/blog/18.jpg",
      desc: "Today, at Microsoft Inspire, Satya Nadella, CEO of Microsoft, and Larry Ellison,.........",
      link: "https://blogs.oracle.com/cloud-infrastructure/post/announcing-oracle-database-service-for-microsoft-azure",
      auth: "Karan Batta",
      sorc: "oracle.com",
    },
    {
      id: 19,
      name: "SAP",
      logo: "/blog/19.jpg",
      desc: "Hello Everyone, Welcome to the technical series of the SAP Transportation Management .....",
      link: "https://blogs.sap.com/tags/73554900100800000266/",
      auth: "Andreas Riehl",
      sorc: "sap.com",
    },
    {
      id: 12,
      name: "IT Skills For The Future Economy",
      logo: "/blog/twelve.jpg",
      desc: "Many feel anxious about the impact of new technology on their jobs. This is not new. In fact, it dates .......",
      link: "https://blogs.imf.org/2018/05/01/technology-and-the-future-of-work/",
      auth: "Adrian Peralta",
      sorc: "blogs.imf.org",
    },
  ];

  return (
    <>
      <section className="text-black md:container  mx-auto  body-font md:pt-14 md:pb-10 ">
        <p className="   capitalize pt-4 md:pt-0 font-bold font-SourceSans text-xl text-center  mb-10 ">
          Latest Blog Posts
        </p>
        <div className="p-5">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000, // Delay between slides in milliseconds
            }}
            loop={true}
            speed={1200}
          >
            <div className="flex  flex-wrap gap-8 mb-4 ">
              {blog.map(({ name, logo, id, desc, link, sorc, auth }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      key={id}
                      className="w-fit flex bg-white flex-col lg:flex-1 min-h-[400px] justify-between bg-opacity-75   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <img
                            className=" flex-shrink-0 w-full h-36 object-cover xl:w-[100%] xl:h-[rem]"
                            src={logo}
                            alt=""
                          />
                        </div>

                        <h1 className="title-font px-3 mt-2 text-lg text-left font-bold text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="text-left  text-sm px-3 ">
                          Source : {sorc}
                        </p>
                        <p className="text-left text-sm  px-3 ">
                          Author : {auth}
                        </p>
                        <p className="leading-relaxed px-3 mb-5 mt-2 text-sm  text-left">
                          {desc.length > 100
                            ? desc.substring(0, 100) + "..."
                            : desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

          <div>
            <div className="flex pt-8 pb-6 justify-center">
              <Link href={"/blogs"}>
                <button className=" text-white bg-Buttoncolor transition duration-500 hover:scale-105 ease-out   py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium  text-sm px-4  ">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
