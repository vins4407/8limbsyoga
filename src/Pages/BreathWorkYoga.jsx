import React from 'react'
import ThreeYoga from '../assets/mainassets/slider4.webp'
import yogapose from '../assets/mainassets/yoga-illustration.png'
import NavComponent from '../Components/100HoursYogaTraining/NavComponent/NavComponent'
import BookingForm from '../Components/Comman/BookingForm'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Accomodation from '../Components/Comman/Accomodation'
import Footer from '../Components/Homepage/footer/Footer'
import CourseInfoBreadth from '../Components/BreathWorkYoga/CourseInfoBreadth'


function BreathWorkYoga() {
  return (
    <>
    <NavComponent imgSrc={ThreeYoga} />
    <CourseInfoBreadth/>
    
    <div className='flex flex-col lg:flex-row 3xl:px-80 bg-[#f9f5ecff] items-center relative justify-around p-10 md:py-20'>
      <div className='z-10 w-full h-10 absolute -top-7 bg-pageJoint  bg-repeat-x  bg-contain' />
      <div className='z-10 w-full h-10 absolute -bottom-7 bg-pageJoint  bg-repeat-x  bg-contain' />
      <img className='' src={yogapose} alt="yogapose" />
      <BookingForm />
    </div>

    <div className='relative pb-10'>
      <Enquery />
    </div>
    <Accomodation />

    <Footer />
  </>
  )
}

export default BreathWorkYoga