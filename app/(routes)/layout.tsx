import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { Toaster } from "sonner";
interface RoutesLayutProps {
  children: React.ReactNode;
}
const RoutesLayut = ({ children }: RoutesLayutProps) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default RoutesLayut;
