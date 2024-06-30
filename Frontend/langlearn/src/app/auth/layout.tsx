'use client'
import Image from "next/image";
import vrImage from "../../assets/vr.png";
import kidSitting from "../../assets/kidsitting.png";
import happyWoman from "../../assets/happywoman.png";
import {usePathname} from 'next/navigation'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const current_path = usePathname();
  const last = current_path.split("/").pop();
  return (
    <div className="h-screen border-0 flex items-center justify-center">
      <div className="border-0 w-full h-full flex justify-center items-center bg-[#F7FDFC]">
        {last === "signin" ? (
          <Image
            src={kidSitting}
            alt="Example Image"
            width={500} // Set width and height for the image
            height={300}
          />
        ) : (
          <Image
            src={happyWoman}
            alt="Example Image"
            width={470} // Set width and height for the image
            height={270}
          />
        )}
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center bg-mainlighter">
        {" "}
        {children}
      </div>
    </div>
  );
}
