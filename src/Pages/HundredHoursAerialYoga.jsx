import React from 'react'
import ThreeYoga from '../assets/mainassets/slider4.webp'
import yogapose from '../assets/mainassets/yogatree.png'
import NavComponent from '../Components/100HoursYogaTraining/NavComponent/NavComponent'
import BookingForm from '../Components/Comman/BookingForm'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Accomodation from '../Components/Comman/Accomodation'
import Footer from '../Components/Homepage/footer/Footer'
import floral from "../assets/mainassets/imgbin_floral-design-vignette-flower-png.png"

import CourseInfoHundredAerial from '../Components/100HoursAerialYoga/CourseInfoHundredAerial'

function HundredHoursAerialYoga() {
  return (
<>
      <NavComponent imgSrc={ThreeYoga} />
      <CourseInfoHundredAerial/>
      <div className='flex flex-col lg:flex-row 3xl:px-80  overflow-hidden items-center relative justify-around p-10 md:py-20'>
        <img className='' src={yogapose} alt="yogapose" />
        <BookingForm />
        <img src={floral} className='absolute  bottom-[25rem]  w-16 2xl:w-96 -right-16 rotate-[90deg]   transform -scale-x-100'></img>

        <img src={floral} className='absolute w-16 2xl:w-96  -bottom-[5rem]  xl:-left-16 rotate-[-90deg] transform -scale-x-100'></img>

      </div>

      <div className='relative pb-10'>
        <Enquery />
      </div>
      <Accomodation />

      <Footer />
    </>  )
}

export default HundredHoursAerialYoga