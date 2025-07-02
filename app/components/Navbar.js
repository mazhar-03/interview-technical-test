
import Logo from '@/app/components/Logo'
import React from "react";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-darkblue/70 text-white px-8 py-4 flex justify-between items-center">
      <div className="flex items-center ml-80">
        <Logo className='mr-20'></Logo>

        <div className="hidden md:flex items-center space-x-16 text-white">
          <div className="flex flex-col items-center mr-10 mt-2">
            <a href="#" className="hover:text-light-blue font-display tracking-extraWide text-yellow">
              DISCOVER</a>
            <span className="mr-2.5 pt-1 w-1.5 h-1.5 bg-yellow rounded-full"></span>
          </div>
          <div className="mr-10">
            <a href="#" className="mr-10 hover:text-light-blue font-display tracking-normalWide">FEATURES</a>
          </div>
          <a href="#" className="hover:text-light-blue font-display tracking-normalWide">SEASONS</a>
        </div>
      </div>

      <div className="flex-1 items-center space-x-4 ml-80">
        <p className="text-xs pl-2 text-lightblue">
          User1234
        </p>
        <button className="text-xs underline text-yellow" >
          Log Out
        </button>
      </div>
    </nav>

  )}
