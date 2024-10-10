import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

interface BlogType {
  _id: string;
  title: string;
  content: string;
  banner: string;
  createdAt: string;
  slug: string;
}

export default function Blogs() {
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
      auth: "",
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
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-blogs`);
        console.log("res",response.data)
        setBlogs(response.data.posts);  // Assuming the API returns an array of blog objects
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Head>
        <title>bSkilling Blogs</title>
        <meta
          name="bSkilling Blogs"
          content="Stay Updated with Our Blog | Read Informative Articles on the Latest Trends in Online Learning"
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

      <section className="text-black bg-gray body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-12 ">
            <h1 className="text-4xl tracking-wide mb-10 text-center ">
              Latest Blog Posts
            </h1>
          </div>
          <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 flex-wrap gap-y-5 gap-8 ">
            {blogs.map(({ _id, title, banner, slug, createdAt }) => (
              <div
                key={_id}
                className="w-fit shadow-md bg-white flex flex-col lg:flex-1 justify-between bg-opacity-75 rounded-lg overflow-hidden text-center relative"
              >
                <div>
                  <div className="w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                    <img
                      className="flex-shrink-0 h-36 w-full object-cover xl:w-[100%] xl:h-[rem]"
                      src={banner}
                      alt={title}
                    />
                  </div>
                  <h2 className="title-font px-3 mt-2 text-lg text-left font-bold text-gray-900 mb-3">
                    {title}
                  </h2>
                  <p className="leading-relaxed px-3 mb-3 mt-2 text-sm text-left">
                    Published on: {new Date(createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex pb-4 justify-center">
                  <Link
                    style={{ textDecoration: 'none' }}
                    href={`/blog/blogDetails/${_id}`}
                    rel="noreferrer"
                  >
                    <p className="text-white bg-Buttoncolor transition duration-500 hover:scale-105 ease-out py-2 focus:ring-1 focus:outline-none focus:ring-buttonBlue font-medium text-sm px-4">
                      Read More
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
