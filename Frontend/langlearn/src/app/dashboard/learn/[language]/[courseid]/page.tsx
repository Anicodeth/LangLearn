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

  console.log(filteredData)

  return (
    <div className="p-4 flex w-full h-full flex-row gap-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 h-full w-1/2 bg-white shadow-md rounded-lg max-w-2xl flex flex-col">
        {filteredData.length > 0 ? (
          <>
            <div className="slide text-center flex-grow">
              <Slide slide={filteredData[currentIndex]} />
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
      <div className="bg-slate-400 h-full w-1/2 rounded-lg">
        {filteredData[currentIndex]?.slideChoices &&
          filteredData[currentIndex].slideChoices
            .split(",")
            .map((choice: string, index: number) => (
              <div key={index} className="p-4 border-b border-gray-300">
                <h3>{choice}</h3>
              </div>
            ))}
      </div>
    </div>
  );
}



function Slide({ slide }: { slide: any}) {
  return (
    <div className= "h-full">
      <div
        className="border w-full h-full p-4 rounded-md my-2"
        style={{
          fontFamily: `${slide.font}`,
          backgroundColor: `${slide.color}`,
        }}
      >
        <h1 className="w-full text-center">{slide.slideTitle}</h1>
        {slide.slideImage && (
          <img
            src={slide.slideImage}
            alt={slide.slideTitle}
            className="w-full"
          />
        )}
        <p>{slide.slideText}</p>
        {slide.slideAudio && <audio src={slide.slideAudio} controls></audio>}
        <p>{slide.slideNewWord}</p>
        {slide.slideAudio && <video src={slide.slideVideo} controls></video>}
        {slide.slideQuestion && (
          <p className="bg-black text-white font-bold text-l p-5 rounded">
            {slide.slideQuestion}
          </p>
        )}
      </div>
    </div>
  );
}
