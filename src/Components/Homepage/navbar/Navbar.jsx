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
    <nav className="bg-black  bg-opacity-20 backdrop-filter backdrop-blur-lg " style={{ zIndex: 1000, position: 'relative'  }}>
      <div className=" flex items-center font-medium justify-around ">
        <div className="z-10 p-5 md:w-auto w-full flex justify-around">
          <img src={Logo} alt="logo" className="md:cursor-pointer  rounded-lg  h-32" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoIosCloseCircleOutline/> : <TiThMenu/> }
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
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
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          {/* <div className="py-5">
            <Button />
          </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;