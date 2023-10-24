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

function BrainBodyYoga() {
    return (
        <>
            <Headerlinks />
            <Navbar />
            <ImgSection img1={slider1} img2={slider2} img3={slider3} title={"BRAIN BODY CONNECT"}/>
            <CourseDescription description={" Welcome to the Brain Body Connect Workshop, a transformative journey to unravel the intricacies of the mind and the vital connection between brain and body. We're here to delve into the realm of psychological well-being, helping you comprehend the profound importance of mental health. In this immersive workshop, we'll embark on a fascinating exploration of the brain, the CPU of our body. Together, we'll decipher the role of neurotransmitters and how they directly influence our brain's functioning. You'll gain a deep understanding of how your thoughts, moods, behaviors, and emotions significantly impact your psychological well-being, often leading to conditions such as depression, anxiety, and a myriad of other disorders." } title={"Unlock the Power of Your Mind: Join the Brain Body Connect Workshop"}/>
            <KeyTakeways title={'BRAIN BODY CONNECT YOGA'}/>

     
            <div className='relative  '>
                <Enquery />
                <img src={floral} className='absolute w-16 2xl:w-96  bottom-[29rem]  -left-16 rotate-[-90deg] transform -scale-x-100'></img>

            </div>
            <Footer />
        </>)
}

export default BrainBodyYoga