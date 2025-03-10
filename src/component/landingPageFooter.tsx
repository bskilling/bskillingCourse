import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function LandingPageFooter() {
  const [TabIndex, setTabIndex] = useState(-1);

  const pagePath = [
    {
      namaOfSection: "Overview",
      linkOfTheSection: "#Overview",
      id: 0,
    },

    {
      namaOfSection: "Prerequisites",
      linkOfTheSection: "#Prerequisites",
      id: 1,
    },

    {
      namaOfSection: "Audience",
      linkOfTheSection: "#Audience",
      id: 2,
    },
    {
      namaOfSection: "Key Features",
      linkOfTheSection: "#KeyFeatures",
      id: 3,
    },
    {
      namaOfSection: "Benefits",
      linkOfTheSection: "#Benefits",
      id: 4,
    },

    {
      namaOfSection: "Curriculum",
      linkOfTheSection: "#Curriculum",
      id: 5,
    },
    {
      namaOfSection: "OutComes",
      linkOfTheSection: "#OutComes",
      id: 6,
    },

    {
      namaOfSection: "Certification",
      linkOfTheSection: "#Certification",
      id: 7,
    },
    {
      namaOfSection: "FAQs",
      linkOfTheSection: "#FAQs",
      id: 8,
    },
  ];
  return (
    <section className="fixed md:flex hidden justify-center top-0 z-[5000] w-screen h-12 bg-lightBlue">
      <div className=" basis-[90%] flex justify- items-center h-full">
        <div className="flex gap-8">
          {pagePath.map((data, index) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={data.id}
                href={data.linkOfTheSection}
              >
                <motion.div
                  onClick={() => setTabIndex(index)}
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  key={data.id}
                  className={`${
                    TabIndex === index
                      ? "border-b-2 font-semibold border-white "
                      : ""
                  }`}
                >
                  <p className="text-white  hover:cursor-pointer">
                    {data.namaOfSection}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
