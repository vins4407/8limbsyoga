import React, { Component } from 'react'
import Navbar from '../Components/Homepage/navbar/Navbar'
import Herosection from '../Components/Homepage/herosection/Herosection'
import CardsSection from '../Components/Homepage/CardsSection/CardsSection'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Experience from '../Components/Homepage/experienceSection/Experience'


function Homepage() {
  return (
    <>
        <Navbar />
        <Herosection />
        <CardsSection/>
        <Experience/>
        <Enquery/>

        <Footer/>
    
    </>
)
}

export default Homepage