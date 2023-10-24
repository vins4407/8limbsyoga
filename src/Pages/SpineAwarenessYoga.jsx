import React from 'react'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Headerlinks from '../Components/Comman/Headerlinks'
import Navbar from '../Components/Homepage/navbar/Navbar'
import ImgSection from '../Components/BrainBodyYoga/ImgSection'
import slider1 from "../assets/mainassets/slider1.webp"
import slider2 from "../assets/mainassets/slider2.webp"
import slider3 from "../assets/mainassets/slider3.webp"
import CourseDescription from '../Components/BrainBodyYoga/CourseDescription'
import floral from "../assets/mainassets/imgbin_floral-design-vignette-flower-png.png"
import KeyTakeways from '../Components/BrainBodyYoga/KeyTakeways'

function SpineAwarenessYoga() {
    return (
        <>
            <Headerlinks />
            <Navbar />
            <ImgSection img1={slider1} img2={slider2} img3={slider3} title={"SPINE AWARENESS AND CARE YOGA"} />
            <CourseDescription   description={"Introducing our Spine Awareness and Care Workshop, a holistic exploration of your body's core. Your spine is the powerhouse of your energy centers, influencing every aspect of your well-being. In this one-of-a-kind workshop, we'll venture into the art of maintaining a strong and supple spine, unlocking the key to a more vibrant life. Your spine is your lifeline, and its health is paramount to your overall vitality. Don't delay your journey to an active and robust spine. Enroll in our workshop now and take the first step toward a healthier, more vibrant you."} title={"Unlock the Secrets of a Healthy Spine: Join Us for a Journey to Vitality"} />
            <KeyTakeways title={'SPINE AWARENESS AND CARE YOGA'} />


            <div className='relative  '>
                <Enquery/>
                <img src={floral} className='absolute w-16 2xl:w-96  bottom-[29rem]  -left-16 rotate-[-90deg] transform -scale-x-100'></img>

            </div>
            <Footer />
        </>
        )
}

export default SpineAwarenessYoga