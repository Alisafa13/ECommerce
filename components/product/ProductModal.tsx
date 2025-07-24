'use client'
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ProductType } from "@/constans";
import Image from "next/image";
import { toast } from "sonner";

interface ProductModalProps {
  product: ProductType;
}
const ProductModal = ({ product }: ProductModalProps) => {
    
    const [quantity, setQuantity]=useState(1);

    const handleInc = () =>{
        setQuantity(quantity+1);
    }

    const handleDec = () =>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    const handleClick = () =>{
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
    }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>Details</Button>
        </DialogTrigger>
        <DialogContent className="max-w-500px md:max-w-[700px] lg:max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Image
                alt={product.title}
                width={500}
                height={500}
                src={product.image}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="px-6">
              <h1 className="text-3xl font-semibold">{product.title}</h1>
              <p className="font-light">
                {product.description} Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quidem quos qui unde et, quisquam explicabo
                asperiores, rerum iure dolorum odit necessitatibus. Quaerat modi
                exercitationem iusto.
              </p>
              <div className="flex items-center justify-between mt-4">
                <span>${product.price}</span>
                <span className="line-through">${product.mrp}</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <Button variant="destructive" size="icon" onClick={handleDec}>-</Button>
                {quantity}
                <Button variant="destructive" size="icon" onClick={handleInc}>+</Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleClick}>Add to cart</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModal;
