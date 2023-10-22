import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/mainassets/8limbsyogalogo_black.png";
import NavLinks from "./NavLinks";
import {IoIosCloseCircleOutline} from "react-icons/io"
import {TiThMenu} from "react-icons/ti"
import Button from "./Button";
import bgFloral2 from '/home/vinayak1506/Desktop/yogastudio/src/assets/mainassets/imgbin_floral-design-green-flower-png.png'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-white text-black   " style={{ zIndex: 1000, position: 'relative'  }}>

      {/* <img src={bgFloral3} className='absolute w-16 2xl:w-36 z-10 -top-4 -left-6 rotate-[-75deg]'></img> */}
      <img src={bgFloral2} className='absolute w-16 2xl:w-36 z-0 left-0   -top-16 rotate-[90deg]  transform -scale-x-100'></img>

      <img src={bgFloral2} className='absolute w-16 2xl:w-36 z-0 right-0  -top-16 rotate-[-90deg] '></img>

      <div className=" flex items-center font-medium justify-center gap-8">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer   backdrop-blur-lg   w-20" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoIosCloseCircleOutline /> : <TiThMenu  /> }
          </div>
        </div>
        <ul className="md:flex md:text-black hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 hover:text-orange-300 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 hover:text-orange-300 inline-block">
              Studios
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={` cursor-pointer
        md:hidden bg-white     fixed  w-5/6 top-0 overflow-y-auto bottom-0  pl-4 h-fit  mt-44  ml-2 rounded-lg    duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-5 px-3 hover:text-orange-300 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 hover:text-orange-300 inline-block">
              Studios
            </Link>
          </li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
