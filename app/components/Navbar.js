
import Logo from '@/app/components/Logo'
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 backdrop-blur bg-darkblue/80  text-white">
      <div className="flex items-center ml-80">
        <Logo className='mr-20'></Logo>

        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-light-blue font-display tracking-extraWide">DISCOVER</a>
          <a href="#" className="hover:text-light-blue font-display tracking-normalWide">FEATURES</a>
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
