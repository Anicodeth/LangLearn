"use client";
import { getCourseSlides} from "@/service/courseService";
import { useQuery } from "react-query";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function Slides({ params }: { params: { courseid: string } }) {
  const { data, isError, isLoading } = useQuery("courseSlides", () =>
    getCourseSlides(params.courseid)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen">
        Error fetching slides
      </div>
    );

  const filteredData = data?.filter((slide: any) => slide !== null) || [];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredData.length) % filteredData.length
    );
  };

  console.log(filteredData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-2xl">
        {filteredData.length > 0 ? (
          <>
            <div className="slide text-center">
              <h2 className="text-2xl font-bold mb-4">
                {filteredData[currentIndex]?.slideTitle}
              </h2>
              <p>{filteredData[currentIndex]?.slideQuestion}</p>
            </div>
            <div className="navigation mt-6 flex justify-between">
              <Button
                onClick={handlePrev}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Next
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">No slides available</div>
        )}
      </div>
    </div>
  );
}