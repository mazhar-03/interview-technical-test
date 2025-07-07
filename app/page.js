import React from "react";
import Image from "next/image";

export default function Home() {
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
          <div className="h-full flex flex-col justify-center gap-2">
            <span className="w-1 bg-lightblue h-72"></span>
            <span className="w-1 h-1 mb-28 bg-yellow rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-1  bg-yellow rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-1  bg-lightblue rounded-full shrink-0 grow-0"></span>
            <span className="w-1 h-6 mt-28  bg-yellow shrink-0 grow-0"></span>
            <span className="w-1 h-1 bg-white roundead-full shrink-0 grow-0"></span>
            <span className="w-1 h-26px bg-lightblue grow"></span>
          </div>
          <div className="relative h-full flex flex-col justify-center">
            <h1 className="flex flex-col">
              <span className="text-yellow text-3xl font-display tracking-wider text-shadow-yellow">SPACE</span>
              <span
                className="text-lightblue text-7xl font-display tracking-wider text-shadow-lightblue">KANGURUS</span>
            </h1>
            <p className="text-white text-lg font-body tracking-accurate mt-8 ml-4 break-words w-96">
              Warp into an epic space adventure & defend the motherland against the cyber dingoes!
            </p>

            <div className="flex gap-8 ml-2 mt-8">
              <div className="flex space-x-6 bg-transparent pt-6">
                <button className=" flex items-center
                  px-6 py-3 border-2 border-lightblue text-lightblue bg-transparent rounded-[999px] ">
                  <span className="absolute w-1 h-1 bg-lightblue rounded-full ml-34px"></span>
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
                <button className=" flex items-center
              px-6 py-3 border-2 border-yellow text-yellow font-mono text-sm uppercase tracking-widest rounded-[999px]  hover:bg-yellow-400/10 hover:text-black">
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
  )
}
