import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBag } from 'lucide-react'
const CartMenu = () => {
  return (
    <div className=''><Sheet>
  <SheetTrigger><ShoppingBag/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='mb-5'><h1>Categories</h1></SheetTitle>
          Empty
    </SheetHeader>
  </SheetContent>
</Sheet></div>
  )
}

export default CartMenu