"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Bars } from "react-loader-spinner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getQuiz } from "@/service/aiService";

const languages = [
  "Amharic",
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Chinese",
  "Russian",
  "Italian",
  "Portuguese",
  "Arabic",
  "Hindi",
  "Turkish",
];

const dificulty = ["Easy", "Medium", "Hard"];

export default function Quiz() {
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [started, setStarted] = useState(false);

  function handleStart() {
    setStarted(true);
  }
  if (!started) {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Quiz Time!</CardTitle>
          <CardDescription>
            Choose a language and difficulty to learn and test your knowledge.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {languages.map((lang: string, index: number) => (
                      <SelectItem key={index} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>{" "}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {dificulty.map((diff: string, index: number) => (
                      <SelectItem key={index} value={diff}>
                        {diff}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleStart}>Start</Button>
        </CardFooter>
      </Card>
    );
  }

  return <Questions language={language} difficulty={difficulty} />;
}

function Questions({ language, difficulty }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));

  const { data, isLoading, error } = useQuery(
    "quiz",
    () => getQuiz(language, difficulty),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  if (isLoading) {
    return (
      <Bars
        height="80"
        width="80"
        color="#000000"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  const handleAnswer = (index: any, answer: any) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  return (
    <div className="w-full p-0 h-full flex flex-col items-center justify-center">
      <Carousel className="w-1/2">
        <CarouselContent>
          {data.map((q: any, index: number) => (
            <CarouselItem key={index}>
              <div>
                <h1 className="flex justify-center items-center font-bold">
                  {q.question}
                </h1>
                <div className="flex flex-col justify-center items-center ">
                  {q.choices.map((choice: string, choiceIndex: number) => (
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
      <div className="flex w-full justify-center mt-4">
        {data.map((_:any, index:number) => (
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
