// components/HeroSection.jsx

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-screen z-0">
        <Image
          src="/static/Image/bg.jpg"
          alt="Background"
          priority
          width={2560}
          height={1440}
          className="absolute w-full h-full z-0 object-cover"
        />

        <Image
          src="/static/Image/kangaroo.png"
          alt="Kangaroo overlay"
          width={2560}
          height={1440}
          className="absolute w-full min-h-[500px] bottom-0 right-0 lg:h-full z-10 object-cover object-right brightness-125"
        />
      </div>

      <div className="absolute top-0 w-full z-10">
        <div className="container flex mx-auto h-screen gap-8">
          <div className="h-full flex flex-col justify-center gap-2 ml-8 lg:ml-0">
            <span className="w-1 bg-lightblue h-72"></span>
            <span className="w-1 h-1 mb-28 bg-yellow rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-1  bg-yellow rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-1  bg-lightblue rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-6 mt-28  bg-yellow shrink-0 grow-0"></span>
            <span className="w-1 h-1 bg-white rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-[26px] bg-lightblue grow"></span>
          </div>

          <div className="relative w-full h-full flex flex-col justify-center -mt-32 lg:mt-0">
            <h1 className="flex flex-col w-full">
              <span className="text-yellow text-3xl font-display tracking-wider text-shadow-yellow">
                SPACE
              </span>
              <span className="text-lightblue text-7xl font-display tracking-wider text-shadow-lightblue">
                KANGURUS
              </span>
            </h1>
            <p className="text-white text-lg font-body tracking-accurate mt-8 ml-4 break-words">
              Warp into an epic space adventure & defend the motherland against the cyber dingoes!
            </p>

            <div className="flex gap-8 mt-8 grow-0">
              <div className="flex space-x-6 bg-transparent pt-6">
                <button className="relative flex items-center px-6 py-3 border-2 border-lightblue text-lightblue bg-transparent rounded-full">
                  <span className="absolute w-1 h-1 bg-lightblue rounded-full ml-[34px]"></span>
                  WISHLIST ON
                  <Image
                    src="/static/Image/logos/steam_icon.png"
                    alt="Steam Logo"
                    width={24}
                    height={24}
                    className="ml-2"
                  />
                  <span className="absolute w-1 h-1 bg-lightblue rounded-full -ml-3"></span>
                </button>
              </div>
              <div className="flex space-x-6 bg-transparent pt-6">
                <button className="relative flex items-center px-6 py-3 border-2 border-yellow text-yellow font-mono text-sm uppercase tracking-widest rounded-full hover:bg-yellow-400/10 ">
                  <span className="absolute w-1 h-1 bg-yellow rounded-full ml-16"></span>
                  Sign Up
                  <span className="absolute w-1 h-1 bg-yellow rounded-full -ml-3"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
