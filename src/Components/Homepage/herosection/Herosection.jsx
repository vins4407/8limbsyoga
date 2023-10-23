
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../../assets/mainassets/slider1.webp"
import slider2 from "../../../assets/mainassets/slider2.webp"
import slider3 from "../../../assets/mainassets/slider3.webp"
import slider4 from "../../../assets/mainassets/slider4.webp"
import Navbar from "../navbar/Navbar";
import Logo from "../../../assets/mainassets/8limbsyogalogo.png";
function Herosection() {


  return (
    <>
      <div className=" relative  flex justify-center items-center ">

        <div className="top-0 w-full   absolute">
          <Navbar />
        </div>
        <div className=" w-44  xl:w-1/2   z-10 absolute  flex flex-col   items-center	 justify-center ">
          <h1 className=' mt-20 text-center text-xl xl:text-5xl text-white font-bold  font-serif'> Transform Your Health </h1>
          <h1  className=' text-center text-xl  text-white font-bold  font-manrope' >Nurture Your Mind, Body, and Soul with...</h1>
          <img src={Logo} alt="logo" className="md:cursor-pointer  rounded-xl " />

        </div>
 

        <Carousel
          className="   "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-orange-500" : "w-4 bg-white"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))

              }
            </div>
          )}
          autoplay={true}
          autoplayDelay={8000}
          loop={true}
          
        >

          <img
            src={slider1}
            alt="image 1"
            className=" brightness-75   h-[35rem]  xl:h-[58rem] w-full  object-cover "
          />
          <img
            src={slider2}
            alt="image 2"
            className=" brightness-75  h-[35rem]  xl:h-[58rem] w-full object-cover"
          />
          <img
            src={slider3}
            alt="image 3"
            className=" brightness-75  h-[35rem]  xl:h-[58rem] w-full object-cover"
          />
          <img
            src={slider4}
            alt="image 3"
            className="brightness-75  h-[35rem]  xl:h-[58rem] w-full object-cover "
          />

        </Carousel>
        <div className='z-10 w-full h-10 absolute -bottom-7 bg-pageJoint  bg-repeat-x bg-contain' />

      </div>


    </>

  )
}

export default Herosection