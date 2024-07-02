"use client";
import Image from "next/image";
import kidSitting from "../../assets/kidsitting.png";
import happyWoman from "../../assets/happywoman.png";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const current_path = usePathname();
  const last = current_path.split("/").pop();

  return (
    <div className="h-screen flex flex-col sm:flex-row items-center justify-center">
      <div className="hidden sm:flex w-full sm:w-1/2 h-full justify-center items-center bg-[#F7FDFC]">
        {last === "signin" ? (
          <Image
            src={kidSitting}
            alt="Example Image"
            width={500}
            height={300}
          />
        ) : (
          <Image
            src={happyWoman}
            alt="Example Image"
            width={470}
            height={270}
          />
        )}
      </div>
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center bg-mainlighter ">
        {children}
      </div>
    </div>
  );
}
