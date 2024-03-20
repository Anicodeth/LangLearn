"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import { FaHome } from "react-icons/fa";
import { CiPen, CiHome, CiChat1, CiUser } from "react-icons/ci";
import { PiExam, PiExamThin } from "react-icons/pi";
import Image from "next/image";

import Link from "next/link";

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
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray" placeholder={undefined}>
              Lang Learn
            </Typography>
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
          <Image src="/bookshelf.png" alt="Logo" width={100} height={100} />
        </Card>
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
}
