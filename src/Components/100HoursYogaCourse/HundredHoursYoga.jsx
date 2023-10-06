import React from 'react'
import Navbar from '../Homepage/navbar/Navbar'
import Footer from '../Homepage/footer/Footer'
import Herosection from '../Homepage/herosection/Herosection'
import Logo from "../../assets/mainassets/8limbsyogalogo.png";
import slider1 from "../../assets/mainassets/slider2.webp"
import NavComponent from './NavComponent/NavComponent';
import Enquery from '../Homepage/EnquirySection/Enquery';
import CourseInfo from './CourseInfo/CourseInfo';

export default function HundredHoursYoga() {
  return (
    <>
            <NavComponent imgSrc={slider1}/>
            <CourseInfo/>
            
            <Enquery/>
            {/* <Accomodation/> */}
            <Footer/>

    
    </>

  
  )
}
