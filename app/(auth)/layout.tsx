import React from "react";
import Image from "next/image";
// import { Pacifico } from "next/font/google";
interface AuthLayoutProps {
  children: React.ReactNode;
}
// const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex items-center space-x-14">
      <div className="hidden md:block w-2/5">
        <Image
          alt="shop"
          src={`/shop.avif`}
          width={956}
          height={717}
          className="object-cover min-h-screen "
        />
      </div>
      <div className=" flex flex-col justify-center items-center min-h-screen md:block md:min-h-min w-full md:w-2/5 ">
          {/* <h2 className={`${pacifiko.className}`}>ECommerce</h2> */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
