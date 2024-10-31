'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Opening from "@/components/Opening";
// import LoadingScreen from "@/components/LoadingScreen"; 
// import Update from "@/components/Update";
import Footer from "@/components/Footer";
// import MainContent from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
  
      {/* {isLoading && <MainContent />}
      {!isLoading && ( */}
        <div>
          <Header />
          <Opening />
          {/* <Update /> */}
          <Footer />
        </div>
       {/* )}   */}
    </>
  );
}
