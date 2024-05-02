import React from 'react';
import { useState } from 'react';
import { HomeIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface NavbarProps {
  scrollToHero: (event: React.MouseEvent<HTMLButtonElement>) => void,
  scrollToProjects: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const Navbar: React.FC<NavbarProps> = ({ scrollToHero, scrollToProjects }) => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full h-16 bg-[#002F38] flex justify-between items-center">
      <div className="bg-[#00948D] w-32 h-full flex justify-center items-center">
        <a href="https://enzomorales.net">
          <HomeIcon className="h-7 w-7 text-slate-300 hover:scale-125 hover:text-pink-400 transition" />
        </a>
      </div>
      <div className="hidden sm:flex px-6 h-full gap-4">
        <button onClick={scrollToHero} className="text-white hover:bg-[#00948D] px-3 py-2 rounded-md transition-colors duration-300">About</button>
        <button onClick={scrollToProjects} className="text-white hover:bg-[#00948D] px-3 py-2 rounded-md transition-colors duration-300">Projects</button>

      </div>
      <div className="sm:hidden px-4 flex-col hover:bg-[#00948D] rounded-md transition-colors duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className="h-14 w-6 text-white" />
        </button>
        {isOpen && (
          <div className="absolute left-0 z-50 bg-[#00948D] w-full flex flex-col items-center py-2">
            <button onClick={scrollToHero} className="text-white hover:bg-emerald-500 px-28 py-2 rounded-md transition-colors duration-300">About</button>
            <button onClick={scrollToProjects} className="text-white hover:bg-emerald-500 px-28 py-2 rounded-md transition-colors duration-300">Projects</button>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar