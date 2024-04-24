import { useState } from 'react';
import { HomeIcon, Bars3Icon } from '@heroicons/react/24/outline';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-emerald-800 flex justify-between items-center">
      <div className="bg-emerald-100 w-32 h-full flex justify-center items-center">
        <HomeIcon className="h-6 w-6 text-black" />
      </div>
      <div className="hidden sm:flex px-6 gap-4">
        <button className="text-white">About</button>
        <button className="text-white">Projects</button>
        <button className="text-white">Contact</button>
      </div>
      <div className="sm:hidden px-4 flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}>
          <Bars3Icon className="h-14 w-6 text-white" />
        </button>
        {isOpen && (
          <div className="absolute left-0 bg-emerald-700 w-full flex flex-col items-center py-2">
            <button className="text-white py-2">About</button>
            <button className="text-white py-2">Projects</button>
            <button className="text-white py-2">Contact</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar