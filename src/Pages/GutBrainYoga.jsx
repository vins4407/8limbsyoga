import React from 'react'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import Footer from '../Components/Homepage/footer/Footer'
import Headerlinks from '../Components/Comman/Headerlinks'
import Navbar from '../Components/Homepage/navbar/Navbar'
import ImgSection from '../Components/BrainBodyYoga/ImgSection'
import slider1 from "../assets/mainassets/slider4.webp"
import slider2 from "../assets/mainassets/slider2.webp"
import slider3 from "../assets/mainassets/slider3.webp"
import CourseDescription from '../Components/BrainBodyYoga/CourseDescription'
import floral from "../assets/mainassets/imgbin_floral-design-vignette-flower-png.png"
import KeyTakeways from '../Components/BrainBodyYoga/KeyTakeways'
import Accomodation from '../Components/Comman/Accomodation'



function GutBrainYoga() {
  return (


    <>
    <Headerlinks />
    <Navbar />
    <ImgSection img1={slider1} img2={slider2} img3={slider3} title={"GUT AND BRAIN CONNECT WORKSHOP"} />
    <CourseDescription description={"Prepare to embark on an extraordinary voyage of self-discovery with our Gut-Brain Connection Workshop. In this enlightening experience, we dive deep into the profound connection between your gut and your brain, uncovering the hidden mysteries of your body's intricate wisdom. Explore how the foods you choose have a profound impact on your health and your body's susceptibility to various conditions. Delve into the fascinating world of neuropeptides and neurotransmitters. Your gut is a key player, producing metabolites that directly influence the functionality of your brain. Learn how the vagus nerve connects your gut to your brain, affecting your emotional well-being, resilience against anxiety and depression, aging, gut health, the release of vital brain chemicals, and even your response to allergens. Did you know? Every one of us hosts a unique ecosystem of microbes within our bodies, making us wonderfully distinct. Join us for an immersive workshop designed to revolutionize your understanding of your body. The Gut-Brain Connection Workshop is your gateway to unlocking the potential of your body's inner wisdom, promoting optimal health and holistic well-being. Don't miss this opportunity to embark on a journey of self-discovery, empowerment, and transformation. Get ready for a workshop that's not just about knowledge—it's about transformation and empowerment."} title={"The Gut-Brain Connection: Nourish Your Mind, Transform Your Health"}/>
    <KeyTakeways title={'GUT-AND-BRAIN-CONNECT-WORKSHOP'} />


    <div className='relative  '>
        <Enquery/>
        <img src={floral} className='absolute w-16 2xl:w-96  bottom-[29rem]  -left-16 rotate-[-90deg] transform -scale-x-100'></img>

    </div>
    <Accomodation/>
    <Footer />
</>  )
}

export default GutBrainYoga