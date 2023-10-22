import React from 'react'
import Centerbg from '../../../assets/mainassets/imgbin_floral-design-green-font-png.png'
import Lottie from 'lottie-react';
import CenterLottie from '../../../assets/lottie/Animation - 1697991889977.json'

function LimbsAboutSection() {
  return (
    <section className=' py-24  3xl:px-80  font-manrope  px-4 bg-[#fcfcfc]'>

      {/* <div className='z-10 w-full h-10 absolute -top-8  bg-pageJoint  bg-repeat-x bg-contain' /> */}

      <div className='flex p-5  flex-col backdrop-blur-[2px]  place-items-center items-center '>

        <div className='  gap-y-10 '>
          <h1 className=' text-5xl font-semibold  pb-8'>
            Discover Harmony and Wellness at <h1 className=' text-[#17543e]'>8 Limbs Yoga Studio</h1>
          </h1>
          <h1>
            Step into a world of holistic wellness and self-discovery at 8 Limbs Yoga Studio. Our studio is a sacred space where we invite you to explore the transformative power of yoga. Whether you're taking your first yoga class or seeking to deepen your practice, we're here to support your journey.

            At 8 Limbs, we believe that yoga is not just a physical practice; it's a gateway to inner harmony and balance. Our team of experienced instructors is dedicated to helping you connect with your body, mind, and spirit, releasing stress and embracing a life filled with enthusiasm and vitality.

            Join our vibrant community and start your personal yoga journey. Whether you aspire to be a dedicated practitioner or a certified instructor, we're committed to providing you with the guidance and support you need to flourish.

          </h1>

        </div>

        <div className=' text-white flex place-items-center backdrop-blur-[2px] pt-10 flex-col xl:flex-row   gap-20  '>

          <div className=' flex flex-1 flex-col gap-y-4 '>
            
              <h1 className=' rounded-full p-5 bg-[#9eb1d0]'>Immerse yourself in the wisdom of our world-class instructors.</h1>
              <h1 className=' rounded-full p-5 bg-[#8abdb6ff]'>Follow the path to becoming a certified yoga teacher.</h1>
              <h1 className=' rounded-full p-5 bg-[#b6cd61]'>Unplug with us on off-site retreats guided by seasoned yoga masters.</h1>

          </div>

          <div className=' relative'>
          <img className=' absolute   '  src={Centerbg}></img>
            <Lottie
              animationData={CenterLottie} // Replace with your animation JSON data
              loop
              autoplay
            />

          </div>
          <div className=' flex flex-1 flex-col gap-y-4 '>
          <h1 className=' rounded-full p-5 bg-[#b6cd61]'>Enhance your practice through a variety of online workshops.</h1>
          <h1 className=' rounded-full p-5 bg-[#9eb1d0]'>Be part of a community that fosters a strong sense of belonging, support, and growth.</h1>
          <h1 className=' rounded-full p-5 bg-[#8abdb6ff]'>Join us for off-site retreats with spiritual yoga trainers, offering a deeper connection with yourself.</h1>

          </div>
        </div>
      </div>


      {/* <div className='z-10 w-full h-10 absolute -bottom-7 bg-pageJoint  bg-repeat-x bg-contain' /> */}
    </section>

  )
}

export default LimbsAboutSection