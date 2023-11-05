import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/mainassets/8limbsyogalogo_black.png";
import NavLinks from "./NavLinks";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { TiThMenu } from "react-icons/ti"
import Button from "./Button";
import bgFloral2 from '../../../assets/mainassets/imgbin_floral-design-green-flower-png.png'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-white text-black  shadow-md   overflow-x-clip  " style={{ zIndex: 1000, position: 'relative' }}>

      {/* <img src={bgFloral3} className='absolute w-16 2xl:w-36 z-10 -top-4 -left-6 rotate-[-75deg]'></img> */}
      <img src={bgFloral2} className='absolute w-16 2xl:w-36 z-0 left-0   -top-16 rotate-[90deg]  transform -scale-x-100'></img>

      <img src={bgFloral2} className='absolute w-16 2xl:w-36 z-0 right-0  -top-16 rotate-[-90deg] '></img>

      <div className=" flex items-center font-medium justify-center gap-8">
        <div className=" p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer   backdrop-blur-lg   w-20" />
          <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
            {open ? <IoIosCloseCircleOutline /> : <TiThMenu />}
          </div>
        </div>
        <ul className="md:flex md:text-black hidden uppercase items-center gap-8 font-[Poppins]">
          <li key="home">
            <Link to="/" className="py-7 px-3 hover:text-orange-300 inline-block">
              Home
            </Link>
          </li>
          <NavLinks key="navlinks" />
          <li key="studios">
            <Link to="/Studios" className="py-7 px-3 hover:text-orange-300 inline-block">
              Studios
            </Link>
          </li>
        </ul>

        <div className="md:block hidden">
          <Link to="/ContactUs">
            <Button title={"JOIN US"} />
          </Link>

        </div>


        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white fixed  w-[95%] top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"} 
            "}
        `}
        >

          <li className=" flex items-center gap-[10rem] ">
            <Link to="/" className="py-5 px-3 hover:text-orange-300 inline-block">
              Home
            </Link>
            <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
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
            <Button title={"JOIN US"} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
