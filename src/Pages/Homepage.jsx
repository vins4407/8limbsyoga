import React, { Component } from 'react'
import Herosection from '../Components/Homepage/herosection/Herosection'
import CardsSection from '../Components/Homepage/CardsSection/CardsSection'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Experience from '../Components/Homepage/experienceSection/Experience'
import { Testimonials } from '../Components/Homepage/testimonialSection/testimonials'
import { AiFillPhone, AiOutlineWhatsApp, } from "react-icons/ai"
import LimbsAboutSection from '../Components/Homepage/8limbsAboutSection/LimbsAboutSection'
import Headerlinks from '../Components/Comman/Headerlinks'

function Homepage() {
  return (
    <section className='relative overflow-hidden'>


<Headerlinks/>
      <Herosection />
      <LimbsAboutSection/>
    
      <CardsSection />
      <Experience />
      <Testimonials />
      <Enquery />
      <Footer />
      <div class="fixed bottom-5 right-5 z-50">
        <a href="https://wa.link/xgp0gf" target="_blank">
          <div class="bg-green-500 text-white p-4 rounded-full flex items-center justify-center transition duration-300 hover:bg-green-600">
            <AiOutlineWhatsApp class=" text-4xl" />
          </div>
        </a>
      </div>

      <div class="fixed bottom-5 left-5  z-50">
        <a href="https://wa.link/xgp0gf" target="_blank">
          <div class="bg-orange-500 text-whirete p-4 rounded-full flex items-center justify-center transition duration-300 hover:text-white hover:bg-[#17543eff]">
            Call Us!

            <AiFillPhone color='white' class=" text-4xl" />
          </div>
        </a>
      </div>


    </section>

  )
}

export default Homepage