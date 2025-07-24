'use client'
import { ProductType } from '@/constans'
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '../ui/button'
import ProductModal from './ProductModal'
import { toast } from 'sonner'
interface ProductItemProps{
    product:ProductType
}
const ProductItem = ({product}:ProductItemProps) => {
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
    <div><Card>
  <CardHeader>
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description} </CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <Image
    alt={product.title}
    width={500}
    height={500}
    src={product.image}
    className='w-full h-56 object-cover'/>
    <div className='flex items-center justify-between'>
        <span>${product.price}</span>
        <span className='line-through'>${product.mrp}</span>
    </div>
  </CardContent>
  <CardFooter>
    <div className='w-full flex justify-between'>
        <ProductModal product={product}/>
        <Button variant={'default'} onClick={handleClick}>Add to cart</Button>
    </div>
  </CardFooter>
</Card></div>
  )
}

export default ProductItem