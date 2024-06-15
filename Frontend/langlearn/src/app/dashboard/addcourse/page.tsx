"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getLanguages } from "@/service/languageService";
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
  const queryClient = useQueryClient();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const { data: languages, isLoading: languagesLoading } = useQuery(
    "languages",
    getLanguages
  );
  const { data: courses, isLoading: coursesLoading } = useQuery(
    "courses",
    getCourses
  );

  const addCourseMutation = useMutation(addCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  const addSlideMutation = useMutation(addSlideToCourse, {
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  const handleAddCourse = () => {
    addCourseMutation.mutate({
      language: selectedLanguage,
      title: courseTitle,
    });
  };

  const handleAddSlide = (courseId: any, slideTitle: any) => {
    addSlideMutation.mutate({ courseId, title: slideTitle });
  };

  if (languagesLoading || coursesLoading) return <div>Loading...</div>;

  const handleSelectChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedLanguage}
        onChange={handleSelectChange}
        className="w-80"
      >
        {languages.map((language: any) => (
          <option className="w-80" key={language.id} value={language.id}>
            {language.name}
          </option>
        ))}
      </select>

      <AddCourseDialog languageId={languages.id} />

      <Card className="h-60 w-60">
        <CardContent className="flex flex-col items-center justify-center h-full rounded">
          <div className="overflow-scroll flex flex-row items-center justify-between flex-wrap p-4">
            {courses.map((course: any) => (
              <div className="p-4 w-40 h-40" key={course.id}>
                <h3>{course.name}</h3>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AddCourseDialog({ languageId }: { languageId: string }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const queryClient = useQueryClient();

  const addCourseMutation = useMutation(addCourse, {
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
