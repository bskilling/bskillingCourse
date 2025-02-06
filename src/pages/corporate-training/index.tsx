/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import usePrograms from '../../lib/hooks/usePrograms';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRouter } from 'next/router';
import Link from 'next/link';

const topicsWithImages = {
  'Artificial intelligence': '/new-images/aii.jpg', // Replace with actual URL
  AWS: '/new-images/aws.jpg', // Replace with actual URL
  'Latest Technology': '/new-images/latest-tech.jpg', // Replace with actual URL
  Microsoft: '/new-images/microsoft.webp', // Replace with actual URL
  Others: '/new-images/others.jpg', // Replace with actual URL
  'Cyber Security': '/new-images/cyber-security.jpg', // Replace with actual URL
  Cloud: '/new-images/cloud11.jpg', // Replace with actual URL
  'Project Management': '/new-images/project-mangement.jpg', // Replace with actual URL
  FinTech: '/new-images/fintech.webp', // Replace with actual URL
  IIBA: '/new-images/bussiness.jpg', // Replace with actual URL
  GenZ: '/new-images/genz.webp', // Replace with actual URL
  'IT Service & Architecture': '/new-images/it.webp', // Replace with actual URL
  SAP: '/new-images/sap.webp', // Replace with actual URL
  Java: '/new-images/java.jpg', // Replace with actual URL
};
const cats = [
  // Cloud Related
  {
    title: 'AWS',
    description:
      'Master cloud computing with Amazon Web Services. Learn how to design and deploy scalable, reliable, and efficient solutions.',
    image: '/new-images/aws.jpg',
  },
  {
    title: 'Cloud Computing',
    description:
      'Explore the future of IT with cloud-based technologies. Gain insights into infrastructure, storage, and SaaS solutions.',
    image: '/new-images/cloud11.jpg',
  },
  {
    title: 'Microsoft Azure',
    description:
      'Unlock the power of Azure for cloud-based application development, storage solutions, and advanced analytics.',
    image: '/new-images/microsoft.webp',
  },
  {
    title: 'Cyber Security in Cloud',
    description:
      'Learn to secure your cloud-based applications and infrastructure with best practices and advanced tools.',
    image: '/new-images/cyber-security.jpg',
  },

  // Business Related
  {
    title: 'Project Management',
    description:
      'Enhance your leadership skills and manage projects efficiently with tools like Agile, Scrum, and Waterfall.',
    image: '/new-images/project-mangement.jpg',
  },
  {
    title: 'FinTech',
    description:
      'Dive into the world of financial technology, where innovation meets banking, payment systems, and blockchain.',
    image: '/new-images/fintech.webp',
  },
  {
    title: 'IIBA',
    description:
      'Gain business analysis expertise with International Institute of Business Analysis certifications and training.',
    image: '/new-images/bussiness.jpg',
  },

  // Medical Related
  {
    title: 'Medical AI',
    description:
      'Learn how AI is transforming the healthcare sector, from diagnostics to personalized medicine.',
    image: '/new-images/aii.jpg',
  },
  {
    title: 'Telemedicine Technology',
    description:
      'Explore advancements in telemedicine and how it connects doctors with patients seamlessly.',
    image: '/new-images/others.jpg',
  },
  {
    title: 'Healthcare Data Security',
    description:
      'Understand the importance of cybersecurity in protecting sensitive healthcare data.',
    image: '/new-images/cyber-security.jpg',
  },

  // Technology Related
  {
    title: 'Artificial Intelligence',
    description:
      'Discover the latest in AI, including machine learning, natural language processing, and AI ethics.',
    image: '/new-images/aii.jpg',
  },
  {
    title: 'Java',
    description:
      'Master Java programming for web development, enterprise applications, and Android development.',
    image: '/new-images/java.jpg',
  },
  {
    title: 'Latest Technology',
    description:
      'Stay ahead with insights into cutting-edge technologies shaping the future of innovation.',
    image: '/new-images/latest-tech.jpg',
  },
  {
    title: 'SAP',
    description:
      'Get hands-on training in SAP ERP systems, from financials to logistics and supply chain management.',
    image: '/new-images/sap.webp',
  },

  // GenZ Related
  {
    title: 'GenZ Workforce',
    description:
      'Learn how to engage and manage GenZ employees in today’s evolving workplace.',
    image: '/new-images/genz.webp',
  },

  // Miscellaneous
  {
    title: 'IT Service & Architecture',
    description:
      'Master IT service management and architectural design for scalable IT solutions.',
    image: '/new-images/it.webp',
  },
  {
    title: 'Others',
    description:
      'Find out about various emerging topics and customized training solutions tailored to your needs.',
    image: '/new-images/others.jpg',
  },
];
const sectors = [
  {
    sector: 'Cloud Computing',
    subCategories: [
      {
        title: 'AWS',
        description:
          'Master cloud computing with Amazon Web Services. Learn how to design and deploy scalable, reliable, and efficient solutions.',
        image: '/new-images/aws.jpg',
      },
      {
        title: 'Cloud Computing Basics',
        description:
          'Explore the future of IT with cloud-based technologies. Gain insights into infrastructure, storage, and SaaS solutions.',
        image: '/new-images/cloud11.jpg',
      },
      {
        title: 'Microsoft Azure',
        description:
          'Unlock the power of Azure for cloud-based application development, storage solutions, and advanced analytics.',
        image: '/new-images/microsoft.webp',
      },
      {
        title: 'Cyber Security in Cloud',
        description:
          'Learn to secure your cloud-based applications and infrastructure with best practices and advanced tools.',
        image: '/new-images/cyber-security.jpg',
      },
      {
        title: 'IT Service & Architecture',
        description:
          'Master IT service management and architectural design for scalable IT solutions, especially in cloud environments.',
        image: '/new-images/it.webp',
      },
    ],
  },
  {
    sector: 'Business & Finance',
    subCategories: [
      {
        title: 'Project Management',
        description:
          'Enhance your leadership skills and manage projects efficiently with tools like Agile, Scrum, and Waterfall.',
        image: '/new-images/project-mangement.jpg',
      },
      {
        title: 'FinTech',
        description:
          'Dive into the world of financial technology, where innovation meets banking, payment systems, and blockchain.',
        image: '/new-images/fintech.webp',
      },
      {
        title: 'IIBA (Business Analysis)',
        description:
          'Gain business analysis expertise with International Institute of Business Analysis certifications and training.',
        image: '/new-images/bussiness.jpg',
      },
    ],
  },
  {
    sector: 'Healthcare & Medical',
    subCategories: [
      {
        title: 'Medical AI',
        description:
          'Learn how AI is transforming the healthcare sector, from diagnostics to personalized medicine.',
        image: '/new-images/aii.jpg',
      },
      {
        title: 'Telemedicine Technology',
        description:
          'Explore advancements in telemedicine and how it connects doctors with patients seamlessly.',
        image: '/new-images/others.jpg',
      },
      {
        title: 'Healthcare Data Security',
        description:
          'Understand the importance of cybersecurity in protecting sensitive healthcare data.',
        image: '/new-images/cyber-security.jpg',
      },
    ],
  },
  {
    sector: 'Technology & Development',
    subCategories: [
      {
        title: 'Artificial Intelligence',
        description:
          'Discover the latest in AI, including machine learning, natural language processing, and AI ethics.',
        image: '/new-images/aii.jpg',
      },
      {
        title: 'Java Development',
        description:
          'Master Java programming for web development, enterprise applications, and Android development.',
        image: '/new-images/java.jpg',
      },
      {
        title: 'Latest Technology Trends',
        description:
          'Stay ahead with insights into cutting-edge technologies shaping the future of innovation.',
        image: '/new-images/latest-tech.jpg',
      },
      {
        title: 'SAP Systems',
        description:
          'Get hands-on training in SAP ERP systems, from financials to logistics and supply chain management.',
        image: '/new-images/sap.webp',
      },
    ],
  },
  {
    sector: 'Workforce & Management',
    subCategories: [
      {
        title: 'GenZ Workforce',
        description:
          'Learn how to engage and manage GenZ employees in today’s evolving workplace.',
        image: '/new-images/genz.webp',
      },
      {
        title: 'Others',
        description:
          'Find out about various emerging topics and customized training solutions tailored to your needs.',
        image: '/new-images/others.jpg',
      },
    ],
  },
];

