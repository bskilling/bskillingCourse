/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Head from 'next/head';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ConsultationForm from '@/components/pages/corporate/LeadForm';

const CorporateTraining = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Corporate Training - bSkilling</title>
        <meta
          name="description"
          content="Elevate your organization's performance with bSkilling's AI-powered corporate training programs."
        />
      </Head>

      {/* Hero Section - Modernized with overlay and animated gradient */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10 pointer-events-none"></div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            Elevate Your Workforce with Expert-Led Training
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Future-proof your organization with our comprehensive upskilling programs.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Consultation Form Modal */}
          <ConsultationForm open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
      </section>

      {/* Intro Section - Structured & Professional */}
      <section className="py-20 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            The Future of Workforce Training Starts Here
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left Content (Text) */}
            <div className="md:col-span-7">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                The digital landscape is evolving rapidly, and staying ahead requires a future-ready
                workforce. As technology stacks shift, even top enterprises struggle to keep pace.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Traditional training isn&lsquo;t enough. Organizations need real-time expertise,
                hands-on guidance, and customized learning solutions that align with their goals.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We provide cutting-edge, expert-led training programs, ensuring your teams acquire
                in-demand skills quickly and effectively—both online and offline.
              </p>
            </div>

            {/* Right Content (Icons & Key Highlights) */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-blue-700 text-3xl">📈</span>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900">Industry-Relevant Skills</h4>
                  <p className="text-gray-700">
                    Stay updated with the latest tools & technologies shaping the industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-700 text-3xl">🎯</span>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Customized Training Solutions
                  </h4>
                  <p className="text-gray-700">
                    Tailored programs to fit your organization&lsquo;s unique learning needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-700 text-3xl">🚀</span>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900">Expert-Led Sessions</h4>
                  <p className="text-gray-700">
                    Learn from top industry professionals with real-world experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Enhanced with hover effects */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Key Benefits for Your Organization
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-600">
            <div className="w-16 h-16 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Accelerated Skill Development</h3>
            <p className="text-gray-600">
              Rapid upskilling programs tailored to your business objectives
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-600">
            <div className="w-16 h-16 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Customized Learning Paths</h3>
            <p className="text-gray-600">
              Personalized training journeys based on role and skill gaps
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-600">
            <div className="w-16 h-16 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Measurable ROI</h3>
            <p className="text-gray-600">
              Comprehensive analytics to track progress and performance improvement
            </p>
          </div>
        </div>
      </section>

      {/* Training Domains - Enhanced with card design */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Core Training Domains
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud & DevOps',
                topics: ['AWS', 'Azure', 'Cloud Security', 'Infrastructure'],
                icon: '☁️',
              },
              {
                title: 'AI & Machine Learning',
                topics: ['Generative AI', 'Computer Vision', 'MLOps', 'Ethics'],
                icon: '🤖',
              },
              {
                title: 'Web Development',
                topics: ['React', 'Angular', 'Node.js', 'Full Stack'],
                icon: '🌐',
              },
              {
                title: 'Data Engineering',
                topics: ['ETL', 'Big Data', 'Data Lakes', 'Warehousing'],
                icon: '📊',
              },
              {
                title: 'Cybersecurity',
                topics: ['Pen Testing', 'Compliance', 'Secure Coding', 'Risk Management'],
                icon: '🔒',
              },
              {
                title: 'Agile Methodologies',
                topics: ['Scrum', 'Kanban', 'SAFe', 'Project Management'],
                icon: '🔄',
              },
            ].map(domain => (
              <div
                key={domain.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-6">{domain.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">{domain.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {domain.topics.map(topic => (
                    <span
                      key={topic}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Learning Partners - Enhanced carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Certified Learning Partners
          </h2>
          <Carousel className="mt-10 max-w-5xl mx-auto">
            <CarouselContent className="items-center">
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/1.png"
                  alt="Learning Partner"
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/2.jpg"
                  alt="Learning Partner"
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/3.png"
                  alt="Learning Partner"
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/4.png"
                  alt="Learning Partner"
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/5.png"
                  alt="Learning Partner"
                  className="h-20 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/AWS.png"
                  alt="AWS"
                  className="h-10 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/micro.png"
                  alt="Microsoft"
                  className="h-10 m-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="text-center md:basis-1/4">
                <img
                  src="/new-image/companies/company.png"
                  alt="Company"
                  className="h-10 m-auto object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-blue-100 text-blue-700 hover:bg-blue-200" />
            <CarouselNext className="bg-blue-100 text-blue-700 hover:bg-blue-200" />
          </Carousel>
        </div>
      </section>

      {/* Methodology - Enhanced with modern layout */}
      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
            Our Training Methodology
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Existing content */}
            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-100 p-4 rounded-lg text-2xl">📚</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-800">
                    Blended Learning Approach
                  </h3>
                  <p className="text-gray-600">
                    Combine self-paced modules with live expert sessions for maximum knowledge
                    retention and practical skill building.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-100 p-4 rounded-lg text-2xl">🧩</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-800">Project-Based Learning</h3>
                  <p className="text-gray-600">
                    Apply new skills to real-world scenarios with hands-on projects tailored to your
                    industry challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-100 p-4 rounded-lg text-2xl">🔄</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-800">Continuous Assessment</h3>
                  <p className="text-gray-600">
                    Regular feedback loops and skill validation ensure learning objectives are being
                    met throughout the program.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - New content */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-800 text-center">Training Impact</h3>

              <div className="space-y-6">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Knowledge Retention</span>
                    <span className="text-sm font-medium text-blue-700">92%</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                    <div className="w-11/12 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 rounded"></div>
                  </div>
                </div>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Practical Application</span>
                    <span className="text-sm font-medium text-blue-700">88%</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                    <div className="w-10/12 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 rounded"></div>
                  </div>
                </div>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Team Collaboration</span>
                    <span className="text-sm font-medium text-blue-700">95%</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                    <div className="w-11/12 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 rounded"></div>
                  </div>
                </div>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">
                      Problem-Solving Skills
                    </span>
                    <span className="text-sm font-medium text-blue-700">90%</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                    <div className="w-10/12 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4 text-blue-800">Training Outcomes</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Improved productivity by 35%</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Reduced onboarding time by 40%</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-700">Increased innovation initiatives by 28%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we offer course - Enhanced with card design */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
            How We Offer Courses
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-8 border-blue-600">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Hybrid Learning</h3>
            <p className="text-gray-700 leading-relaxed">
              When it comes to workforce training, each organization has specific needs. We at SFJ
              understand that, and offer a diverse and flexible approach to training without
              compromising on quality or effectiveness. Our training programs are delivered online
              and offline, in self-learning mode and an instructor-led mode. We also offer hybrid
              models, where employees can go through a series of courses online followed by advanced
              offline sessions with instructors. Whether it&#39;s a project specific training or
              long-term capacity building, experienced professionals or campus recruits, we got your
              upskilling needs covered.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-blue-600">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Strong Network</h3>
            <p className="text-gray-700 leading-relaxed">
              Our knowledge services ecosystem is constantly connected and updated with experts who
              can deliver training sessions on demand. We have an exceptional turnaround time when
              it comes to deploying the training bandwidth your organization needs. Through our
              network of 5000+ trainers, 1000+ SMEs, we are uniquely placed to help your
              organization achieve your talent transformation goals with the most optimal strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with contrasting background */}
      <section className="bg-gray-100 text-gray-900 py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">5,000+</div>
              <p className="text-gray-700">Expert Trainers</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">1,000+</div>
              <p className="text-gray-700">Subject Matter Experts</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">50+</div>
              <p className="text-gray-700">Training Domains</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="text-4xl font-bold text-blue-800 mb-2">98%</div>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned with a modern look */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-5 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10 pointer-events-none"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Upskilling Journey Today
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact our learning consultants to design your custom program tailored to your
            organization&lsquo;s specific needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105"
            >
              Get Started Now
            </button>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-white bg-opacity-20 border-2 border-white text-white px-8 py-4 rounded-full font-bold backdrop-blur-lg hover:bg-opacity-30 transition-all"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New addition */}
      <section className="py-20 bg-gray-50 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-5xl text-blue-200 absolute -top-4 left-4">{"'"}</div>
              <p className="text-gray-700 mb-6 pt-4">
                The bSkilling team delivered exceptional cloud training for our IT department. The
                customized curriculum addressed our specific needs and the hands-on approach ensured
                immediate application.
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">CTO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-5xl text-blue-200 absolute -top-4 left-4">{"'"}</div>
              <p className="text-gray-700 mb-6 pt-4">
                Our team&lsquo;s AI capabilities improved dramatically after bSkilling&lsquo;s
                comprehensive machine learning program. The ROI was evident within months through
                increased efficiency and innovation.
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Data Science Lead, Innovate Corp</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-5xl text-blue-200 absolute -top-4 left-4">&lsquo;</div>
              <p className="text-gray-700 mb-6 pt-4">
                bSkilling&lsquo;s hybrid learning approach was perfect for our distributed team. The
                flexibility of online modules combined with targeted workshops resulted in
                consistent skill development.
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Lisa Rodriguez</h4>
                  <p className="text-sm text-gray-500">HR Director, GlobalServe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - New addition */}
      {/* <footer className="bg-blue-900 text-white py-12 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">bSkilling</h3>
            <p className="text-blue-200">
              Empowering organizations through expert-led training and
              continuous skill development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  For Enterprises
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-blue-200">info@bskilling.com</li>
              <li className="text-blue-200">+1 (555) 123-4567</li>
              <li className="text-blue-200">500 Tech Parkway, Suite 300</li>
              <li className="text-blue-200">San Francisco, CA 94107</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-blue-200 mb-4">
              Stay updated with our latest training programs and industry
              insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500">
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>© 2025 bSkilling. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
};

export default CorporateTraining;
