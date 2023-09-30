import React, { Component } from 'react'
import Navbar from '../Components/Homepage/navbar/Navbar'
import Herosection from '../Components/Homepage/herosection/Herosection'
import CardsSection from '../Components/Homepage/CardsSection/CardsSection'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Experience from '../Components/Homepage/experienceSection/Experience'


function Homepage() {
  return (
    <section  className="  font-[Poppins] md:bg-top bg-center"    >
        <Navbar />
        <Herosection />
        <CardsSection/>
        <Enquery/>

        <Footer/>
    
    
  </section>  )
}

export default Homepage