"use client";
import { getLanguageCourses } from "@/service/languageService";
import { useQuery } from "react-query";
import { useRouter, usePathname } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Courses({ params }: { params: { language: string } }) {
  const router = useRouter();
  const { data, isError, isLoading } = useQuery(
    "languages",
    ()=>getLanguageCourses(params.language)
  );
  const current_path = usePathname();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching languages</div>;

  //remove null
  const filteredData = data.filter((course: any) => course !== null);
  return (
    <div className="p-4 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
      {filteredData.map((course: any) => (
        <Card key={course._id} className="flex justify-between flex-col">
          <CardHeader className="">
            <CardTitle>{course.name}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
            <CardDescription>{course.difficulty}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <Button
                onClick={() => router.push(`${current_path}/${course._id}`)}
              >
                Take Course
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
