"use client";

import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getLanguages,
  addCourseToLanguage,
  getLanguageCourses,
} from "@/service/languageService";
import {
  addSlideToCourse,
  deleteCourse,
  updateCourse,
  getCourseSlides,
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
import { Hourglass } from "react-loader-spinner";
import { useRouter } from "next/navigation";

export default function AddCourse() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [fetching, setFetching] = useState(false);
  const router = useRouter();

  let validCourse = 1;
  const { data: languages, isLoading: languagesLoading } = useQuery(
    "languages",
    getLanguages
  );

  const {
    data: courses,
    isLoading: coursesLoading,
    refetch: refetchCourses,
  } = useQuery(["courses"], () => getLanguageCourses(selectedLanguage), {
    enabled: false,
    onSuccess: () => {
      setFetching(false);
    },
  });

  if (languagesLoading) return <div>Loading...</div>;

  const handleSelectChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGetCourses = () => {
    setFetching(true);
    validCourse = 1;
    if (courses) {
      courses.splice(0, courses.length);
    }
    if (selectedLanguage) {
      refetchCourses();
    } else {
      toast.error("Please select a language");
    }
  };

  const handleSlides = (courseId: string) => {
    router.push(`/dashboard/addcourse/${courseId}`);
  };

  if (courses)
    validCourse = courses.filter((course: any) => course != null).length;

  return (
    <div className="overflow-scroll w-full h-screen flex flex-col mb-2 p-6 m-4">
      <h1 className="text-2xl font-bold">Select Language</h1>

      <select
        value={selectedLanguage}
        onChange={handleSelectChange}
        className="w-full p-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a language</option>
        {languages.map((language: any) => (
          <option className="w-80" key={language._id} value={language._id}>
            {language.name}
          </option>
        ))}
      </select>

      <Button className="w-full mb-1" onClick={handleGetCourses}>
        Get Courses
      </Button>
      <AddCourseDialog />

      <div>
        <h3 className="text-2xl font-bold">Courses</h3>

        {coursesLoading || fetching ? (
          <div className="flex items-center justify-center h-full">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#18bbec", "#5dcff2"]}
            />
          </div>
        ) : (
          ""
        )}

        {validCourse == 0 && !fetching ? (
          <div className="flex items-center justify-center h-full">
            No courses found
          </div>
        ) : (
          ""
        )}

        {courses ? (
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course: any) => (
              <>
                {course ? (
                  <Card key={course.id} className="h-80 w-60">
                    <CardContent className="flex flex-col items-center justify-center h-full rounded">
                      <img
                        src="https://img.icons8.com/?size=100&id=6MP1kA74ozKg&format=png&color=000000"
                        alt="Course"
                        className="w-16 h-16"
                      />

                      <h1 className="font-bold">{course.name}</h1>
                      <p>{course.description}</p>
                      <p>{course.difficulty}</p>
                      <DeleteCourseDialog
                        courseId={course._id}
                        refetch={refetchCourses}
                      />
                      <EditCourseDialog
                        courseId={course._id}
                        refetch={refetchCourses}
                      />
                      <Button
                        className="w-full"
                        onClick={() => handleSlides(course._id)}
                      >
                        {"Show Slides"}
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function AddCourseDialog() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const { data: languages, isLoading: languagesLoading } = useQuery(
    "languages",
    getLanguages
  );

  const queryClient = useQueryClient();

  const addCourseMutation = useMutation(addCourseToLanguage, {
    onSuccess: () => {
      toast.success("Course added successfully");
      queryClient.invalidateQueries("courses");
    },
  });

  const handleAddCourse = () => {
    if (!name || !description || !difficulty || !selectedLanguage) {
      toast.error("Please fill all fields");
      return;
    }
    addCourseMutation.mutate({
      languageId: selectedLanguage,
      name,
      description,
      difficulty,
    });
  };

  if (languagesLoading) return <div>Loading languages...</div>;

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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="language" className="text-right">
              Language
            </Label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="col-span-3 w-60 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a language</option>
              {languages.map((language: any) => (
                <option key={language._id} value={language._id}>
                  {language.name}
                </option>
              ))}
            </select>
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

function DeleteCourseDialog({
  courseId,
  refetch,
}: {
  courseId: string;
  refetch: any;
}) {
  const queryClient = useQueryClient();
  const deleteCourseMutation = useMutation(() => deleteCourse(courseId), {
    onSuccess: () => {
      toast.success("Course deleted successfully");
      refetch();
      queryClient.invalidateQueries("courses");
    },

  });

  const handleDeleteCourse = () => {
    deleteCourseMutation.mutate();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mb-1" variant="destructive">
          Delete Course
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Course</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this course?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleDeleteCourse}>
            {deleteCourseMutation.isLoading ? "Deleting... " : "Delete Course"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EditCourseDialog({
  courseId,
  refetch,
}: {
  courseId: string;
  refetch: any;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const queryClient = useQueryClient();

  const editCourseMutation = useMutation(
    () => updateCourse(courseId, { name, description, difficulty }),
    {
      onSuccess: () => {
        toast.success("Course edited successfully");
        queryClient.invalidateQueries("courses");
        refetch();
      },
    }
  );

  const handleEditCourse = () => {
    editCourseMutation.mutate();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mb-1">Edit Course</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course</DialogTitle>
          <DialogDescription>Edit the course below</DialogDescription>
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
          <Button onClick={handleEditCourse}>
            {editCourseMutation.isLoading ? "Editing... " : "Edit Course"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
