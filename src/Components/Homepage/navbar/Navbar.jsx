import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/mainassets/8limbsyogalogo.png";
import NavLinks from "./NavLinks";
import {IoIosCloseCircleOutline} from "react-icons/io"
import {TiThMenu} from "react-icons/ti"
import Button from "./Button";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-white text-black   bg-opacity-20 backdrop-filter backdrop-blur-md " style={{ zIndex: 1000, position: 'relative'  }}>
      <div className=" flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer  w-20" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoIosCloseCircleOutline color="white"/> : <TiThMenu color="white" /> }
          </div>
        </div>
        <ul className="md:flex md:text-white hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={` cursor-pointer
        md:hidden bg-white fixed  w-5/6 top-0 overflow-y-auto bottom-0  pl-4 h-fit  mt-44  ml-2 rounded-lg    duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-5 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
