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


export default function AuthLayout({
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
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              E-Commerce
            </ListItem>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
            </ListItem>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </div>
      <div className="border-0 w-full h-full flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
}
