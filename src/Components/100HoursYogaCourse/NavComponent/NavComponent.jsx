import React from 'react';
import Navbar from '../../Homepage/navbar/Navbar';

function NavComponent({ imgSrc }) {
  return (
    <div className="relative bg-[#f1ece0ff] flex justify-center items-center">
      <div className="top-0 w-full absolute">
        <Navbar />
      </div>
      <img src={imgSrc} alt="image 1" className="brightness-75 h-[25rem] w-full object-cover" />
      <div className="z-10 w-full h-10 absolute -bottom-7 bg-pageJoint bg-repeat-x bg-contain" />
    </div>
  );
}

export default NavComponent;
