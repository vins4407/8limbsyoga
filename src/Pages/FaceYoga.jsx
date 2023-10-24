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


function FaceYoga() {
  return (



    <>
    <Headerlinks />
    <Navbar />
    <ImgSection img1={slider1} img2={slider2} img3={slider3} title={"Face Yoga"} />
    <CourseDescription description={"Introducing the transformative Face Yoga Workshop – your natural path to timeless beauty. In this one-of-a-kind experience, we explore the rejuvenating power of facial exercises, massages, and ancient beauty rituals.Why Attend:Look 5 Years Younger: Rediscover your youthful glow and turn back the clock on aging gracefully.Delay Early Signs of Aging: Unlock the secrets to maintaining your radiant skin and slowing the signs of time.Reduce Fine Lines and Wrinkles: Embrace a smoother, more youthful complexion with proven techniques.Achieve a Toned, Sculpted Face: Sculpt and define your facial contours for a vibrant, ageless look.Join us for this exclusive Face Yoga Workshop and embark on a journey to reveal your inner beauty and outer radiance."} title={"Unlock the Age-Defying Magic of Face Yoga"}/>
    <KeyTakeways title={' FACE YOGA WORKSHOP'} />


    <div className='relative  '>
        <Enquery/>
        <img src={floral} className='absolute w-16 2xl:w-96  bottom-[29rem]  -left-16 rotate-[-90deg] transform -scale-x-100'></img>

    </div>
    <Footer />
</>
    )
}

export default FaceYoga