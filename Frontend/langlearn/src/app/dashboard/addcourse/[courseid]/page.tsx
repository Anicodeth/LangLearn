"use client";
import {
  getCourseSlides,
  addSlideToCourse,
  removeSlideFromCourse,
} from "@/service/courseService";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { deleteSlide, updateSlide } from "@/service/slideService";

export default function CourseSlidesPage({
  params,
}: {
  params: { courseid: string };
}) {
  const {
    data: slidesData,
    isLoading: slidesLoading,
    isError: slidesError,
  } = useQuery(
    ["courseSlides", params.courseid],
    () => getCourseSlides(params.courseid),
    {
      onSuccess: () => {
        toast.success("Slides fetched successfully");
      },
      onError: () => {
        toast.error("Error fetching slides");
      },
    }
  );

  if (slidesLoading) return <div>Loading...</div>;

  return (
    <div className="h-full w-full flex overflow-scroll flex-col p-4 ">
      <h1>Course Slides</h1>
      <AddSlideCourseDialog courseId={params.courseid} />
      <div className="flex flex-wrap gap-4">
        {slidesData.map((slide: any) => (
          <Slide key={slide._id} slide={slide}  courseId={params.courseid}/>
        ))}
      </div>
    </div>
  );
}

// courseId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Course",
//   },
//   slideTitle: {
//     type: String,
//     required: true,
//   },
//   slideImage: {
//     type: String,
//   },
//   slideText: {
//     type: String,
//   },
//   slideAudio: {
//     type: String,
//   },
//   slideNewWord: {
//     type: String,
//   },
//   slideVideo: {
//     type: String,
//   },
//   slideQuestion: {
//     type: String,
//   },
//   slideChoices: {
//     type: String,
//   },
//   slideCorrectAnswer: {
//     type: String,
//   },
//   slideExplanation: {
//     type: String,
//   },
//   color: {
//     type: String,
//   },
//   font: {
//     type: String,
//   },

