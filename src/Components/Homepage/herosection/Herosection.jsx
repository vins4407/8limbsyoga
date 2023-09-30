import img1 from "../../../assets/hero.jpg";
import img2 from '../../../assets/hero2.jpg'
import img3 from "../../../assets/hero3.jpg";
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../../assets/mainassets/slider1.webp"
import slider2 from "../../../assets/mainassets/slider2.webp"
import slider3 from "../../../assets/mainassets/slider3.webp"
import slider4 from "../../../assets/mainassets/slider4.webp"

function Herosection() {
  const slides = [
    { url: img1, },
    { url: img2 },
    { url: img3 },
  ];

  return (
    <div  className=" place-items-center">
    <Carousel
    className=""
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-orange-500" : "w-4 bg-white"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src={slider1}
      alt="image 1"
      className="  h-[40rem] w-full object-cover"
    />
    <img
      src={slider2}
      alt="image 2"
      className=" h-[40rem] w-full object-cover"
    />
    <img
      src={slider3}
      alt="image 3"
      className=" h-[40rem] w-full object-cover"
    />
    <img
      src={slider4}
      alt="image 3"
      className=" h-[40rem] w-full object-cover"
    />

  </Carousel>
            <div className=" mx-2 xl:mx-[35rem] my-4  rounded-full bg-white border border-orange-500">
                <h1 className=' p-2 text-center text-4xl xl:text-7xl text-orange-500 '> 8 Limbs Yoga Studio</h1>

            </div>

    </div>
  )
}

export default Herosection