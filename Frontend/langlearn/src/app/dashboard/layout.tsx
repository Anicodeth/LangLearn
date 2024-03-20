"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import { CiPen, CiHome, CiChat1, CiUser } from "react-icons/ci";
import { PiExamThin } from "react-icons/pi";
import Image from "next/image";

import Link from "next/link";
import langLogo from "../../assets/langlearn2.png";
interface ListItems {
  icon: any;
  text: string;
  link: string;
}

const menuItems: ListItems[] = [
  {
    icon: CiHome,
    text: "Home",
    link: "/dashboard",
  },
  {
    icon: CiPen,
    text: "Learn",
    link: "/dashboard/learn",
  },
  {
    icon: CiChat1,
    text: "Chat",
    link: "/dashboard/chat",
  },
  {
    icon: PiExamThin,
    text: "Quiz",
    link: "/dashboard/quiz",
  },
  {
    icon: CiUser,
    text: "Profile",
    link: "/dashboard/profile",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen border-0 flex items-center justify-center">
      <div className="w-fir h-full flex justify-center items-center">
        <Card
          className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
          placeholder={undefined}
        >
          <div className="mb-2 p-4 flex justify-center items-center">
            {/* <Typography variant="h5" color="blue-gray" placeholder={undefined}>
              Lang Learn
            </Typography> */}
            <Image src={langLogo} alt="LangLearn" width="200" height="100" />
          </div>
          <List placeholder={undefined}>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <ListItem
                  className="hover:bg-mainlighter"
                  placeholder={undefined}
                  key={index}
                >
                  <ListItemPrefix placeholder={undefined}>
                    <item.icon className="h-5 w-5" />
                  </ListItemPrefix>
                  {item.text}
                </ListItem>
              </Link>
            ))}
          </List>
          <div className="flex justify-center items-center w-full h-30 bg-mainlighter rounded-lg">
            <Image
              className="fill-red-50"
              src="/bookShelf.svg"
              alt="Book Shelf"
              width="100"
              height="100"
            />
          </div>
        </Card>
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
}
