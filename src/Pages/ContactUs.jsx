import React from 'react'
import Headerlinks from '../Components/Comman/Headerlinks'
import Navbar from '../Components/Homepage/navbar/Navbar'
import Footer from '../Components/Homepage/footer/Footer'
import StudioSection from '../Components/Comman/StudioSection'
import BookingForm from '../Components/Comman/BookingForm'
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import yogalottie from '../assets/lottie/Animation-1699113003378.lottie'
function ContactUs() {
    return (
        <>
            <Headerlinks />
            <Navbar />

            <div className=' '>
            <h1 className='text-[#ff8f48ff] pt-10  text-center text-3xl xl:text-5xl   font-bold'> Contact Us !</h1>
                <div className=' flex flex-col md:flex-row px-5  py-16 justify-center md:gap-28 '>
                    <BookingForm />
                    <div >
                        <DotLottiePlayer
                            src={yogalottie}
                            autoplay
                            loop
                        >
                        </DotLottiePlayer>
                    </div>
                </div>
            </div>
            <StudioSection />
            <Footer />
        </>
    )
}

export default ContactUs