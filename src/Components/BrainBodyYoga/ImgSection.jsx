import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Herobutton from '../Comman/Herobutton';
import floralbg from '../../assets/mainassets/imgbin_wedding-green-png.png'

function ImgSection({ img1, img2, img3, title }) {
  return (

    <div className=" bg-[#cbdebdff] relative px-4 py-10 flex justify-center xl:items-center  ">
      <div className=" xl:w-34  z-10 absolute  flex flex-col justify-center ">
        <h1 className=' mt-20  text-md xl:text-4xl text-white font-bold  font-serif'> {title} AT </h1>
        <Herobutton />
      </div>
      <img src={floralbg} className='absolute  w-[35rem]  -left-[20rem]  rotate-[-25deg] transform -scale-x-100'></img>
      <img src={floralbg} className='absolute  w-[35rem]  -left-[28rem]  rotate-[-25deg] transform -scale-x-100'></img>

      


      <Carousel
        className=" rounded-3xl   w-[55rem]  "
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
  )
}

export default ImgSection