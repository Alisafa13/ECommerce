"use client";
import { Pacifico } from "next/font/google";
import React, { useState } from "react";
import NavMenu from "@/components/header/NavMenu";
import { Input } from "../ui/input";
import { Heart, Search, UserIcon } from "lucide-react";
import { ModeToggle } from "../ui/modeToggle";
import { Button } from "../ui/button";
import MobilMenu from "./MobilMenu";
import CartMenu from "./CartMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";
const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
        router.push(`search?query=${encodeURIComponent(query)}`)
    }
  };
  return (
    <div className=" mx-auto bgone shadow-md pb-5">
      <div className="flex items-center justify-between p-5">
        <div>
          <h2 className={`${pacifiko.className}`}>ECommerce</h2>
        </div>
        <div className="hidden md:flex relative md:w-1/2">
          <Input
            className="w-full"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button className="absolute right-1" variant={"link"} onClick={handleSearch}>
            <Search />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/fav">
            <Heart />
          </Link>
          <div className="mt-1.5">
            <CartMenu />
          </div>
          <Link href="/login">
            <UserIcon />
          </Link>
          <ModeToggle />
          <MobilMenu />
        </div>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
