import React, { Component } from 'react'
import Herosection from '../Components/Homepage/herosection/Herosection'
import CardsSection from '../Components/Homepage/CardsSection/CardsSection'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Experience from '../Components/Homepage/experienceSection/Experience'
import { Testimonials } from '../Components/Homepage/testimonialSection/testimonials'


function Homepage() {
  return (
    <>
        {/* <Navbar /> */}
        <Herosection />
        <CardsSection/>
        <Experience/>
        <Enquery/>
        <Testimonials/>
        <Footer/>
    
    </>
)
}

export default Homepage