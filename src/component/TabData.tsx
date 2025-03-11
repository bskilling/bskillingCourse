import React, { useRef, useState } from "react";
import Overview from "./tabitem/Overview";
import Curriculum from "./tabitem/Curriculum";
import Certification from "./tabitem/Certification";
import FAQs from "./tabitem/FAQs";
import { Coursedetailstype } from "common/util/types";

interface TabDataProps {
  courseDetails: Coursedetailstype | null;
}

const TabData: React.FC<TabDataProps> = ({ courseDetails }) => {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 1, label: "Overview", ref: overviewRef },
    { id: 2, label: "Curriculum", ref: curriculumRef },
    { id: 3, label: "Skills & Tools", ref: null }, // Placeholder
    // { id: 4, label: 'Case Studies', ref: null },
    { id: 5, label: "Certification", ref: certificationRef },
    { id: 6, label: "FAQs", ref: faqsRef },
  ];

  const handleTabClick = (id: number, ref: React.RefObject<HTMLDivElement>) => {
    setActiveTab(id);
    // if (ref.current) {
    //   ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    // }
  };

  const handleChange = (e: any) => {
    console.log(e?.target?.value);
    const tab = tabs?.find((i) => i?.id == e?.target?.value);
    console.log(tab);
    if (tab?.ref) {
      handleTabClick(tab.id, tab.ref);
    }
  };

  return (
    <div className="py-4 md:py-6 lg:py-8">
      <div className="hidden md:flex space-x-2 mb-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 rounded-lg cursor-pointer transition-transform duration-300 ${
              activeTab === null || activeTab === tab.id
                ? "bg-white text-gray-600 text-sm"
                : "bg-gray-200 text-sm text-gray-900 transform scale-105 shadow-lg"
            }`}
            onClick={() => tab.ref && handleTabClick(tab.id, tab.ref)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <select
        id="tabs"
        name="tabs"
        className="w-full md:hidden h-12 p-2 rounded-md border mb-4"
        onChange={(e) => handleChange(e)}
      >
        {tabs.map((tab) => (
          <option
            key={tab.id}
            selected={activeTab ? activeTab === tab.id : false}
            value={tab.id}
          >
            {" "}
            {tab.label}
          </option>
        ))}
      </select>
      <div className="transition-opacity duration-300">
        {activeTab === 1 && (
          <div ref={overviewRef} className="mb-12">
            <Overview courseDetails={courseDetails} />
          </div>
        )}
        {activeTab === 2 && (
          <div ref={curriculumRef} className="mb-12">
            <Curriculum courseDetails={courseDetails} />
          </div>
        )}
        {activeTab === 5 && (
          <div ref={certificationRef} className="mb-12">
            <Certification courseDetails={courseDetails} />
          </div>
        )}
        {activeTab === 6 && (
          <div ref={faqsRef} className="mb-12">
            <FAQs courseDetails={courseDetails} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabData;
