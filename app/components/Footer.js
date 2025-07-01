import React from 'react';
import Logo from './Logo';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="w-full h-1/6 py-4 bg-darkblue text-white">
      <div className="flex flex-col md:flex-row justify-around items-center ml-80 md:px-8 lg:px-16">

        <div className="flex flex-col items-center md:items-start  mb-6 md:mb-0 text-center md:text-left md:flex-1">
          <a href="#" className="hover:text-lightblue transition-colors font-body">HOME</a>
          <a href="#" className="hover:text-lightblue transition-colors font-body">DISCOVER</a>
          <a href="#" className="hover:text-lightblue transition-colors font-body">FEATURES</a>
          <a href="#" className="hover:text-lightblue transition-colors font-body">SEASONS</a>
          <a href="#" className="hover:text-lightblue transition-colors text-yellow font-body mt-8">LOG OUT</a>
        </div>

        <div className="flex flex-col items-center flex-shrink-0 mb-6 md:mb-0">
          <Logo  className="text-lg mb-0 bg-lightblue">SK</Logo>
          <Button className="inline-flex items-center text-sm px-6 py-2 mt-10">
            WISHLIST ON STEAM
          </Button>
        </div>

        <div className="flex flex-col items-center md:items-end mb-6 md:mr-80 text-center md:text-right md:flex-1">
          <p className="text-white text-base mb-4 font-body">FOLLOW US</p>
          <div className="flex space-x-2">
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-lightblue text-darkblue">
              <span className="font-bold text-sm font-body">YT</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-lightblue text-darkblue">
              <span className="font-bold text-sm font-body">Dis</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-lightblue text-darkblue">
              <span className="font-bold text-sm font-body">Tik</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-lightblue text-darkblue">
              <span className="font-bold text-sm font-body">IG</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-lightblue text-darkblue">
              <span className="font-bold text-sm font-body">TW</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed font-body mt-12 text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
    </footer>
  );
}
