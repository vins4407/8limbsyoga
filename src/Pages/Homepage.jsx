import React, { Component } from 'react'
import Herosection from '../Components/Homepage/herosection/Herosection'
import CardsSection from '../Components/Homepage/CardsSection/CardsSection'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Experience from '../Components/Homepage/experienceSection/Experience'
import { Testimonials } from '../Components/Homepage/testimonialSection/testimonials'
import { AiFillPhone, AiOutlineWhatsApp, } from "react-icons/ai"
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagram, FaMobileAlt } from 'react-icons/fa'
import { BsMailbox } from 'react-icons/bs'
import LimbsAboutSection from '../Components/Homepage/8limbsAboutSection/LimbsAboutSection'

function Homepage() {
  return (
    <section className='relative overflow-hidden'>
      <div className='text-white flex flex-col md:flex-row font-manrope justify-around items-center xl:gap-16  font-semibold bg-[#17543eff] xl:h-10 '>
        <span className='flex items-center gap-2'>
          <ImFacebook2/>
          <FaInstagram/>
        </span>
        <span className='flex  items-center gap-2'><FaMobileAlt/><a href="tel:+91 75586 60993">+91 75586 60993</a></span>
        <span className='flex items-center gap-2'><BsMailbox/><a href="mailto:richasingh1907@gmail.com>">richasingh1907@gmail.com</a></span>
 
      </div>

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