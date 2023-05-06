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
      id: 1,
      name: " The Enterprise Project",
      logo: "/blog/1.jpg",
      desc: "Many organizations are struggling with the digital transformation efforts that they have begun,” says David Rogers, author of The Digital Transformation... ",
      link: "https://enterprisersproject.com/article/2022/7/it-talent-upskilling-boost-digital-transformation",
      auth: "Gorden haff",
      sorc: "enterprisersproject.com",
    },
    {
      id: 2,
      name: "Hiring Trend in IT Industry",
      logo: "/blog/2.jpg",
      desc: "  The hiring landscape is constantly changing. At the same time, a range of external factors are impacting the U.S. economy.........",
      link: "https://www.smartrecruiters.com/blog/4-hiring-trends-you-need-to-know-about/",
      auth: "Augusta Henning",
      sorc: "smartrecruiters.com",
    },
    {
      id: 3,
      name: "Recruiters Using Automation Fill",
      logo: "/blog/3.jpg",
      desc: " Staffing and recruitment firms that embrace automation have a 64% higher fill rate, submit 33% more candidates per recruiter........",
      link: "https://aithority.com/robots/automation/recruiters-using-automation-fill-64-more-job-vacancies/",
      auth: "Ait News desk",
      sorc: "aithority.com",
    },
    {
      id: 4,
      name: "Learning Trends in IT Skills",
      logo: "/blog/4.jpg",
      desc: "  As businesses and organizations look towards the future with optimism, hoping for normalcy to return soon, there is no............  ",
      link: "https://www.peoplematters.in/blog/hr-technology/learning-trends-in-india-skilling-digital-learning-and-the-future-28784",
      auth: "Manav Seth",
      sorc: "peoplematters.in",
    },
  ];
  const blog1 = [
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
      id: 11,
      name: "Relevance and Impact of AI/ML For Business",
      logo: "/blog/eleven.jpg",
      desc: "Artificial Intelligence (AI) and Machine Learning (ML) are not on the way anymore. They are already here!.......",
      link: "https://www.grazitti.com/blog/the-impact-of-ai-ml-on-marketing/",
      auth: "Abeer Aulakh",
      sorc: "grazitti.com",
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

  const blog2 = [
    {
      id: 5,
      name: "Learning Trends in IT Skills",
      logo: "/blog/six.jpg",
      desc: " Over the last two decades, the rapid rise of digital technologies has resulted in organisations reevaluating........",
      link: "https://moodle.com/news/workplace-learning-trends-power-skills/",
      auth: "Abby fry",
      sorc: "moodle.com",
    },
    {
      id: 6,
      name: "Future of Work Spaces",
      logo: "/blog/5.jpg",
      desc: " The world of work has become incredibly complex. Workers are trying to navigate a maze of hierarchies, work processes.........",
      link: "https://www2.deloitte.com/global/en/pages/human-capital/articles/future-of-work-blog.html",
      auth: "Deloitte professionals",
      sorc: "deloitte.com",
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
      auth: "",
      sorc: "rgbsi.com",
    },
  ];
  const blog3 = [
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
      id: 14,
      name: "Salesforces",
      logo: "/blog/14.jpg",
      desc: "A recession may be on the way. Now is the time to develop a game plan for your sales .....",
      link: "https://www.salesforce.com/blog/",
      auth: "Jen Gustavson",
      sorc: "salesforce.com",
    },
    {
      id: 15,
      name: "Salesforces",
      logo: "/blog/15.jpg",
      desc: "Apex is the core language for customizing business logic on the Salesforce Platform .......",
      link: "https://developer.salesforce.com/blogs",
      auth: "Anthony Tavan",
      sorc: "salesforce.com",
    },
    {
      id: 16,
      name: "Salesforces",
      logo: "/blog/16.jpg",
      desc: "A marketplace called AppExchange provides products including software, parts, and .......",
      link: "https://www.forcetalks.com/blog/what-is-a-salesforce-appexchange-app-heres-all-you-need-to-know/",
      auth: "Codnix",
      sorc: "forcetalks.com",
    },
  ];

  return (
    <>
      <section className="text-black md:container  mx-auto  body-font md:pt-14 md:pb-10 ">
        <div className="">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            autoplay={true}
            // pagination={{ clickable: true }}
            loop={true}
            speed={1600}
            // breakpoints={{
            //   769: {
            //     slidesPerView: 4,
            //     slidesPerGroup: 4,
            //     spaceBetween: 20,
            //     autoplay: true,
            //     loop: true,
            //     speed: 800,

            //     pagination: {},
            //   },
            //   1024: {
            //     slidesPerView: 1,
            //     slidesPerGroup: 1,
            //     spaceBetween: 20,
            //     autoplay: true,
            //     loop: true,
            //     speed: 800,

            //     pagination: {},
            //   },
            // }}
          >
            <SwiperSlide>
              <p className="   capitalize  font-bold font-SourceSans text-xl text-center  mb-10 ">
                Latest Blog Posts
              </p>
              <div className="flex  flex-wrap gap-8 mb-4 ">
                {blog.map(({ name, logo, id, desc, link, sorc, auth }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit flex bg-white flex-col lg:flex-1  justify-between bg-opacity-75   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <img
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[rem]"
                            src={"/sap.png"}
                            width={400}
                            height={300}
                            alt=""
                          />
                        </div>

                        <h1 className="title-font px-3 stext-lg text-left font-bold text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="text-left px-3 ">Source : {sorc}</p>
                        <p className="text-left px-3 ">Author : {auth}</p>
                        <p className="leading-relaxed px-3  mt-2 text-left ">
                          {desc}
                        </p>
                      </div>
                      {/* <div className="flex justify-center mt-6 ">
                        <a href={link} rel="noreferrer" target="_blank">
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </a>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <p className="   capitalize  font-bold font-SourceSans text-xl text-center  mb-10 ">
                Latest Blog Posts
              </p>
              <div className="flex  flex-wrap gap-8 ">
                {blog.map(({ name, logo, id, desc, link, auth, sorc }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit flex flex-col bg-white lg:flex-1  justify-between bg-opacity-75    rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <img
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[rem]"
                            src={"/sap.png"}
                            width={400}
                            height={300}
                            alt=""
                          />
                        </div>

                        <h1 className="title-font px-3 text-lg text-left font-bold  text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="text-left px-3 ">Source : {sorc}</p>
                        <p className="text-left px-3 ">Author : {auth}</p>
                        <p className="leading-relaxed px-3  mt-2 text-left ">
                          {desc}
                        </p>
                      </div>
                      {/* <div className="flex justify-center mt-6 ">
                        <a href={link} rel="noreferrer" target="_blank">
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </a>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <p className="   capitalize  font-bold font-SourceSans text-xl text-center  mb-10 ">
                Latest Blog Posts
              </p>
              <div className="flex  flex-wrap gap-8 ">
                {blog.map(({ name, logo, id, desc, link, auth, sorc }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit flex flex-col bg-white lg:flex-1  justify-between bg-opacity-75    rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <img
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[rem]"
                            src={"/sap.png"}
                            width={400}
                            height={300}
                            alt=""
                          />
                        </div>

                        <h1 className="title-font px-3 text-lg text-left font-bold  text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="text-left px-3 ">Source : {sorc}</p>
                        <p className="text-left px-3 ">Author : {auth}</p>
                        <p className="leading-relaxed px-3  mt-2 text-left ">
                          {desc}
                        </p>
                      </div>
                      {/* <div className="flex justify-center mt-6 ">
                        <a href={link} rel="noreferrer" target="_blank">
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </a>
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
