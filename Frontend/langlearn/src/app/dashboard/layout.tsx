"use client";

import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { CiPen, CiHome, CiChat1, CiUser } from "react-icons/ci";
import { PiExamThin } from "react-icons/pi";
import Image from "next/image";

import Link from "next/link";
import langLogo from "../../assets/langlearn2.png";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import bookShelf from "../../assets/bookshelf.svg";
import { createContext, useContext } from "react";
import { useUser } from "@/hooks/useUser";

const UserContext = createContext<any>(undefined);

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
interface ListItems {
  icon: any;
  text: string;
  link: string;
}

interface Dashboard{
  user: ListItems[];
  teacher: ListItems[];
  admin: ListItems[];
}

const menuItems: Dashboard = {
  user: [
    { icon: CiHome, text: "Home", link: "/dashboard" },
    { icon: CiPen, text: "Learn", link: "/dashboard/learn" },
    { icon: CiChat1, text: "Chat", link: "/dashboard/chat" },
    { icon: PiExamThin, text: "Quiz", link: "/dashboard/quiz" },
    { icon: CiUser, text: "Profile", link: "/dashboard/profile" },
  ],
  teacher: [
    { icon: CiHome, text: "Home", link: "/dashboard" },
    { icon: CiPen, text: "Teach", link: "/dashboard/teach" },
    { icon: CiChat1, text: "Chat", link: "/dashboard/chat" },
    { icon: PiExamThin, text: "Quiz", link: "/dashboard/quiz" },
    { icon: CiUser, text: "Profile", link: "/dashboard/profile" },
  ],
  admin: [
    { icon: CiHome, text: "Add Language", link: "/dashboard/addlanguage" },
    { icon: CiPen, text: "Add Course", link: "/dashboard/addcourse" },
    { icon: CiChat1, text: "Chat", link: "/dashboard/chat" },
    { icon: PiExamThin, text: "Quiz", link: "/dashboard/quiz" },
    { icon: CiUser, text: "Profile", link: "/dashboard/profile" },
  ],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useUser();
  if (loading) 
      return <div>Loading...</div>;

  if (user !== null){
  return (
    <UserContext.Provider value={user}>
    <div className="h-screen border-0 flex items-center justify-center ">
      <div className="w-fir h-full flex justify-center items-center">
        <Card
          className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
          placeholder={undefined}
        >
          <div className="mb-2 p-4 flex justify-center items-center">
            <Image src={langLogo} alt="LangLearn" width="200" height="100" />
          </div>

          <List placeholder={undefined}>
            <h1 className="font-bold">Student</h1>
            {menuItems[user.role].map((item, index) => (
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
              src={bookShelf}
              alt="Book Shelf"
              width="100"
              height="100"
            />
          </div>
          <div className="h-full  flex p-1">
            <div className="h-fit flex items-center justify-between self-end w-full p-1">
              <BadgeAvatars />
              <h5>{user.name}</h5>
            </div>
          </div>
        </Card>
      </div>
      <div className=" w-full h-full flex justify-center items-center bg-[#F7FDFC]">
        {children}
      </div>
    </div>
    </UserContext.Provider>
  );
}
}

function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" />
      </StyledBadge>
    </Stack>
  );
}
