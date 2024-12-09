import React from 'react';
import Centerbg from '../../../assets/mainassets/imgbin_floral-design-green-font-png.png';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import yogaLottie from '../../../assets/lottie/Animation-1697991889977.lottie';

function LimbsAboutSection() {
  return (
    <div className="py-10 bg-[#fcfcfc]">
   
      <div className="flex flex-col">
        
          <h1 className="text-3xl font-semibold pb-8">
            Discover Harmony and Wellness at
            <br/>
            <span className="text-[#cc7722]">8 Limbs Yoga Studio</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-900">
          At 8 Limbs Yoga, we believe that yoga is more than just a physical practice. It's a journey of self-discovery and transformation. That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. 
          </p>
        

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row gap-20 pt-10 items-center">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-y-4 text-sm text-center">
            <h1 className="rounded-2xl p-2 bg-[#cc7722] text-white ">
              Immerse yourself in the wisdom of our world-class instructors.
            </h1>
            <h1 className="rounded-2xl p-2 bg-[#cc7722] text-white">
              Follow the path to becoming a certified yoga teacher.
            </h1>
            <h1 className="rounded-2xl p-2 bg-[#cc7722] text-white">
              Unplug with us on off-site retreats guided by seasoned yoga masters.
            </h1>
          </div>

          {/* Center Image with Animation */}
          <div className="relative w-[185px] h-[185px] flex-shrink-0">
            <img
              className="absolute inset-0 w-full h-full object-contain"
              src={Centerbg}
              alt="Floral Background"
            />
            <DotLottiePlayer
              src={yogaLottie}
              autoplay
              loop
              style={{ width: '185px', height: '185px' }}
            />
          </div>

          <div className="flex flex-1 flex-col gap-y-4 text-sm text-center">
            <h1 className="rounded-2xl p-2 bg-[#cc7722] text-white ">
              Immerse yourself in the wisdom of our world-class instructors.
            </h1>
            <h1 className="rounded-2xl p-2 bg-[#cc7722] text-white">
              Follow the path to becoming a certified yoga teacher.
            </h1>
            <h1 className="rounded-2xl p-2 bg-[#cc7722] text-white">
              Unplug with us on off-site retreats guided by seasoned yoga masters.
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LimbsAboutSection;