function AddSlideCourseDialog({ courseId }: { courseId: string }) {
  const [slideTitle, setSlideTitle] = useState("");
  const [slideImage, setSlideImage] = useState("");
  const [slideText, setSlideText] = useState("");
  const [slideAudio, setSlideAudio] = useState("");
  const [slideNewWord, setSlideNewWord] = useState("");
  const [slideVideo, setSlideVideo] = useState("");
  const [slideQuestion, setSlideQuestion] = useState("");
  const [slideChoices, setSlideChoices] = useState("");
  const [slideCorrectAnswer, setSlideCorrectAnswer] = useState("");
  const [slideExplanation, setSlideExplanation] = useState("");
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");

  const addSlideMutation = useMutation(
    () =>
      addSlideToCourse(courseId, {
        slideTitle,
        slideImage,
        slideText,
        slideAudio,
        slideNewWord,
        slideVideo,
        slideQuestion,
        slideChoices,
        slideCorrectAnswer,
        slideExplanation,
        color,
        font,
      }),
    {
      onSuccess: () => {
        toast.success("Slide added successfully");
      },
      onError: () => {
        toast.error("Error adding slide");
      },
    }
  );
  const handleSlideAddition = async () => {
    await addSlideMutation.mutateAsync();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mb-1">Add Slide</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
          <DialogDescription>Add a new course below</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Title
            </Label>
            <Input
              id="Slide Title"
              value={slideTitle}
              onChange={(e) => setSlideTitle(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Image
            </Label>
            <Input
              id="Slide Image"
              value={slideImage}
              onChange={(e) => setSlideImage(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Text
            </Label>
            <Input
              id="Slide Text"
              value={slideText}
              onChange={(e) => setSlideText(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Audio
            </Label>
            <Input
              id="Slide Audio"
              value={slideAudio}
              onChange={(e) => setSlideAudio(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Video
            </Label>
            <Input
              id="Slide Video"
              value={slideVideo}
              onChange={(e) => setSlideVideo(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Question
            </Label>
            <Input
              id="Slide Question"
              value={slideQuestion}
              onChange={(e) => setSlideQuestion(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Choices
            </Label>
            <Input
              id="Slide Choices"
              value={slideChoices}
              onChange={(e) => setSlideChoices(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Slide Correct Answer
            </Label>
            <Input
              id="Slide Correct Answer"
              value={slideCorrectAnswer}
              onChange={(e) => setSlideCorrectAnswer(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Color
            </Label>
            <Input
              id="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Font
            </Label>
            <Input
              id="Font"
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="col-span-3 w-60"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSlideAddition}>
            {addSlideMutation.isLoading ? "Adding..." : "Add Slide"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Slide({ slide, courseId }: { slide: any, courseId: string}) {
  return (
    <div>
      <div
        className="border w-80 h-96 p-4 rounded-md my-2"
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
      <div className = "w-full flex justify-stretch gap-4 ">
        <DeleteSlideDialog  slideId={slide._id} courseId={courseId} />
        <EditSlideDialog slide={slide} />
      </div>
    </div>
  );
}

function DeleteSlideDialog({ slideId, courseId }: { slideId: string, courseId: string}) {
  const deleteSlideMutation = useMutation(() => removeSlideFromCourse(courseId, slideId), {
    onSuccess: () => {
      queryClient.invalidateQueries("courseSlides");
      toast.success("Slide deleted successfully");
    },
    onError: () => {
      toast.error("Error deleting slide");
    },
  });

  const handleSlideDeletion = async () => {
    await deleteSlideMutation.mutateAsync();
  };

  const queryClient = useQueryClient();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Slide</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this slide?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleSlideDeletion}>
            {deleteSlideMutation.isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EditSlideDialog({ slide }: { slide: any }) {
  const [slideTitle, setSlideTitle] = useState(slide.slideTitle);
  const [slideImage, setSlideImage] = useState(slide.slideImage);
  const [slideText, setSlideText] = useState(slide.slideText);
  const [slideAudio, setSlideAudio] = useState(slide.slideAudio);
  const [slideNewWord, setSlideNewWord] = useState(slide.slideNewWord);
  const [slideVideo, setSlideVideo] = useState(slide.slideVideo);
  const [slideQuestion, setSlideQuestion] = useState(slide.slideQuestion);
  const [slideChoices, setSlideChoices] = useState(slide.slideChoices);
  const [slideCorrectAnswer, setSlideCorrectAnswer] = useState(
    slide.slideCorrectAnswer
  );
  const [slideExplanation, setSlideExplanation] = useState(
    slide.slideExplanation
  );
  const [color, setColor] = useState(slide.color);
  const [font, setFont] = useState(slide.font);

  const queryClient = useQueryClient();

  const editSlideMutation = useMutation(
    () =>
      updateSlide(slide._id, {
        slideTitle,
        slideImage,
        slideText,
        slideAudio,
        slideNewWord,
        slideVideo,
        slideQuestion,
        slideChoices,
        slideCorrectAnswer,
        slideExplanation,
        color,
        font,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("courseSlides");
        toast.success("Slide updated successfully");
      },
      onError: () => {
        toast.error("Error updating slide");
      },
    }
  );

  const handleSlideEdit = async () => {
    await editSlideMutation.mutateAsync();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Slide</DialogTitle>
          <DialogDescription>Edit the slide below</DialogDescription>
        </DialogHeader>
        <div className="flex flex-row justify-between gap-4">
          <div className="grid gap-4 py-4 h-72 overflow-scroll">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Title
              </Label>
              <Input
                id="Slide Title"
                value={slideTitle}
                onChange={(e) => setSlideTitle(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Image
              </Label>
              <Input
                id="Slide Image"
                value={slideImage}
                onChange={(e) => setSlideImage(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Text
              </Label>
              <Input
                id="Slide Text"
                value={slideText}
                onChange={(e) => setSlideText(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Audio
              </Label>
              <Input
                id="Slide Audio"
                value={slideAudio}
                onChange={(e) => setSlideAudio(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Video
              </Label>
              <Input
                id="Slide Video"
                value={slideVideo}
                onChange={(e) => setSlideVideo(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Question
              </Label>
              <Input
                id="Slide Question"
                value={slideQuestion}
                onChange={(e) => setSlideQuestion(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Choices
              </Label>
              <Input
                id="Slide Choices"
                value={slideChoices}
                onChange={(e) => setSlideChoices(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Slide Correct Answer
              </Label>
              <Input
                id="Slide Correct Answer"
                value={slideCorrectAnswer}
                onChange={(e) => setSlideCorrectAnswer(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Color
              </Label>
              <Input
                id="Color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="col-span-3 w-60"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="font" className="text-right">
                Font
              </label>
              <select
                id="font"
                value={font}
                onChange={(e)=>setFont(e.target.value)}
                className="col-span-3 w-60 p-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select a font</option>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
              </select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <div className="flex w-full h-40 overflow-scroll flex-col items-center">
            <Button className="w-full" onClick={handleSlideEdit}>
              {editSlideMutation.isLoading ? "Saving..." : "Save"}
            </Button>
            <PreviewSlides
              slide={{
                slideTitle,
                slideImage,
                slideText,
                slideAudio,
                slideNewWord,
                slideVideo,
                slideQuestion,
                slideChoices,
                slideCorrectAnswer,
                slideExplanation,
                color,
                font,
              }}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}



function PreviewSlides({ slide }: { slide: any }) {
  return (
    <div>
      <div
        className="border w-80 h-96 p-4 rounded-md my-2"
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
