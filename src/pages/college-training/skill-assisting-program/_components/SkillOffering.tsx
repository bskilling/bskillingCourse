/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
export default function SkillOffering() {
  return (
    <div className="">
      <h4 className="text-3xl font-bold text-center mt-5 md:mt-0">
        Bridging Skills Across Multiple Industries
      </h4>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5  lg:grid-cols-5  m-auto mt-10 px-1 md:px-5 ">
        {Object.entries(skillDevelopmentAreas).map(([key, value]) => (
          <Card key={key} className="w-full">
            <CardHeader className="p-0">
              <img
                src={value.imageBanner}
                alt={'Image-banner'}
                className="object-cover h-[200px]"
              />

              <CardTitle className="p-2">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-2 text-sm">
              {/* <p>Card Content</p> */}
              {/* <div className="grid grid-cols-2 gap-2">
              {value.subTitles.map((subTitle, index) => (
                <div  
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                >
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <p>{subTitle}</p>
                </div>
              ))}
            </div> */}
              <div className="space-y-2 text-xs">
                {value.subTitles.map((subTitle, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-[10%]">
                      <div className=" h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="w-5/6">
                      <p className="text-xs">{subTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const skillDevelopmentAreas = {
  informationTechnology: {
    title: 'Information Technology (IT)',
    icon: 'it-icon.svg', // Optional icon
    imageBanner: '/new-images/it-bg.webp', // Optional image banner
    subTitles: [
      'Software Development',
      'Cloud Computing',
      'Cybersecurity',
      'Artificial Intelligence (AI) & Machine Learning (ML)',
      'Data Science and Analytics',
    ],
  },
  businessManagement: {
    title: 'Business and Management',
    icon: 'business-icon.svg',
    imageBanner: '/new-images/bussiness.webp',
    subTitles: [
      'Product Management',
      'Project Management (PMP, Agile, Scrum)',
      'Digital Marketing',
      'Human Resource Management',
    ],
  },
  retailEcommerce: {
    title: 'Retail and E-commerce',
    icon: 'retail-icon.svg',
    imageBanner: '/new-images/ecom.webp',
    subTitles: [
      'Digital Transformation in Retail',
      'Customer Relationship Management (CRM)',
      'Data-Driven Marketing',
    ],
  },
  telecommunications: {
    title: 'Telecommunications',
    icon: 'telecom-icon.svg',
    imageBanner: '/new-images/telecom.webp',
    subTitles: [
      'Networking and Infrastructure',
      'IoT in Telecommunications',
      '5G Technologies',
    ],
  },
  healthcare: {
    title: 'Healthcare',
    icon: 'healthcare-icon.svg',
    imageBanner: '/new-images/doctor.webp',
    subTitles: [
      'Medical Coding and Billing',
      'Pharmacovigilance',
      'Clinical Data Management',
      'Healthcare IT',
    ],
  },
};
