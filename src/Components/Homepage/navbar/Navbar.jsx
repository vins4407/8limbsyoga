import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/mainassets/8limbsyogalogo_white.png";
import NavLinks from "./NavLinks";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { TiThMenu } from "react-icons/ti"
import Button from "./Button";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-white shadow-md overflow-x-clip" style={{ backgroundColor:"#cc7722", zIndex: 1000, position: 'relative' }}>

    <div className="flex items-center justify-between p-2 px-6">
      <img src={Logo} alt="logo" className="w-10 md:cursor-pointer" />
      <div className="text-sm md:text-sm hidden md:flex justify-center items-center ">
        <ul className="flex items-center">
          <li key="home">
            <Link to="/" className="py-7 px-3 hover:text-orange-300 inline-block">
              Home
            </Link>
          </li>
          <NavLinks key="navlinks" />
          <li key="studios">
            <Link to="/course" className="py-7 px-3 hover:text-orange-300 inline-block">
              Membership
            </Link>
          </li>
          <li key="studios">
            <Link to="/course" className="py-7 px-3 hover:text-orange-300 inline-block">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:block hidden">
        <Link to="/ContactUs">
          <Button title={"Join Us"} className="text-sm" />
        </Link>
      </div>
    </div>
  
    {/* Mobile nav */}
    <ul
      className={`md:hidden bg-white fixed w-[95%] top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
    >
      <li className="flex items-center gap-[10rem]">
        <Link to="/" className="py-5 px-3 hover:text-orange-300 inline-block">
          Home
        </Link>
        <div className="text-sm md:hidden" onClick={() => setOpen(!open)}>
          <IoIosCloseCircleOutline />
        </div>
      </li>
      <NavLinks />
      <li>
        <Link to="/Studios" className="py-7 px-3 hover:text-orange-300 inline-block">
          Studios
        </Link>
      </li>
      <div className="py-5">
        <Link to="/ContactUs">
          <Button title={"Join Us"} className="text-sm" />
        </Link>
      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
