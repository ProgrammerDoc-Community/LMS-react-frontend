import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";

import Logo from "../assets/logo.png";

const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className="bg-gray-200">
      <nav className="bg-gray-700 px-2 py-3">
        <div className="flex justify-between items-center">
          <Link className='flex items-center gap-1' to="/">
            <img src={Logo} alt="Logo" width={50} />
            <span className="text-white text-xs md:text-[14px] lg:text-xl font-semibold">Learning Management System</span>
          </Link>
          <div className="hidden md:flex gap-2">
            <Link
              to="/"
              className="bg-gray-900 text-white px-5 py-3 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-white px-5 py-3 rounded-md"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-white px-5 py-3 rounded-md"
            >
              Features
            </Link>
          </div>
          <div className="flex">
            <div className="md:hidden" onClick={handleClick}>
                {
                    !click ?
                    <button data-mobile-menu className="text-gray-400 py-3 px-2 hover:text-gray-200 block md:hidden">
                        <FaTimes />
                    </button>
                    :
                    <button data-mobile-menu className="text-gray-400 py-3 px-2 hover:text-gray-200 block md:hidden">
                        <FaBars />
                    </button>
                }
            </div>
            <Link to='/' className='block text-gray-200 px-5 py-3 rounded-md hover:text-blue-600/80'>
                Sign In
            </Link>
            <Link to='/' className='block bg-blue-600 text-gray-200 px-5 py-3 rounded-md hover:bg-blue-600/80'>
                Register
            </Link>
          </div>
        </div>

        <div className={!click ? 'block' : 'hidden'}>
            <div className="flex flex-col gap-1 py-3">
                <Link to='/' className='bg-gray-900 text-white block px-3 py-2 rounded-md font-medium'>Home</Link>
                <Link to='/' className='text-gray-300 hover:bg-white/5 active:text-white active:bg-gray-900 block px-3 py-2 rounded-md font-medium'>About</Link>
                <Link to='/' className='text-gray-300 hover:bg-white/5 active:text-white active:bg-gray-900 block px-3 py-2 rounded-md font-medium'>Features</Link>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
