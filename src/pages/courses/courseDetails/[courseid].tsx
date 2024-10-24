import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TabData from "components/TabData";
import { Coursedetailstype, TrainingMetadataTypes } from "common/util/types";
import NewsLetter from "components/NewsLetter";
import PaymentForm from "modules/leadChat/components/PaymentForm";
import CourseIncludes from "components/CourseIncludes";
import PopupForm from "components/PopupForm";
import { formatDate } from "util/dateformat";
import OtherCourse from "components/OtherCourse";

const CourseDetails = () => {
  const router = useRouter();
  const { courseid } = router.query;
  const [courseDetails, setCourseDetails] = useState<Coursedetailstype | null>(
    null
  );
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const fetchCourseDetails = async (id: string) => {
    if (!id) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCourseDetails(data.course);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    if (courseid) {
      fetchCourseDetails(courseid as string);
    }
  }, [courseid]);

  const youtubeLink = courseDetails?.training_metadata?.preview_video || "";
  const videoId = youtubeLink?.split("/").pop();
  const batchTime = courseDetails?.training_batches?.enrollment_end_date || "";
  return (
    <div className="flex flex-col min-h-screen bg-gray">
      {/* landing section start */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] flex items-center justify-center bg-gradient-background">
        <img
          src="/images/about1.jfif"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Course Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8CD2E8] to-[#1E3F66] opacity-80"></div>
        <div className="w-full flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {/* Left Side Content */}
          <div className="w-full md:w-2/3 z-10 p-4 text-white text-center md:text-left md:px-16">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-4">
              {courseDetails?.title}
            </h1>
            <div className="hidden md:flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Best Seller
              </button>
              <p className="text-sm md:text-base mt-[10px]">
                {courseDetails?.ratings || "4.5 (11,234 Ratings)"}
              </p>
            </div>
            <div className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2">
              <p>
                {courseDetails?.enrolledStudents || "57,869 students enrolled"}
              </p>
              <p>{courseDetails?.reviews || "25 Reviews"}</p>
              <p>
                Enrollment End Date:{" "}
                <span className="font-bold">
                  {formatDate(batchTime) || "05/2024"}
                </span>
              </p>
            </div>
            <div className="relative">
              <div>
                <p
                  className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-32 cursor-pointer"
                  onClick={handleOpenPopup}
                >
                  Enquire Now
                </p>
              </div>

              {isPopupOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-black opacity-50 z-1000"
                    onClick={handleClosePopup}
                  ></div>
                  <div className="fixed inset-0 flex items-center justify-center z-10000">
                    <PopupForm
                      handleClosePopup={handleClosePopup}
                      title="Get a Callback for Our Trending Tech Courses"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Right Side Content */}
          <div className="w-full md:w-1/3 z-10 p-4 absolute md:relative top-24 md:top-0">
            <PaymentForm courseDetails={courseDetails} />
          </div>
        </div>
      </div>
      {/* landing section end */}

      {/* video section */}
      <div className="flex-grow px-4 md:px-16 mt-56 md:mt-12 mb-2 flex flex-col md:flex-row gap-12">
        <div className="flex-grow w-full md:w-3/4">
          {courseDetails?.training_metadata?.preview_video && (
            <div
              className="relative w-full md:h-auto h-72 md:h-auto"
              style={{ paddingTop: "30.25%" }}
            >
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  maxWidth: "850px",
                  maxHeight: "500px",
                  minHeight: "300px",
                }} // Adjusted size
              ></iframe>
            </div>
          )}

          <TabData courseDetails={courseDetails} />
        </div>
        <div className="w-full md:w-1/4 md:ml-4">
          <CourseIncludes courseDetails={courseDetails} />
        </div>
      </div>

      <div>
        <OtherCourse courseDetails={courseDetails} />
      </div>
      <div>
        <NewsLetter className="bg-deepBlue text-white" />
      </div>
    </div>
  );
};

export default CourseDetails;
