"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const languages = ["English", "Spanish", "French", "German"];

export default function Chat() {
  const [language, setLanguage] = useState("");
  const router = useRouter();

  const handleStart = () => {
    if (language === "") {
      alert("Please select a language to start the chat");
      return;
    }
    router.push(`/dashboard/chat/${language}`);
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Chat Time!</CardTitle>
        <CardDescription>Choose a language to chat with the AI</CardDescription>
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
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleStart}>Start</Button>
      </CardFooter>
    </Card>
  );
}
