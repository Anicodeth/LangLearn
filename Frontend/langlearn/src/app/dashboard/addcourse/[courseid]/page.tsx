import { getCourseSlides } from "@/service/courseService";
import { toast } from "sonner";
import { useQuery } from "react-query";
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
    <div>
      <h1>Course Slides</h1>
      <AddSlideCourseDialog courseId={params.courseid} />
      <div>
        {slidesData?.map((slide: any) => (
          <div key={slide.id}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
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
  const [slideChoices, setSlideChoices] = useState([]);
  const [slideCorrectAnswer, setSlideCorrectAnswer] = useState("");
  const [slideExplanation, setSlideExplanation] = useState("");
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");

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
              Slide New Word
            </Label>
            <Input
              id="Slide New Word"
              value={slideNewWord}
              onChange={(e) => setSlideNewWord(e.target.value)}
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
              Slide Explanation
            </Label>
            <Input
              id="Slide Explanation"
              value={slideExplanation}
              onChange={(e) => setSlideExplanation(e.target.value)}
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
          <Button onClick={}></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
