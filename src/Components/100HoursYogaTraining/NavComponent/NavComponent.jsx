import React from 'react';
import Navbar from '../../Homepage/navbar/Navbar';
import Headerlinks from '../../Comman/Headerlinks';
import img1 from "../../../assets/mainassets/slider4.webp"
import img2 from "../../../assets/mainassets/slider2.webp"
import img3 from "../../../assets/mainassets/slider3.webp"
import { Carousel } from '@material-tailwind/react';

function NavComponent({ imgSrc }) {
  return (
    <section>
      <Headerlinks />
      <div className=" relative bg-[#f1ece0ff] overflow-hidden flex flex-col ">
        <div className="">
          <Navbar />
        </div>
        <div className="z-10 w-full h-10 absolute top-24 bg-pageJoint bg-repeat-x bg-contain" />

        <div className=' flex  justify-center'>
          <Carousel
            className="    w-full  "
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
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
              src={img1}
              alt="image 1"
              className=" brightness-75   h-[25rem] xl:h-[30rem]  w-full  object-cover "
            />
            <img
              src={img2}
              alt="image 2"
              className=" brightness-75  h-[25rem] xl:h-[30rem]   w-full object-cover"
            />
            <img
              src={img3}
              alt="image 3"
              className=" brightness-75  h-[25rem] xl:h-[30rem]   w-full object-cover"
            />
          </Carousel>
        </div>

        <div className="z-10 w-full h-10 absolute -bottom-7 bg-pageJoint bg-repeat-x bg-contain" />
      </div>
    </section>
  );
}

export default NavComponent;
