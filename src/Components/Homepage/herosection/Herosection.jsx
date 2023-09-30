import img1 from "../../../assets/hero.jpg";
import img2 from '../../../assets/hero2.jpg'
import img3 from "../../../assets/hero3.jpg";
import React from 'react'
import { Carousel } from "@material-tailwind/react";


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
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src={img1}
      alt="image 1"
      className="  h-[40rem] w-full object-cover"
    />
    <img
      src={img2}
      alt="image 2"
      className=" h-[40rem] w-full object-cover"
    />
    <img
      src={img3}
      alt="image 3"
      className=" h-[40rem] w-full object-cover"
    />

  </Carousel>
  <h1 className=' pt-10 text-center text-7xl text-orange-500 '> 8 Limbs Yoga Studio</h1>

    </div>
  )
}

export default Herosection