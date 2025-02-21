import SkillOffering from '@/pages/college-training/skill-assisting-program/_components/SkillOffering';
import {
  Code,
  Layers,
  Cpu,
  Terminal,
  Paintbrush,
  BookOpen,
  CheckCircle,
} from 'lucide-react';
// import SkillOffering from './SkillOffering';

const CourseCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-3">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function ProgramOverview() {
  return (
    <div className="w-[90vw] mx-auto px-6 py-12 space-y-24">
      {/* Program Focus Areas Section */}
      {/* Program Focus Areas Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1">
          {/* Your existing content */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl shadow-lg p-10 relative overflow-hidden flex flex-col gap-6">
            {/* Floating Icon on Top */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center opacity-80">
              <Code className="w-10 h-10 text-purple-600" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Program Focus Areas
            </h2>

            {/* Focus List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                {
                  icon: <Code className="w-7 h-7 text-purple-600" />,
                  title: 'Bridging the Gap',
                  description:
                    'Between theoretical knowledge and industry requirements.',
                },
                {
                  icon: <Layers className="w-7 h-7 text-purple-600" />,
                  title: 'Empowering Students',
                  description: 'To apply knowledge in real-world scenarios.',
                },
                {
                  icon: <Cpu className="w-7 h-7 text-purple-600" />,
                  title: 'Industry Trends',
                  description:
                    'Keeping students updated with latest technologies.',
                },
                {
                  icon: <Terminal className="w-7 h-7 text-purple-600" />,
                  title: 'Problem Solving Skills',
                  description: 'Built through hands-on experience.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  {/* Icon Circle */}
                  <div className="w-12 h-12 bg-purple-200 flex items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights of the Program */}
          <section className="bg-white rounded-2xl shadow-lg p-12 space-y-6">
            <h4 className="text-3xl font-bold text-center text-gray-800">
              Key Highlights of the Program
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                {
                  icon: <Code className="w-12 h-12 text-purple-600" />,
                  title: 'Hands-on Projects',
                  description:
                    'Real-world projects to help students apply their classroom knowledge in practical scenarios.',
                },
                {
                  icon: <Layers className="w-12 h-12 text-purple-600" />,
                  title: 'Comprehensive Skill Training',
                  description:
                    'Covering both technical and soft skills to create well-rounded professionals.',
                },
                {
                  icon: <Cpu className="w-12 h-12 text-purple-600" />,
                  title: 'Modern Tools & Technologies',
                  description:
                    'Exposure to IT systems, data analytics, and emerging technologies.',
                },
                {
                  icon: <BookOpen className="w-12 h-12 text-purple-600" />,
                  title: 'Industry-Relevant Curriculum',
                  description:
                    'A carefully curated curriculum aligned with current market demands and trends.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-purple-50 p-6 rounded-xl shadow-md"
                >
                  <div className="bg-white p-3 rounded-full shadow">
                    {item.icon}
                  </div>
                  <h5 className="text-xl font-semibold text-gray-800 mt-4">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="hidden lg:flex flex-col gap-6 w-80 sticky top-10">
          {/* Inquiry Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Quick Inquiry
            </h3>
            <p className="text-gray-600 text-sm">
              Want more details? Fill in your info and we’ll get in touch!
            </p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Submit Inquiry
            </button>
          </div>

          {/* Key Highlights */}
          <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white shadow-lg rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Why Choose This Program?</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Hands-on projects with real-world applications.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Training in modern tools & emerging technologies.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Industry-relevant curriculum aligned with market trends.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Personalized mentorship and career guidance.
              </li>
            </ul>
          </div>

          {/* Call-to-Action Box */}
          <div className="bg-purple-100 text-purple-900 shadow-lg rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold">🚀 Ready to Upskill?</h3>
            <p className="text-sm mt-2">
              Take the first step towards a brighter future with our
              cutting-edge program.
            </p>
            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Skill Offering Section */}
      <section>
        <SkillOffering />
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 rounded-2xl shadow-lg p-12">
        <h4 className="text-3xl font-bold text-center text-gray-800">
          How It Works?
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {[
            {
              icon: <Code className="w-10 h-10 text-purple-600" />,
              text: 'Enroll in Course',
            },
            {
              icon: <Paintbrush className="w-10 h-10 text-purple-600" />,
              text: 'Get Training',
            },
            {
              icon: <Cpu className="w-10 h-10 text-purple-600" />,
              text: 'Get Certification',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 bg-white rounded-lg p-6 shadow-md"
            >
              {step.icon}
              <p className="text-lg font-medium text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Forms Section */}
      <section className="bg-gray-50 rounded-2xl shadow-lg p-10">
        <h4 className="text-3xl font-bold text-center text-gray-800">
          Commonly Used Full Forms
        </h4>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 text-lg text-gray-700">
          {[
            { short: 'AI', full: 'Artificial Intelligence' },
            { short: 'ML', full: 'Machine Learning' },
            { short: 'API', full: 'Application Programming Interface' },
            { short: 'UI', full: 'User Interface' },
            { short: 'UX', full: 'User Experience' },
            { short: 'DBMS', full: 'Database Management System' },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <strong className="text-purple-600">{item.short}:</strong>
              <span>{item.full}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Courses Offered Section */}
      <section className="bg-white rounded-2xl shadow-lg p-12">
        <h4 className="text-3xl font-bold text-center text-gray-800">
          Courses Offered
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: 'Web Development',
              description: 'Learn HTML, CSS, JavaScript, React, and more.',
            },
            {
              title: 'Data Science',
              description: 'Master Python, ML, AI, and Data Visualization.',
            },
            {
              title: 'Cybersecurity',
              description:
                'Understand security protocols, ethical hacking, and encryption.',
            },
          ].map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
}
