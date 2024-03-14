"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

interface ListItems{
    icon: any;
    text: string;
    link: string;
}

const menuItems: ListItems[] = [
  {
    icon: PresentationChartBarIcon,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: PresentationChartBarIcon,
    text: "dashboard",
    link: "/dashboard",
  },
  {
    icon: PresentationChartBarIcon,
    text: "dashboard",
    link: "/dashboard",
  },
  {
    icon: PresentationChartBarIcon,
    text: "dashboard",
    link: "/dashboard",
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
            { menuItems.map((item, index) => (
            <ListItem placeholder={undefined} key = {index}>
                <ListItemPrefix placeholder={undefined}>
                    <item.icon className="h-5 w-5" />
                </ListItemPrefix>
                {item.text}
                </ListItem>
            ))}
          </List>
        </Card>
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
}