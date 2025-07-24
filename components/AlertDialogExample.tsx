'use client'
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
const AlertDialogExample = () => {
    const handleBildirim = ()=>{
        console.log("Bildirim açildi");
    }
  return (
    <div>
      {" "}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <Bell />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Lorem, ipsum.</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              consectetur facere hic tempora voluptatibus porro.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleBildirim}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertDialogExample;
