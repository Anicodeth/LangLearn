"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "How do you say 'hello' in Spanish?",
    choices: ["Adios", "Grasias", "Hola", "Amigos"],
    correct: "Hola",
  },
  {
    question: "How do you say 'hello' in Spanish?",
    choices: ["Adios", "Grasias", "Hola", "Amigos"],
    correct: "Hola",
  },
  {
    question: "How do you say 'hello' in Spanish?",
    choices: ["Adios", "Grasias", "Hola", "Amigos"],
    correct: "Hola",
  },
  // Add more questions here
];

export default function Quiz() {}

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index: any, answer: any) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  return (
    <div className="w-full p-0 h-full flex flex-col items-center justify-center">
      <Carousel className="w-1/2">
        <CarouselContent>
          {questions.map((q, index) => (
            <CarouselItem key={index}>
              <div>
                <h1 className="flex justify-center items-center font-bold">
                  {q.question}
                </h1>
                <div className="flex flex-col justify-center items-center ">
                  {q.choices.map((choice, choiceIndex) => (
                    <Button
                      key={choiceIndex}
                      className={`mb-1 h-10 p-4 mt-1 w-full ${answers[index] === choice ? "bg-blue-500" : ""}`}
                      onClick={() => handleAnswer(index, choice)}
                    >
                      {choice}
                    </Button>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mx-2 ${answers[index] ? "bg-green-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <Button className="bg-[#0c5e76] mt-4">Submit</Button>
    </div>
  );
}
