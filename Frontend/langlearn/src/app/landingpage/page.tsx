import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto flex items-start justify-center">
      <div className="flex items-center">
        <div className="mr-20">
          <Image
            src="/teacher.png"
            alt="Example Image"
            width={500}
            height={300}
          />
        </div>
        <div>
          <div className="mb-8">
            <p className="text-3xl text-blue-600 font-bold">
              The free, fun, and effective way to
            </p>
            <p className="text-3xl text-blue-600">learn a language!</p>
          </div>
          <div className="mr-4">
            <Button className="px-40 py-6 hover:bg-blue-600">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
