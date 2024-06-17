"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getLanguages,
  addCourseToLanguage,
  getLanguageCourses,
} from "@/service/languageService";
import {
  getCourses,
  addCourse,
  addSlideToCourse,
} from "@/service/courseService";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function AddCourse() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const { data: languages, isLoading: languagesLoading } = useQuery(
    "languages",
    getLanguages
  );

  const {
    data: courses,
    isLoading: coursesLoading,
    refetch: refetchCourses,
  } = useQuery(
    ["courses"],
    () => getLanguageCourses(selectedLanguage),
    {
      enabled: !selectedLanguage, // Only run query if a language is selected
    }
  );

  if (languagesLoading) return <div>Loading...</div>;

  const handleSelectChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGetCourses = () => {
    if (selectedLanguage) {
      refetchCourses();
    }
  };

  console.log(courses);
  return (
    <div>
      <div className="overflow-scroll w-full h-screen flex flex-row mb-2 items-center justify-between flex-wrap p-6 m-4">
        <h1 className="text-2xl font-bold">Select Language</h1>

        <select
          value={selectedLanguage}
          onChange={handleSelectChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {languages.map((language: any) => (
            <option className="w-80" key={language._id} value={language._id}>
              {language.name}
            </option>
          ))}
        </select>

        <Button className="w-full mb-1" onClick={handleGetCourses}>
          Get Courses
        </Button>
        <AddCourseDialog languageId={selectedLanguage} />

        <div>
          <h3 className="text-2xl font-bold">Courses</h3>
          {coursesLoading ? (
            <div>Loading...</div>
          ) : ("")}
          
          {courses ? (
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course: any) => (
                <Card key={course.id} className="h-60 w-60">
                  <CardContent className="flex flex-col items-center justify-center h-full rounded">
                    <img
                      src="https://img.icons8.com/?size=100&id=6MP1kA74ozKg&format=png&color=000000"
                      alt="Course"
                      className="w-16 h-16"
                    />
                    <h1 className="font-bold">{course.name}</h1>
                    <p>{course.description}</p>
                    <p>{course.difficulty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : ("")}
        </div>
        
      </div>
    </div>
  );
}

function AddCourseDialog({ languageId }: { languageId: string }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const queryClient = useQueryClient();

  const addCourseMutation = useMutation(addCourseToLanguage, {
    onSuccess: () => {
      toast.success("Course added successfully");
      queryClient.invalidateQueries("courses");
    },
  });

  const handleAddCourse = () => {
    addCourseMutation.mutate({
      languageId,
      name,
      description,
      difficulty,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mb-1">Add Course</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
          <DialogDescription>Add a new course below</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Course Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Difficulty" className="text-right">
              Difficulty
            </Label>
            <Input
              id="Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAddCourse}>
            {addCourseMutation.isLoading ? "Adding... " : "Add Course"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
