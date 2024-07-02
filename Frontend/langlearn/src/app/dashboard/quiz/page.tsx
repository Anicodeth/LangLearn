"use client";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import { useRouter } from "next/navigation";

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
import { Hourglass } from "react-loader-spinner";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getQuiz } from "@/service/aiService";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { addScoreToUser } from "@/service/scoreService";

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

enum Page {
  Selection = "Selection",
  Quiz = "Quiz",
  Result = "Result",
}

export default function Quiz() {
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [page, setPage] = useState("");
  const [result, setResult] = useState(0);
  const [user, setUser] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const storedPage = sessionStorage.getItem("page");

    if (storedPage) {
      setPage(JSON.parse(storedPage));
    }
    else{
      setPage(Page.Selection)
    }

    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/auth/signin");
    }
  }, []);

  function handleStart() {
    setPage(Page.Quiz);
    sessionStorage.setItem("page", JSON.stringify(Page.Quiz));
    sessionStorage.removeItem("answers");
    sessionStorage.removeItem("questions");
  }

  if (page === Page.Selection) {
    return (
      <div className = "flex items-center justify-center h-full">
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
    </div>
    );
  } else if (page === Page.Quiz) {
    return (
      <div className = "flex items-center justify-center h-full">
      <Questions
        language={language}
        difficulty={difficulty}
        setPage={setPage}
        setResult={setResult}
      />
    </div>
    );
  } else if (page === Page.Result) {
    return (
      <div className = "flex items-center justify-center h-full">
      <Result
        result={result}
        setPage={setPage}
        userId={user._id}
        language={language}
        difficulty={difficulty}
      />
    </div>
    );
  }

  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#18bbec", "#5dcff2"]}
    />
  );
}

function Questions({ language, difficulty, setPage, setResult }: any) {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [questions, setQuestions] = useState([]);

  const { isLoading, error } = useQuery(
    "quiz",
    () => getQuiz(language, difficulty),
    {
      enabled: !sessionStorage.getItem("questions"),
      onSuccess: (data) => {
        setQuestions(data);
        sessionStorage.setItem("questions", JSON.stringify(data));
      },
      onError: (error) => {
        toast("Error fetching quiz questions");
        setPage(Page.Selection);
        sessionStorage.setItem("page", JSON.stringify(Page.Selection));
      },
    }
  );

  useEffect(() => {
    const storedAnswers = sessionStorage.getItem("answers");
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
    const questions = sessionStorage.getItem("questions");
    if (questions) {
      setQuestions(JSON.parse(questions));
    }
  }, []);

  if (isLoading || !questions.length) {
    return (
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#18bbec", "#5dcff2"]}
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
    sessionStorage.setItem("answers", JSON.stringify(newAnswers));
  };

  const handleResult = () => {
    let score = 0;
    questions.forEach((q: any, index: number) => {
      if (q.answer === answers[index]) {
        score++;
      }
    });

    setPage(Page.Result);
    setResult(score);

    sessionStorage.setItem("page", JSON.stringify(Page.Result));
    sessionStorage.setItem("result", JSON.stringify(score));
  };

  return (
    <div className="w-full p-0 h-full flex flex-col items-center justify-center">
      <Carousel className="w-1/2">
        <CarouselContent>
          {questions.map((q: any, index: number) => (
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
        {questions.map((_: any, index: number) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mx-2 ${answers[index] ? "bg-green-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <Button className="bg-[#0c5e76] w-20 mt-4 mb-4" onClick={handleResult}>
        Submit
      </Button>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-[#0c5e76] w-20">Quit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              progress so far on this quiz.
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button type="button">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => {
                setPage(Page.Selection);
                sessionStorage.removeItem("answers");
                sessionStorage.setItem("page", JSON.stringify(Page.Selection));
                sessionStorage.removeItem("questions");
              }}
              type="button"
              variant="destructive"
            >
              Yes
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Result({ result, language, difficulty, setPage, userId }: any) {
  const scoreMutation = useMutation(
    () =>
      addScoreToUser(
        {
          userId,
          quizLanguage: language,
          quizDifficulty: difficulty,
          score: result,
        },
        userId
      ),
    {
      onSuccess: () => {
        toast("Score added successfully");
      },
    }
  );

  const handleRetake = () => {
    sessionStorage.removeItem("answers");
    sessionStorage.setItem("page", JSON.stringify(Page.Selection));
    sessionStorage.removeItem("questions");
    setPage(Page.Selection);
  };

  useEffect(() => {
    sessionStorage.removeItem("answers");
    sessionStorage.removeItem("questions");
    scoreMutation.mutate();

    const storedResult = sessionStorage.getItem("result");
    if (storedResult) {
      setPage(Page.Result);
    }
  }, []);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Quiz Result</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">Your Score: {result}</p>
        {result >= 8 && (
          <p className="text-green-600">Excellent! You did great!</p>
        )}
        {result >= 5 && result < 8 && (
          <p className="text-yellow-600">Good job! Keep practicing!</p>
        )}
        {result < 5 && (
          <p className="text-red-600">
            Don&apos;t worry, practice makes perfect!
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleRetake}>Retake Quiz</Button>
      </CardFooter>
    </Card>
  );
}
