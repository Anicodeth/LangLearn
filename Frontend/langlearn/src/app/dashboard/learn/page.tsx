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
    <div>
      <h1 className="p-4 font-bold text-xl">Languages</h1>
      <div className="p-4 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {filteredData.map((language: any) => (
          <Card key={language._id} className="flex justify-between flex-col">
            <CardHeader className="">
              <img src="https://img.icons8.com/?size=100&id=6MP1kA74ozKg&format=png&color=000000" />
              <CardTitle>{language.name}</CardTitle>
              <CardDescription>{language.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Button
                  onClick={() =>
                    router.push(`/dashboard/learn/${language._id}`)
                  }
                >
                  See Courses
                </Button>
                <Button
                  onClick={() =>
                    router.push(`/dashboard/chat/${language.name}`)
                  }
                >
                  Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
