import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-start pl-10">
      <div className="flex flex-col items-end pr-20">
        <div className="mb-8">
          <p className="text-3xl text-blue-600 font-bold">
            The free, fun, and effective way to
          </p>
          <p className="text-3xl text-blue-600 pl-33">learn a language!</p>
        </div>
        <div className="mr-4">
          <Button className="px-40 py-6 hover:bg-blue-600">Get Started</Button>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src="/teacher.png"
          alt="Example Image"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
