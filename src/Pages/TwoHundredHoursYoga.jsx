import React from 'react'
import NavComponent from '../Components/100HoursYogaTraining/NavComponent/NavComponent'

import slider1 from "../assets/mainassets/slider3.webp"
import yogapose from '../assets/mainassets/yoga-illustration.png'
import BookingForm from '../Components/Comman/BookingForm'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import CourseInfoTwo from '../Components/200HoursYogaTraining/CourseInfoTwo'
import Accomodation from '../Components/Comman/Accomodation'
function TwoHundredHoursYoga() {
    return (

        <>
            <NavComponent imgSrc={slider1} />

            <CourseInfoTwo/>

            <div className='flex flex-col lg:flex-row 3xl:px-80 bg-[#f9f5ecff] items-center relative justify-around p-10 md:py-20'>
                <div className='z-10 w-full h-10 absolute -top-7 bg-pageJoint  bg-repeat-x  bg-contain' />
                <div className='z-10 w-full h-10 absolute -bottom-7 bg-pageJoint  bg-repeat-x  bg-contain' />
                <img className='' src={yogapose} alt="yogapose" />
                <BookingForm/>
            </div>

            <div className='relative pb-10'>
                <Enquery/>
            </div>
            <Accomodation/>

            <Footer />
        </>
    )

}

export default TwoHundredHoursYoga