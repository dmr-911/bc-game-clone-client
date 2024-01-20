import { Inter } from "next/font/google";
import SideImage from "@/data/images/bg-c80415f6.webp";
import MblImage from "@/data/images/mbl.png";
import LoginForm from "@/components/Login";

import Loader from "@/components/Loader";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={`bg-[#1C1E22] min-h-screen h-screen lg:h-screen w-full text-white ${
        !loading ? "grid grid-cols-1 lg:grid-cols-2" : ""
      }`}
    >
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <div className="h-[240px] lg:h-full w-full relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SideImage.src}
              // fill
              alt="sidebar image"
              className="hidden w-full lg:block h-full"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MblImage.src}
              // fill
              alt="sidebar image"
              className="lg:hidden h-full w-full"
            />
            <div className="absolute z-10 text-right right-4 bottom-6">
              <h2 className="text-2xl font-bold">
                WELCOME TO <span className="text-[#3BC117]">BC.GAME</span>
              </h2>
              <p className="text-sm mt-2 text-gray-300">
                START YOUR GAME JOURNEY NOW!
              </p>
            </div>
          </div>
          <div className="pl-12 lg:px-20 py-8">
            <LoginForm />
            {/* <Loader/> */}
          </div>
        </>
      )}
    </div>
  );
}
