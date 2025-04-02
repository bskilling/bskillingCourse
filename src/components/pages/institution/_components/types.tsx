"use client";

interface CategoryProps {
  category: Category;
}
interface Category {
  _id: string;
  name: string;
  type: string;
  slug: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface ICourse {
  overview: Overview;
  outcomes: string[];
  curriculum: Curriculum;
  _id: string;
  title: string;
  variant: number;
  description: string;
  isPaid: boolean;
  appliedCount: number;
  trainedCount: number;
  highlights: string[];
  images: any[];
  isPublished: boolean;
  __v: number;
  banner: Banner;
  previewImage?: any;
  skills: Skill[];
  whyJoin: string[];
  durationHours: number;
  videoUrl: string;
  startTime: string;
  endTime: string;
  faqs: Faq[];
  price: {
    amount: number;
    currency: "INR" | "USD";
  };
  certification?: {
    title: string;
  };
  partnerShip: {
    title: string;
  };
  logoUrl: Banner;
  category: CategoryProps["category"];
  tools: Skill[];
}
interface Faq {
  question: string;
  answer: string;
  _id: string;
}
interface Skill {
  _id: string;
  title: string;
  logo: Banner;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface Banner {
  _id: string;
  viewUrl: string;
}
interface Curriculum {
  eligibility: string[];
  prerequisites: string[];
  projects: any[];
  chapters: Chapter[];
  whyJoin: string;
}
interface Chapter {
  title: string;
  lessons: Lesson[];
  _id: string;
}
interface Lesson {
  title: string;
  content: string;
  _id: string;
}
interface Overview {
  title: string;
  description: string;
  keyFeatures: string[];
  skillsCovered: any[];
}
