"use client";
import React from "react";
import Image from "next/image";
import backgroundImage from "../../../assets/b1.jpg";
import { Button } from "@/components/ui/button";
import image from "../../../assets/24.jpg";
import { Progress } from "@/components/ui/progress";
export default function Profile() {
  const progress = 90;
  const user = "Ephi";
  const email = "euphrates483@gmail.com";
  const language = "Portuguese";

  return (

    <h1>P</h1>
    // <div
    //   className="justify-between"
    //   style={{ backgroundImage: "url('../../../assets/b1.jpg')" }}
    // >
    //   <header className="flex items-center w-screen bg-gray-100 p-4">
    //     {/* Circular image component */}
    //     <div className="rounded-full overflow-hidden">
    //       {/* Apply border radius of 50% to make the rectangular image circular */}
    //       <Image
    //         src={image}
    //         alt="Profile Image"
    //         width={50}
    //         height={50}
    //         className="rounded-full"
    //       />
    //     </div>
    //     {/* Greeting message */}
    //     <h2 className="ml-2">Hello, {user}</h2>
    //   </header>
    //   <div className="flex items-center justify-center bg-gray-100 p-4">
    //     <form className="bg-[#D9D9D9] border-4 w-172 h-1/2 p-4 rounded-lg ">
    //       <div className="flex ">
    //         <form className="w-72 bg-gray-100 p-4 rounded-lg h-84 border-2 mr-4 hover:bg-mainlighter">
    //           <div className="mb-4" style={{ width: "250px", height: "200px" }}>
    //             <Image
    //               src={image}
    //               alt="Form Image"
    //               className="w-full h-auto rounded-lg"
    //             />
    //           </div>
    //           <div className="mt-16 mb-4">
    //             <h2 className="font-bold">{user}'s Profile</h2>
    //             <p>Email: {email}</p>
    //             <p>Language: {language}</p>
    //           </div>

    //           <Button className="w-full hover:text-black font-bold">
    //             Edit Profile &rarr;
    //           </Button>
    //         </form>
    //         <div className="felx ">
    //           <form className="w-72 bg-gray-100  p-4 rounded-lg hover:bg-mainlighter h-50 border-2 mb-4">
    //             <p className="ml-12 text- center font-bold">My progress</p>
    //             <div className="mb-4">
    //               <label htmlFor="progress">Portuguese:</label>
    //               <Progress value={33} className="w-full h-4" />
    //             </div>
    //             <div className="mb-4">
    //               <label htmlFor="progress">French:</label>
    //               <Progress value={progress} className="w-full h-4" />
    //             </div>
    //           </form>

    //           <form className="w-72 text- center bg-gray-100 p-4 rounded-lg h-60 border-2 hover:bg-mainlighter">
    //             <p className="font-bold">My Quiz Result</p>
    //             <p className="font-bold">My consistency</p>
    //             <div className="flex">
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white ">
    //                 S
    //               </div>
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white">
    //                 M
    //               </div>
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white">
    //                 T
    //               </div>
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white">
    //                 W
    //               </div>
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white">
    //                 Th
    //               </div>
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white">
    //                 F
    //               </div>
    //               <div className="w-10 h-8 bg-[#0c5e76] rounded-full flex justify-center items-center text-white">
    //                 Sa
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
