import Image from "next/image";
import vrImage from "../../assets/vr.png";
import kidSitting from "../../assets/kidsitting.png";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen border-0 flex items-center justify-center">
      <div className="border-0 w-full h-full flex justify-center items-center ">
        <Image
        src = {kidSitting}
          alt="Example Image"
          width={500} // Set width and height for the image
          height={300}
        />
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center bg-mainlighter">
        {" "}
        {children}
      </div>
    </div>
  );
}
