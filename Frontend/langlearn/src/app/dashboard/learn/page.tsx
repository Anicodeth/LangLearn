"use client";
import { getLanguages } from "@/service/languageService";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Learn() {
  const router = useRouter();
  const { data, isError, isLoading } = useQuery("languages", getLanguages);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching languages</div>;

  const filteredData = data.filter((language: any) => language !== null);
  return (
    <div className="p-4 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
      {filteredData.map((language: any) => (
        <Card key={language._id} className="flex justify-between flex-col">
          <CardHeader className="">
            <CardTitle>{language.name}</CardTitle>
            <CardDescription>{language.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <Button
                onClick={() => router.push(`/dashboard/learn/${language._id}`)}
              >
                See Courses
              </Button>
              <Button
                onClick={() => router.push(`/dashboard/chat/${language._id}`)}
              >
                Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
