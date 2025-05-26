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
                  <h4 className="font-semibold text-gray-900 mb-2">Live Demo Session</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• ChatGPT demonstration</li>
                    <li>• Image generation showcase</li>
                    <li>• Interactive Q&A session</li>
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
                    <li>• Creative writing with AI</li>
                    <li>• Ethics and safety guidelines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Image Creation Tools</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• DALL·E and Bing Image Creator</li>
                    <li>• Understanding prompts and styles</li>
                    <li>• First mini project</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Audio & Music Creation</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• AI music and voice tools introduction</li>
                    <li>• Generated voice and song demos</li>
                    <li>• Safe usage practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Video Generation & Avatars</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Synthesia and Pictory tools</li>
                    <li>• Creating AI videos from text</li>
                    <li>• Future skills and career discussion</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Final Project Creation</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Complete individual projects</li>
                    <li>• Student presentations (3-5 minutes)</li>
                    <li>• Peer feedback sessions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Course Completion</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Interactive recap quiz</li>
                    <li>• Course feedback collection</li>
                    <li>• Digital certificate distribution</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Students Will Create</h2>
            <p className="text-xl text-gray-600">
              Real projects that showcase learning and build confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI-Generated Stories & Poems
              </h3>
              <p className="text-gray-600">
                Creative writing using ChatGPT to produce stories, poems, and jokes
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Palette className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Generated Images</h3>
              <p className="text-gray-600">
                Artwork and posters in various styles like cartoon, fantasy, and sci-fi
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Content</h3>
              <p className="text-gray-600">
                Quizzes, lesson summaries, and flashcards for enhanced learning
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Posters & Comics</h3>
              <p className="text-gray-600">
                Combined AI text and images for creative projects like "Save Earth" campaigns
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Video className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Short AI Videos</h3>
              <p className="text-gray-600">
                Video creation using AI-generated scripts and visual content
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Group Projects</h3>
              <p className="text-gray-600">
                Collaborative creative projects to build confidence and teamwork skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills Your Child Will Develop
            </h2>
            <p className="text-xl text-gray-600">
              Future-ready competencies for academic and career success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Fundamentals</h3>
              <p className="text-gray-600">
                Understanding how AI works and its applications in daily life
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prompt Engineering</h3>
              <p className="text-gray-600">
                Writing effective prompts and asking the right questions to AI
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Creation</h3>
              <p className="text-gray-600">Creating text, images, and videos using AI tools</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Communication</h3>
              <p className="text-gray-600">
                Presenting ideas and collaborating effectively using technology
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethical AI Use</h3>
              <p className="text-gray-600">
                Responsible AI usage, privacy awareness, and ethical considerations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Career Readiness</h3>
              <p className="text-gray-600">
                Understanding AI's role in future careers and creative fields
              </p>
            </div>
          </div>
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
              <p className="text-blue-200">Collection of creative works and digital projects</p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Confidence in AI Tools</h3>
              <p className="text-blue-200">Practical skills for ethical and creative AI use</p>
            </div>
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Future-Ready Skills</h3>
              <p className="text-blue-200">Foundation for continued learning and growth</p>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-gray-600 mb-6">
              Give your child the AI literacy skills they need to succeed in tomorrow's digital
              world. Join thousands of students who have already discovered the power of AI.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
              <span>Enroll Your Child Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
