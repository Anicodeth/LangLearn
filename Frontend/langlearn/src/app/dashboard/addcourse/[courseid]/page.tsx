import { getCourseSlides } from "@/service/courseService";
import { toast } from "sonner";
import { useQuery } from "react-query";

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

  return <div>{params.courseid}</div>;
}
