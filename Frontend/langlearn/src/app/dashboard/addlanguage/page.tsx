"use client";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getLanguages, addLanguage } from "@/service/languageService"; // Adjust the path as necessary
import { Card, CardContent, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddLanguage() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery("languages", getLanguages);
  const addMutation = useMutation(addLanguage, {
    onSuccess: () => {
      queryClient.invalidateQueries("languages");
      toast.success("Language added successfully");
    },
  });

  const [newLanguage, setNewLanguage] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewLanguage((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleAddLanguage = () => {
    addMutation.mutate(newLanguage);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading languages</div>;

  return (
    <div className="p-4  w-full h-screen flex items-center justify-center flex-col">
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 overflow-scroll">
        {data.map((language: any) => (
          <div key={language.id}>
            <Card className="h-60 w-60">
              <CardContent className="flex flex-col items-center justify-center h-full rounded">
                <img
                  src="https://img.icons8.com/?size=100&id=6MP1kA74ozKg&format=png&color=000000"
                  alt="Language"
                  className="w-16 h-16"
                />
                <h1 className="font-bold text-2xl">{language.name}</h1>
                <p className="font-bold bg-mainlighter w-full h-20 rounded p-2">
                  {language.description}
                </p>
                <div className="flex flex-col justify-center items-center w-full h-30 bg-mainlighter rounded-lg">
                  <DeleteLanguageDialog />
                  <EditLanguageDialog />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="col-span-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-60 w-60">Add Language</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Language</DialogTitle>
                <DialogDescription>
                  Fill in the following fields to add a new language
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Language Name
                  </Label>
                  <Input
                    id="name"
                    value={newLanguage.name}
                    onChange={handleInputChange}
                    className="col-span-3 w-60"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    value={newLanguage.description}
                    onChange={handleInputChange}
                    className="col-span-3 w-60"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" onClick={handleAddLanguage}>
                  {addMutation.isLoading ? "Saving..." : "Add Language"}
                </Button>
                <DialogClose asChild>
                  <Button type="button">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

function DeleteLanguageDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Language</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this language?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Delete</Button>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EditLanguageDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Language</DialogTitle>
          <DialogDescription>Edit the language details below</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Language Name
            </Label>
            <Input id="name" className="col-span-3 w-60" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" className="col-span-3 w-60" />
          </div>
        </div>
        <DialogFooter>
          <Button>Save</Button>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
