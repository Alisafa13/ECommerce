import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { components } from '@/constans'
const MobilMenu = () => {
  return (
    <div className='flex md:hidden'><Sheet>
  <SheetTrigger><MenuIcon/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='mb-5'><h1>Categories</h1></SheetTitle>
          {components.map((component) => (
                      <Link
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.title}
                      </Link>
                    ))}
    </SheetHeader>
  </SheetContent>
</Sheet></div>
  )
}

export default MobilMenu