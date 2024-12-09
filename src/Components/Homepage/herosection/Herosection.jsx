
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../../assets/mainassets/slider1.webp"
import slider2 from "../../../assets/mainassets/slider2.webp"
import slider3 from "../../../assets/mainassets/slider3.webp"
import slider4 from "../../../assets/mainassets/slider4.webp"
import Navbar from "../navbar/Navbar";
import Logo from "../../../assets/mainassets/8limbsyogalogo.png";


const yoga_types = [
  {
    image: Logo,
    text: "Arial Yoga"
  },
  {
    image: Logo,
    text: "Weight loss ad Fitness"
  },
  {
    image: Logo,
    text: "Stress Management"
  },
  {
    image: Logo,
    text: "Mental Healing an Counseling"
  },
  {
    image: Logo,
    text: "Meditation"
  },
  {
    image: Logo,
    text: "Face Yoga"
  },
]

function Herosection() {


  return (
    <>
      <div className=" relative  flex justify-center items-center ">

        <div className="top-0 w-full   absolute">
          <Navbar />
        </div>
        <div className=" w-full  xl:w-1/2   z-10 absolute  flex flex-col   items-center	 justify-center ">

          <img src={Logo} alt="logo" className="md:cursor-pointer  rounded-xl " />
          <h1 className=' text-center text-lg text-white font-bold  font-serif'> Transform Your Health </h1>
          <h1 className=' text-center text-base  text-white font-bold  font-manrope' >Nurture Your Mind, Body, and Soul with...</h1>

        </div>


        <Carousel
          className=""
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


      </div>
      {/* <div className="pt-5 flex flex-wrap justify-center w-full">
            {yoga_types.map((item, index) => (
              <yoga_types_circles key={index} image={item.image} text={item.text} />
            ))}
      </div> */}


    </>

  )
}

export default Herosection


const yoga_types_circles = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center inline-block">
      <div className="w-40 h-40 border-black rounded-full bg-black overflow-hidden">
        <img src={image} alt={text} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm text-white mt-2">{text}</p>
    </div>
  );
};