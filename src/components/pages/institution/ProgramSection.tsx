import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Cpu,
  Terminal,
  Paintbrush,
  BookOpen,
  CheckCircle,
  BarChart3,
  Users,
  GraduationCap,
  Shield,
  Brain,
  Database,
  Rocket,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import SkillOffering from '@/pages/college-training/skill-assisting-program/_components/SkillOffering';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CourseCard = ({ title, description, icon }: any) => (
  <motion.div
    variants={fadeIn}
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col gap-4 border border-slate-100"
  >
    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-600">{description}</p>
    <div className="mt-auto pt-4">
      <Button
        variant="outline"
        className="text-indigo-600 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
      >
        Learn More
      </Button>
    </div>
  </motion.div>
);

export default function ProgramOverview() {
  const programFocusAreas = [
    {
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      title: 'Bridging the Gap',
      description: 'Between theoretical knowledge and industry requirements.',
    },
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: 'Empowering Students',
      description: 'To apply knowledge in real-world scenarios.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      title: 'Industry Trends',
      description: 'Keeping students updated with latest technologies.',
    },
    {
      icon: <Terminal className="w-6 h-6 text-indigo-600" />,
      title: 'Problem Solving Skills',
      description: 'Built through hands-on experience.',
    },
  ];

  const keyHighlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      title: 'Hands-on Projects',
      description:
        'Real-world projects to help students apply their classroom knowledge in practical scenarios.',
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Comprehensive Skill Training',
      description:
        'Covering both technical and soft skills to create well-rounded professionals.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: 'Modern Tools & Technologies',
      description:
        'Exposure to IT systems, data analytics, and emerging technologies.',
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      title: 'Industry-Relevant Curriculum',
      description:
        'A carefully curated curriculum aligned with current market demands and trends.',
    },
  ];

  const processSteps = [
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: 'Enroll in Course',
      description:
        'Select a program that matches your career goals and register online',
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: 'Complete Training',
      description:
        'Attend workshops, complete projects, and receive personalized mentorship',
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: 'Get Certified',
      description:
        'Earn your industry-recognized certification and showcase your skills',
    },
  ];

  const coursesOffered = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description:
        'Master modern web technologies including HTML, CSS, JavaScript, React, and backend frameworks to build responsive and interactive web applications.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Science',
      description:
        'Learn Python, statistical analysis, machine learning algorithms, and data visualization techniques to extract meaningful insights from complex datasets.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity',
      description:
        'Understand security protocols, vulnerability assessment, ethical hacking, and encryption methods to protect digital assets from threats.',
    },
  ];

  const techTerms = [
    { short: 'AI', full: 'Artificial Intelligence' },
    { short: 'ML', full: 'Machine Learning' },
    { short: 'API', full: 'Application Programming Interface' },
    { short: 'UI', full: 'User Interface' },
    { short: 'UX', full: 'User Experience' },
    { short: 'DBMS', full: 'Database Management System' },
  ];

  return (
    <div className="container mx-auto px-6 py-20 space-y-32">
      {/* Program Focus Areas Section */}
      <section>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <motion.div
            className="lg:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl shadow-sm border border-indigo-100/80 p-10 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-violet-200/30 rounded-full blur-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600">
                    <Code className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      Program Highlights
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
                  Program Focus Areas
                </h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {programFocusAreas.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-indigo-100 flex items-center justify-center rounded-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Key Highlights Section */}
            <motion.section
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
                Key Highlights of the Program
              </h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {keyHighlights.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            className="lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Inquiry Form */}
            <Card className="shadow-md border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  Quick Inquiry
                </CardTitle>
                <CardDescription>
                  Want more details? Fill in your information and we&apos;ll get
                  in touch!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="border-slate-200 focus:border-indigo-300"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-slate-200 focus:border-indigo-300"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="border-slate-200 focus:border-indigo-300"
                />
                <Textarea
                  placeholder="Your Question"
                  className="border-slate-200 focus:border-indigo-300"
                  rows={3}
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Submit Inquiry
                </Button>
              </CardFooter>
            </Card>

            {/* Benefits Box */}
            <Card className="shadow-md bg-gradient-to-br from-indigo-900 to-violet-900 text-white">
              <CardHeader>
                <CardTitle className="text-xl">
                  Why Choose This Program?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Hands-on projects with real-world applications',
                    'Training in modern tools & emerging technologies',
                    'Industry-relevant curriculum aligned with market trends',
                    'Personalized mentorship and career guidance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Call-to-Action Box */}
            <Card className="shadow-md border-slate-200 bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-100">
              <CardContent className="pt-6 text-center">
                <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-full flex items-center justify-center text-white mb-4">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Ready to Upskill?
                </h3>
                <p className="text-slate-600 mb-6">
                  Take the first step towards a brighter future with our
                  cutting-edge program.
                </p>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skill Offering Section */}
      <section>
        <SkillOffering />
      </section>

      {/* How It Works Section */}
      <section>
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            How Our Program Works
          </h2>
          <p className="text-lg text-slate-600">
            A streamlined process designed to transform your skills and boost
            your career prospects
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-indigo-900 to-violet-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="relative py-16 px-8">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-white/5"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center text-white"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                        {step.icon}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-white/20"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-indigo-200">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Terms Section */}
      <section className="bg-slate-50 rounded-2xl shadow-sm p-12 border border-slate-200/50">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Technical Terminology
          </h2>
          <p className="text-slate-600 mt-3">
            Common technical terms you&apos;ll encounter during the program
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techTerms.map((term, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex items-center space-x-3 group"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                <span className="font-mono font-bold">{term.short}</span>
              </div>
              <div className="text-slate-700">{term.full}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Courses Offered Section */}
      <section>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Courses Offered
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to equip you with in-demand
            skills for the modern job market
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coursesOffered.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative px-8 py-16">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-400 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-violet-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              Join thousands of students who have already boosted their skills
              and advanced their careers through our program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-indigo-900 hover:bg-slate-100"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
