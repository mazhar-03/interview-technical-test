"use client";
import Image from "next/image";
import Logo from "@/app/components/Logo";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-darkblue/70 text-white px-6 py-4 z-50">
      <div className="flex items-center justify-between container mx-auto">
        <Logo className="text-white" />

        {/* DESKTOP */}
        <div className="hidden md:flex items-center space-x-16 ml-20">
          <div className="flex flex-col items-center mt-2">
            <a
              href="#"
              className="hover:text-light-blue font-display tracking-extraWide text-yellow"
            >
              DISCOVER
            </a>
            <span className="pt-1 w-1.5 h-1.5 bg-yellow rounded-full"></span>
          </div>
          <a
            href="#"
            className="hover:text-light-blue font-display tracking-normalWide"
          >
            FEATURES
          </a>
          <a
            href="#"
            className="hover:text-light-blue font-display tracking-normalWide"
          >
            SEASONS
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 ml-auto">
          <div className="flex flex-col justify-center text-right space-y-1">
            <p className="text-xs font-semibold text-lightblue pl-2">User#1234</p>
            <button className="text-xs underline text-yellow">Log Out</button>
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-lightblue overflow-hidden">
            <Image
              src="/static/Image/profile_photo.jpg"
              alt="Profile"
              width={640}
              height={440}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MOBILE */}
        <button
          className="md:hidden text-lightblue ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-darkblue/90 backdrop-blur-md px-6 pt-6 pb-8 mt-4 rounded-b-xl text-yellow shadow-xl space-y-5">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block font-display hover:text-light-blue"
          >
            DISCOVER
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block font-display hover:text-light-blue"
          >
            FEATURES
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="block font-display hover:text-light-blue"
          >
            SEASONS
          </a>

          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex flex-col text-sm space-y-1">
              <p className="font-semibold text-lightblue">User#1234</p>
              <button className="underline text-yellow">Log Out</button>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-lightblue overflow-hidden">
              <Image
                src="/static/Image/profile_photo.jpg"
                alt="Profile"
                width={640}
                height={440}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
