import React from 'react';
import {
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Star,
  Brain,
  Palette,
  Video,
  Mic,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import NavbarSection from '@/component/navbar/NavbarSection';

export default function SkillgenAILanding() {
  const aiToolsData = {
    animaker: { name: 'Animaker', logo: '/tools/animaker.png' },
    bing: { name: 'Bing', logo: '/tools/bing.jpg' },
    'character-ai': { name: 'Character AI', logo: '/tools/character-ai.png' },
    chatgpt: { name: 'ChatGPT', logo: '/tools/chatgpt.png' },
    crayon: { name: 'Crayon', logo: '/tools/crayon.png' },
    'dall-e': { name: 'DALL-E', logo: '/tools/dall-e.webp' },
    diffit: { name: 'Diffit', logo: '/tools/diffit.png' },
    elevenlabs: { name: 'ElevenLabs', logo: '/tools/elevenlabs.png' },
    gemini: { name: 'Gemini', logo: '/tools/gemini.png' },
    grammarly: { name: 'Grammarly', logo: '/tools/grammarly.webp' },
    'magic-school': { name: 'Magic School', logo: '/tools/magic-school.png' },
    mindgrasp: { name: 'Mindgrasp', logo: '/tools/mindgrasp.webp' },
    'notion-ai': { name: 'Notion AI', logo: '/tools/notion-ai.webp' },
    pictory: { name: 'Pictory', logo: '/tools/pictory.png' },
    voicify: { name: 'Voicify', logo: '/tools/voicify.png' },
  };

  // Convert to array for mapping
  const aiToolsArray = Object.entries(aiToolsData).map(([slug, data]) => ({
    slug,
    ...data,
  }));
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="sticky top-0 z-[50] bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50">
        <nav className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[100px] h-[40px] lg:w-[150px] lg:h-[50px]">
              <img src="/logo.png" alt="Logo" className="object-contain" />
            </div>
          </Link>
          <NavbarSection />
        </nav>
      </div>
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">SkillgenAI</span> for Students
                </h1>
                <p className="text-2xl text-gray-600 mt-4">Make Your Child Future-Ready with AI</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                A dynamic, hands-on program designed to introduce school students to the exciting
                world of Generative AI. Through practical activities, real tools, and guided
                projects, students learn how to create text, images, quizzes, and videos using AI —
                safely and ethically.
              </p>

              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="">
              <img
                src="students/student-gen-ai.jpeg"
                alt="Hero Image"
                className="w-full h-auto object-cover rounded-lg  border-4"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Students</div>
                  <div className="text-sm text-gray-600">All Ages</div>
                </div>
                <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Certified</div>
                  <div className="text-sm text-gray-600">Program</div>
                </div>
                <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">4 Hours</div>
                  <div className="text-sm text-gray-600">Daily</div>
                </div>
                <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">4 Days</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is SkillgenAI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive program that introduces students to Generative AI through practical,
              hands-on learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn using real tools</h3>
              <p className="text-gray-600">
                Get hands-on experience with ChatGPT, DALL·E, Pictory and other industry-leading AI
                tools
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No coding needed</h3>
              <p className="text-gray-600">
                Beginner-friendly approach perfect for students with no technical background
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-world projects</h3>
              <p className="text-gray-600">
                Create posters, videos, poems, quizzes and other tangible outputs
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Boosts digital literacy</h3>
              <p className="text-gray-600">
                Develop creativity, communication and essential 21st-century skills
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & ethical learning</h3>
              <p className="text-gray-600">
                Focus on responsible AI use, privacy, and ethical considerations
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certificate on completion
              </h3>
              <p className="text-gray-600">
                Official recognition of achievement and skill development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Students Will Master</h2>
            <p className="text-xl text-gray-600">
              Industry-standard tools used by professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {aiToolsArray.map(tool => (
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-24 h-24  mx-auto mb-2 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">4-Day Learning Journey</h2>
            <p className="text-xl text-gray-600">
              Structured curriculum designed for progressive skill development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                Day 1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction to AI & Generative AI
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Fundamentals</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• What is AI? Real-life examples</li>
                    <li>• Understanding Generative AI</li>
                    <li>• Differences from traditional AI</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Evolution and Use Cases</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Evolution of Generative AI</li>
                    <li>• Applications: Text, Image, Video, Audio generation</li>
                    <li>• Impact on education, jobs, creativity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fun Demo Session</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Live demo of ChatGPT (text generation)</li>
                    <li>• Live demo of image generation using AI</li>
                    <li>• Interactive Q&A</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Activity + Quiz</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Small writing or drawing activity using Gen AI</li>
                    <li>• Quiz and Kahoot! style fun test</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                Day 2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Text & Image Generation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Text Generation Basics</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Prompts and responses</li>
                    <li>• Creative writing using AI</li>
                    <li>• Ethics and safety in using AI tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Hands-on with ChatGPT / Gemini
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Writing stories, poems, essays</li>
                    <li>• Creating quiz questions</li>
                    <li>• Translating and summarizing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Image Generation Tools</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Tools: DALL·E, Bing Image Creator, Craiyon</li>
                    <li>• Concepts: Prompts, styles, resolution</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mini Project</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Students generate text & images for a poster or comic</li>
                    <li>• Share their outputs in class</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                Day 3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Audio & Video Generation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Audio & Music Generation</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Introduction to AI music and voice tools (e.g., Soundful, Voicify)</li>
                    <li>• Demo: AI-generated voice, songs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Video Generation & Avatars</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Tools: Synthesia, Pictory</li>
                    <li>• Demo of creating short AI video using text script</li>
                    <li>• Safe use of these tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Future Skills & Careers with AI
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Skills needed: Creativity, digital literacy, prompt engineering</li>
                    <li>• Jobs of the future</li>
                    <li>• Responsible AI use and ethics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Group Activity</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Team poster or video planning with AI tools</li>
                    <li>• Presentation preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                Day 4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Projects & Certification</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Final Project Time</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Students complete their mini projects (poster, video, story)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Student Presentations</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 3–5 mins presentations of projects</li>
                    <li>• Peer feedback</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Guest Session</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Expert session from industry/CSR/mentor</li>
                    <li>• Career talk on future with AI</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quiz, Certificates, and Feedback
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Fun Kahoot-style recap quiz</li>
                    <li>• Course feedback</li>
                    <li>• Distribution of digital certificates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See What Young Minds Can Build with AI Tools
            </h2>
          </div>
          <img
            src="/students/young-minds.png"
            alt="See What Young Minds Can Build with AI Tools"
            className="mx-auto w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills Your Child Will Gain in the AI Course
            </h2>
            <p className="text-xl text-gray-600">
              Practical AI skills that help your students excel in school and beyond This course is
              thoughtfully designed to introduce school students to the world of Generative AI in a
              fun, safe, and educational way
            </p>
          </div>

          <img
            src="/students/gain.png"
            alt="Skills Your Child Will Gain in the AI Course"
            className="mx-auto w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Progamme Highlights</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              What Makes Our AI Workshop Special
            </h3>

            <p className="text-xl text-gray-600">
              Our Generative AI Workshop for School Students is a fun, inspiring, and future-ready
              tech experience.
            </p>
          </div>

          <img
            src="/students/highlights.png"
            alt="Programme Highlights"
            className="mx-auto w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Final Outcome Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Your Child Takes Home</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Certificate of Participation</h3>
              <p className="text-blue-200">Official recognition of program completion</p>
            </div>
            <div className="text-center">
              <Star className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Project Portfolio</h3>
              <p className="text-blue-200">
                AI powered project (Art or Poster, Story Writing, Voice-to-Video, Science Simulation
                etc)
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Confidence in AI Tools</h3>
              <p className="text-blue-200">
                Exposure to tools user in real-world digition creation
              </p>
            </div>
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Future-Ready Skills</h3>
              <p className="text-blue-200">Foundation for continued learning and growth</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
