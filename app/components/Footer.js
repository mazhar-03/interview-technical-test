import React from "react";
import Logo from "./Logo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-darkblue text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:justify-between">
        <div className="flex flex-col items-center gap-6 order-1 md:order-2 md:flex-1">
          <Logo className="text-lg bg-lightblue -mt-4">SK</Logo>

          <button className="relative flex items-center px-6 py-3 border-2 border-lightblue text-lightblue bg-transparent rounded-full">
            <span className="absolute left-2 w-1 h-1 bg-lightblue rounded-full" />
            WISHLIST ON
            <Image
              src="/static/Image/logos/steam_icon.png"
              alt="Steam Logo"
              width={24}
              height={24}
              className="ml-2"
            />
            <span className="absolute right-2 w-1 h-1 bg-lightblue rounded-full" />
          </button>
        </div>

        <nav className="flex flex-col items-center md:items-start order-2 md:order-1 md:flex-1">
          <div className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-0 text-center md:text-left font-display tracking-spec">
            <a href="#" className="hover:text-lightblue transition-colors">
              HOME
            </a>
            <a href="#" className="hover:text-lightblue transition-colors">
              DISCOVER
            </a>
            <a href="#" className="hover:text-lightblue transition-colors">
              FEATURES
            </a>
            <a href="#" className="hover:text-lightblue transition-colors">
              SEASONS
            </a>
          </div>
          <a
            href="#"
            className="mt-4 text-yellow font-display tracking-spec hover:text-lightblue"
          >
            LOG OUT
          </a>
        </nav>

        <div className="flex flex-col items-center md:items-end order-3 text-center md:text-right max-w-lg md:flex-1">
          <p className="mb-4 font-body">FOLLOW US</p>

          <div className="mb-8 flex space-x-2">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue text-darkblue font-body font-bold text-sm">YT</a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue text-darkblue font-body font-bold text-sm">Dis</a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue text-darkblue font-body font-bold text-sm">FB</a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue text-darkblue font-body font-bold text-sm">IG</a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue text-darkblue font-body font-bold text-sm">Tik</a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-lightblue text-darkblue font-body font-bold text-sm">TW</a>
          </div>

          <p className="text-balance text-xs leading-relaxed text-gray-500 font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
    </footer>
  );
}