// export default sectors;

// export default topicsWithImages;

export default function CorporateTraining() {
  const { data, error, isLoading } = usePrograms();
  console.log('dataa', data);
  return (
    <>
      <Head>
        <title>Corporate Training - bSkilling</title>
        <meta
          name="description"
          content="Elevate your organization's performance with bSkilling's AI-powered corporate training programs, designed to enhance employee skills and align with your business objectives."
        />
        <meta
          name="keywords"
          content="Corporate Training, AI-Powered Training, Employee Development, bSkilling"
        />
        <meta property="og:title" content="Corporate Training - bSkilling" />
        <meta
          property="og:description"
          content="Elevate your organization's performance with bSkilling's AI-powered corporate training programs."
        />
        <meta property="og:image" content="/new-images/corporate-train.jpg" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/corporate-training"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className=" w-full">
        <img src="/new-images/corp.webp" alt="" className="w-full" />
      </div>
      <div className="md:w-[80vw] w-full m-auto px-5 md:px-0 pb-10">
        <div className="mt-10">
          <h2 className="text-[#0d60e0] text-2xl font-bold">About Training</h2>
          <p className="mt-5">
            The digital services eco-system as we know it is undergoing a
            paradigm shift. New stacks and standards are emerging faster than
            ever, and every organization with a digital footprint is under
            serious pressure to quickly build and maintain a future-ready
            workforce. It is no secret that even large corporations with immense
            resources at their disposal are struggling to cope with this
            challenge. Empowering workforce on the go requires deep expertise
            that can be brought within the time and cost allocated. Our
            knowledge services ecosystem is constantly connected/updated with
            experts who can deliver online/offline trainings on several
            in-demand technology skills for your project teams and campus
            recruits.
          </p>
        </div>

        {/* {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="md:w-[80vw] w-full m-auto">
            <h2 className="text-[#0d60e0] text-2xl font-bold text-center mt-10">
              Training Domains
            </h2>
            <p className="mt-5">
              We give training in various domains and topics, Below are the
              topics we cover.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
              {data &&
                Object.entries(data).map(([key, value]) => (
                  <Link href={`/individual-training?tab=${key}`} key={key}>
                    <div key={key} className="p-2">
                      <img
                        src={
                          topicsWithImages[key as keyof typeof topicsWithImages]
                        }
                        alt={key}
                        className="w-full h-[180px] object-cover"
                      />
                      <p className="font-bold">{key}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )} */}
        <div className="md:w-[80vw] w-full m-auto">
          <h2 className="text-[#0d60e0] text-2xl font-bold text-center mt-10">
            Training Domains
          </h2>
          <p className="mt-5">
            We give training in various domains and topics, Below are the topics
            we cover.
          </p>
          <div className="grid grid-cols-1  gap-10 mt-10">
            {sectors?.map((e) => (
              <div key={e.sector} className="p-4  rounded-md shadow-md ">
                <p className="font-bold text-2xl">{e.sector}</p>

                <div className="grid grid-cols-4 gap-5 mt-5">
                  {e.subCategories.map((i) => (
                    <div key={i.title}>
                      <img
                        src={i.image}
                        alt={i.title}
                        className="w-full h-[180px] object-cover"
                      />
                      <p className="text-sm">{i.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 md:px-0 px-5 w-[80vw] m-auto">
          <h1 className="text-[#0d60e0] md:text-4xl text-2xl text-center">
            Certified learning partners
          </h1>
          <Carousel className="mt-10">
            <CarouselContent className="items-center">
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/1.png"
                  alt=""
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/2.jpg"
                  alt=""
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/3.png"
                  alt=""
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/4.png"
                  alt=""
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/5.png"
                  alt=""
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>

              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/AWS.png"
                  alt=""
                  className="h-10 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/micro.png"
                  alt=""
                  className="h-10 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-images/companies/company.png"
                  alt="asassasa"
                  className="h-10 m-auto object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="w-[80vw] m-auto">
          <h2 className="text-[#0d60e0] md:text-4xl text-2xl  text-center mt-10">
            How we offer course ?
          </h2>
          <p className="mt-10 font-bold">Hybrid Learning</p>
          <p>
            When it comes to workforce training, each organization has specific
            needs. We at SFJ understand that, and offer a diverse and flexible
            approach to training without compromising on quality or
            effectiveness. Our training programs are delivered online and
            offline, in self-learning mode and an instructor-led mode. We also
            offer hybrid models, where employees can go through a series of
            courses online followed by advanced offline sessions with
            instructors. Whether it&#39;s a project specific training or
            long-term capacity building, experienced professionals or campus
            recruits, we got your upskilling needs covered.
          </p>

          <h2 className="text-[#0d60e0] md:text-4xl text-2xl  text-center mt-10">
            Our Strong Network
          </h2>
          <p className="mt-10 font-bold"> Strong Network</p>
          <p>
            Our knowledge services ecosystem is constantly connected and updated
            with experts who can deliver training sessions on demand. We have an
            exceptional turnaround time when it comes to deploying the training
            bandwidth your organization needs. Through our network of 5000+
            trainers, 1000+ SMEs, we are uniquely placed to help your
            organization achieve your talent transformation goals with the most
            optimal strategy.
          </p>
        </div>
      </div>
    </>
  );
}
