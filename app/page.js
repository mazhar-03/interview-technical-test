import React from "react";
import Image from "next/image";

export default function Home() {
  return (


    // <div className="relative h-5/6 overflow-hidden backdrop-blur-2xl">
    //   <Image
    //     src="/Image/bg_image.png"
    //     alt="Background Image"
    //     width={1600}
    //     height={400}
    //     layout="responsive"
    //   />
    // </div>

    <div>
      <div className="relative w-full h-screen">
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
          className="absolute w-full h-full z-10 object-cover brightness-125"
        />
      </div>

      <div className="absolute top-0 w-full">
        <div className="container flex mx-auto h-screen gap-8 ">
          <div className="h-full flex flex-col justify-center gap-2">
            <span className="w-1 bg-lightblue grow"></span>
            <span className="w-1 h-1 bg-yellow rounded-full"></span>
            <span className="w-1 h-1 bg-yellow rounded-full"></span>
            <span className="w-1 h-1 bg-yellow rounded-full"></span>
            <span className="w-1 h-26px bg-lightblue"></span>
          </div>
          <div className="relative h-full flex flex-col justify-center">
            <h1 className="flex flex-col">
              <span className="text-yellow text-3xl font-display tracking-normalWide text-shadow-yellow">SPACE</span>
              <span className="text-lightblue text-7xl font-display tracking-normalWide text-shadow-lightblue">KANGURUS</span>
            </h1>
              <p className="text-white text-lg font-body tracking-accurate mt-4 ml-4 break-words w-96">
                Warp into an epic space adventure & defend the motherland against the cyber dingoes!
              </p>
          </div>
          {/*<div className="h-full flex flex-col justify-center gap-2">*/}
          {/*  <span className="w-1 h-6 bg-yellow"></span>*/}
          {/*  <span className="my-3 w-1.5 h-1.5 bg-white rounded-full"></span>*/}
          {/*  <span className="w-1 h-72 bg-lightblue grow"></span>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>


  )
}

/*
    <div className="p-6">
      <h1 className="font-bold text-green-600">
        Hello world!
      </h1>
      <p className="text-gray-600 text-3xl mt-3">
        Welcome to your new Next.js app!
      </p>
      <p className=" text-base mt-3">
        Welcome to your new Next.js app!
      </p>
      <h1 className=" leading-10 text-gray-600 text-lg mb-3">
        Welcome to your new Next.js app!
      </h1>
      <p className="font-display text-lg mb-3">
        Paragraph font Loomattic
      </p>
      <p className="underline truncate
      underline-offset-8 font-body tracking-normalWide mt-4 mb-3">
        Paragraph font Nunito
      </p>
      <p className=" break-words font-body">
        been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
      </p>
    </div>
*/

/*    <div className="Parent">
      <div>Header</div>
      <div className="flex flex-col md:flex-row">
        <div className="w-32 bg-sky-500">Sidebar</div>
        <div className="w-full bg-red-500">Main Content</div>
      </div>
    </div>*/

/*    <div className="Parent">
      <div>Header</div>
      <div className="flex justify-evenly">
        <div className="ml-20">Sidebar</div>
        <div className="">Main Content</div>
      </div>
    </div>*/

/*<div className="h-screen text-white Parent bg-darkblue">
  <div className="container mx-auto">
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
      <div className="bg-sky-500 p-6 rounded-lg">First columns</div>
      <div className="bg-sky-500 p-6 rounded-lg row-span-8">Second columns</div>
      <div className="bg-red-500 p-6 rounded-lg col-span-12">Third columns</div>
      <div className="bg-sky-500 p-6 rounded-lg">Fourth columns</div>
      <div className="bg-sky-500 p-6 rounded-lg ">Fifth columns</div>
      <div className="bg-sky-500 p-6 rounded-lg">Sixth columns</div>
    </div>
  </div>
</div>*/

/*<div className="h-screen p-4 Parent">
  <div className="inline-block p-4 blur text-black bg-white border rounded-lg shadow-md shadow-blue-500/50">
    <h1 className="text-2xl">Hello</h1>
    <p className="mb-4">This is my div</p>
    <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 text-white">Say hello</button>
  </div>
</div>
*/
