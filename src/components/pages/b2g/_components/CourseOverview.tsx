import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { BsFolderCheck } from 'react-icons/bs';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

interface CourseOverviewProps {
  overview: { title: string; description: string; keyFeatures: string[] };
  curriculum: {
    modules: {
      _id: string;
      title: string;
      lessons: { _id: string; title: string; content: string }[];
    }[];
    projects?: { _id: string; title: string; content: string[] }[];
    prerequisites?: string[];
    eligibility?: string[];
  };
  category?: { type: string };
  skills: { title: string; logo: { viewUrl: string } }[];
  tools: { title: string; logo: { viewUrl: string } }[];
}

const CourseOverview: React.FC<CourseOverviewProps> = ({
  overview,
  curriculum,
  category,
  skills,
  tools,
}) => {
  return (
    <section className="-mt-56 m-auto flex">
      {/* Left Content */}
      <section className="flex w-[90vw] pl-[10vw] pt-60 pb-10">
        <div className="w-full">
          <h2 className="text-3xl font-bold mt-10">Course Overview</h2>

          {overview && (
            <section id="overview" className="mt-5">
              <h2 className="font-semibold">{overview.title}</h2>
              <p className="mb-3">{overview.description}</p>
            </section>
          )}

          {/* Modules Section */}
          <div className="rounded-xl mt-10">
            <h3 className="text-xl font-bold mb-4">Course Content</h3>
            <div className="space-y-4">
              {curriculum.modules?.map(module => (
                <div key={module._id} className="border-l-4 border-green-500 pl-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`module-${module._id}`}>
                      <AccordionTrigger>
                        <h4 className="font-semibold">{module.title}</h4>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-2 space-y-2">
                          {module.lessons?.map(lesson => (
                            <div key={lesson._id} className="flex items-center space-x-2">
                              <span>
                                {lesson.title}: {lesson.content}
                              </span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Section (Added after Modules) */}
          <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 mt-10">
            <h3 className="text-xl font-semibold">Why Choose This Program?</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Hands-on projects with real-world
                applications.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Training in modern tools &
                emerging technologies.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Industry-relevant curriculum
                aligned with market trends.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Personalized mentorship and
                career guidance.
              </li>
            </ul>
          </div>

          {/* Projects Section */}
          {category?.type !== 'b2i' && (
            <div className="rounded-xl mt-10">
              <h3 className="text-xl font-bold mb-4">Projects Covered</h3>
              <div className="space-y-4">
                {curriculum.projects?.map(project => (
                  <div key={project._id} className="border-l-4 border-purple-500 pl-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`project-${project._id}`}>
                        <AccordionTrigger>
                          <h4 className="font-semibold capitalize">{project.title}</h4>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-2 space-y-2">
                            {project.content?.map((lesson, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <BsFolderCheck className="h-4 w-4 text-purple-500" />
                                <span>{lesson}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites & Eligibility */}
          <section className="mt-10">
            <h3 className="text-xl font-bold mb-4">Criteria</h3>
            <div className="flex flex-col gap-y-5">
              {curriculum.prerequisites && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Prerequisites</h4>
                  {curriculum.prerequisites.map((prerequisite, index) => (
                    <p key={index} className="flex gap-x-4 items-center">
                      <IoIosCheckmarkCircle className="w-6 h-6 text-blue-500" />
                      <span className="text-sm font-semibold">{prerequisite}</span>
                    </p>
                  ))}
                </div>
              )}
              {curriculum.eligibility && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Eligibility</h4>
                  {curriculum.eligibility.map((eligibility, index) => (
                    <p key={index} className="flex gap-x-4 items-center">
                      <IoIosCheckmarkCircle className="w-6 h-6 text-purple-500" />
                      <span className="text-sm font-semibold">{eligibility}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </section>

      {/* Right Sidebar */}
      <section className="bg-card w-[50vw] pt-60 pb-10 pl-10 flex flex-col">
        {/* Skills & Tools */}
        <div>
          <h3 className="text-xl font-semibold">Skills Covered</h3>
          <div className="flex flex-col gap-y-5 mt-5">
            {skills.map((skill, index) => (
              <div key={index} className="flex gap-x-3">
                <Image
                  width={100}
                  height={100}
                  src={skill.logo.viewUrl}
                  alt={skill.title}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Tools Covered</h3>
          <div className="flex flex-col gap-y-5 mt-5">
            {tools.map((tool, index) => (
              <div key={index} className="flex gap-x-3">
                <Image
                  width={100}
                  height={100}
                  src={tool.logo.viewUrl}
                  alt={tool.title}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <p>{tool.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default CourseOverview;
