import React from 'react'
import Footer from '../Components/Homepage/footer/Footer'
import slider1 from "../assets/mainassets/slider2.webp"

import yogapose from '../assets/mainassets/yoga-illustration.png'
import NavComponent from '../Components/100HoursYogaTraining/NavComponent/NavComponent';
import Enquery from '../Components/Homepage/EnquirySection/Enquery';
import CourseInfoOne from '../Components/100HoursYogaTraining/CourseInfo/CourseInfo';
import BookingForm from '../Components/Comman/BookingForm';
import KeyTakeways from '../Components/BrainBodyYoga/KeyTakeways';
import floral from "../assets/mainassets/imgbin_floral-design-vignette-flower-png.png"

export default function HundredHoursYoga() {
  return (
    <section className=' overflow-hidden'>
      <NavComponent  imgSrc={slider1} />

      <CourseInfoOne />
      
      <div className='flex flex-col lg:flex-row 3xl:px-80 bg-[#f9f5ecff] items-center relative justify-around p-10 md:py-20'>
        <div className='z-10 w-full h-10 absolute -top-7 bg-pageJoint  bg-repeat-x  bg-contain' />
        <div className='z-10 w-full h-10 absolute -bottom-7 bg-pageJoint  bg-repeat-x  bg-contain' />
        <img className='' src={yogapose} alt="yogapose" />
        <BookingForm />
      </div>
      <KeyTakeways title={' FACE YOGA WORKSHOP'} />

      <div className='relative '>
        <Enquery />
        <img src={floral} className='absolute w-16 2xl:w-96  bottom-[29rem]  -left-16 rotate-[-90deg] transform -scale-x-100'></img>

      </div>

      <Footer />


    </section>


  )
}
