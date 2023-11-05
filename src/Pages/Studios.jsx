import React from 'react'
import Headerlinks from '../Components/Comman/Headerlinks'
import Navbar from '../Components/Homepage/navbar/Navbar'
import Footer from '../Components/Homepage/footer/Footer'
import Centerbg from '../assets/mainassets/imgbin_wedding-green-png.png'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'
import StudioSection from '../Components/Comman/StudioSection'


function Studios() {
    return (

        <>
            <Headerlinks />
            <Navbar />


            <div className=' flex flex-col px-6 2xl:px-[28rem]  gap-8 py-20  overflow-clip items-center justify-center'>
                <h1 className=' text-[#17543eff] text-3xl  xl:text-5xl font-bold'>Journey to Harmony: Your Sanctuary at 8 Limbs Yoga Studio</h1>
                <p>Welcome to 8 Limbs Yoga Studio, where we envision yoga as a transformative odyssey, a path to unity within yourself and with the world around you. Our studios grace the landscape, each a haven for your body, mind, and spirit.</p>

                <div className=' flex flex-col xl:flex-row gap-y-20 xl:gap-[15rem] py-10'>

                    <div className='relative'>
                        <div className='z-20 w-[25rem] -top-14 -left-16 absolute' style={{ clipPath: 'circle(50%)' }}>
                            <img src={Centerbg} className='w-full h-full object-cover' alt='Background' />
                        </div>
                        <div className='z-30 w-[15rem] py-8 px-3  rounded-full text-xs '>
                            <h1 className=' text-center bg-[#f9f5ecff] z-30 w-[15rem] py-10 px-3 rounded-full text-xs'>
                                <h1 className='  text-lg'>Soulful Guides:</h1>
                                Discover our dedicated team of experienced instructors, who bring both expertise and genuine care to guide you on your yoga journey. They provide personalized attention and unwavering support as you delve deeper into your practice
                            </h1>
                        </div>
                    </div>



                    <div className='relative'>
                        <div className='z-20 w-[25rem] -top-14 -left-16 absolute' style={{ clipPath: 'circle(50%)' }}>
                            <img src={Centerbg} className='w-full h-full object-cover' alt='Background' />
                        </div>
                        <div className='z-30 w-[15rem] py-8 px-3  rounded-full text-xs '>
                            <h1 className=' text-center bg-[#dbefebff] z-30 w-[15rem] py-10 px-3 rounded-full text-xs'>
                                <h1 className=' text-lg'>Harmonious Haven:</h1>
                                Our studios are more than spaces; they are serene sanctuaries designed to inspire. Step inside, and you'll be embraced by soothing colors and natural elements, transcending the ordinary
                            </h1>
                        </div>
                    </div>



                    <div className='relative'>
                        <div className='z-20 w-[25rem] -top-14 -left-16 absolute' style={{ clipPath: 'circle(50%)' }}>
                            <img src={Centerbg} className='w-full h-full object-cover' alt='Background' />
                        </div>
                        <div className='z-30 w-[15rem] py-8 px-3  rounded-full text-xs '>
                            <h1 className=' text-center bg-[#f9f5ecff] z-30 w-[15rem] py-10 px-3 rounded-full text-xs'>
                                <h1 className=' text-lg'>Community Connection:</h1>
                                At 9 Limbs Yoga Studio, we cherish the strength of community. Our sacred spaces unite kindred spirits to uplift and empower each other. Connect with fellow yogis, build genuine connections, and feel the deep sense of belonging within our vibrant yoga family.
                            </h1>
                        </div>
                    </div>



                </div>

                <div className=' flex flex-col xl:flex-row gap-y-20 xl:gap-[15rem] py-10'>
                    <div className='relative'>
                        <div className='z-20 w-[25rem] -top-14 -left-16 absolute' style={{ clipPath: 'circle(50%)' }}>
                            <img src={Centerbg} className='w-full h-full object-cover' alt='Background' />
                        </div>
                        <div className='z-30 w-[15rem] py-8 px-3  rounded-full text-xs '>
                            <h1 className=' text-center bg-[#dae1efff] z-30 w-[15rem] py-10 px-3 rounded-full text-xs'>
                                <h1 className=' text-lg'>Enlightening Journeys:</h1>
                                Take your practice to the next level with our specialized workshops and immersive retreats. Dive into unique subjects, learn from respected guest instructors, and embark on transformative experiences to elevate your yoga journey to new heights.
                            </h1>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='z-20 w-[25rem] -top-10 -left-16 absolute' style={{ clipPath: 'circle(50%)' }}>
                            <img src={Centerbg} className='w-full h-full object-cover' alt='Background' />
                        </div>
                        <div className=' z-30 w-[15rem] py-8 px-3  rounded-full text-xs '>
                            <h1 className='   text-center bg-[#cbdebdff] z-30 w-[15rem] py-10 px-5 rounded-full text-xs'>
                                <h1 className=' text-lg'>Comprehensive Curriculum:</h1>
                                Explore a comprehensive program that encompasses asanas, pranayama, meditation, yoga philosophy, anatomy, teaching methodology, and more. Develop a holistic understanding of yoga and enhance your teaching skills
                            </h1>
                        </div>
                    </div>

                </div>


            </div>
            <StudioSection/>

        


            <Enquery />

            <Footer />

        </>
    )
}

export default Studios