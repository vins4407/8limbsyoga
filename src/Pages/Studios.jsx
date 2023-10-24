import React from 'react'
import Headerlinks from '../Components/Comman/Headerlinks'
import Navbar from '../Components/Homepage/navbar/Navbar'
import Footer from '../Components/Homepage/footer/Footer'
import limbs1 from '../assets/mainassets/hero3.jpg'
import limbs2 from '../assets/mainassets/hero.jpg'
import floral from "../assets/mainassets/imgbin_floral-design-vignette-flower-png.png"
import floralbg from '../assets/mainassets/imgbin_wedding-green-png.png'


import Centerbg from '../assets/mainassets/imgbin_wedding-green-png.png'
import Enquery from '../Components/Homepage/EnquirySection/Enquery'


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
                                <h1 className=' text-lg'>Harmonious Haven:</h1>
                                Our studios are more than spaces; they are serene sanctuaries designed to inspire. Step inside, and you'll be embraced by soothing colors and natural elements, transcending the ordinary
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
                            <h1 className=' text-center bg-[#f9f5ecff] z-30 w-[15rem] py-10 px-3 rounded-full text-xs'>
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
                                <h1 className=' text-lg'>Harmonious Haven:</h1>
                                Our studios are more than spaces; they are serene sanctuaries designed to inspire. Step inside, and you'll be embraced by soothing colors and natural elements, transcending the ordinary
                            </h1>
                        </div>
                    </div>

                </div>


            </div>

            <div className=' flex flex-col justify-center relative bg-[#dbefebff] items-center overflow-hidden  gap-10 py-20'>
                <h1 className='text-[#17543eff] text-3xl xl:text-5xl   font-bold'> Our Branches</h1>
                <img src={floralbg} className='absolute  w-[35rem]  -left-[20rem]  rotate-[-25deg] transform -scale-x-100'></img>
                <img src={floralbg} className='absolute  w-[35rem]  -left-[28rem]  rotate-[-25deg] transform -scale-x-100'></img>
                <img src={floralbg} className='absolute  w-[35rem]  -right-[20rem]  rotate-[-25deg] transform -scale-x-100'></img>
                <img src={floralbg} className='absolute  w-[35rem]  -right-[28rem]  rotate-[-25deg] transform -scale-x-100'></img>


                <div className=' flex flex-col xl:flex-row justify-center gap-20 items-center'>

                    <div class="relative group  cursor-pointer group overflow-hidden  text-gray-50 h-72 w-72  rounded-2xl hover:duration-700 duration-700">
                        <div class="w-72 h-72 bg-lime-400 text-gray-800">
                            <div class="flex flex-row justify-between">
                                <img src={limbs1}></img>
                            </div>
                        </div>
                        <div class="absolute bg-gray-50 -bottom-24 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span class="text-lime-400 font-bold text-sm">Studio 1</span>
                            <span class="text-gray-800 font-bold text-4xl">8Limbs Vasai</span>
                            <p class="text-black ">Shop number 5,6,7 , yashwant park Vasai, near bank of India, Nalasopara East, Mumbai, Maharashtra 401209</p>
                        </div>
                    </div>


                    <div class="relative group  cursor-pointer group overflow-hidden  text-gray-50 h-72 w-72  rounded-2xl hover:duration-700 duration-700">
                        <div class="w-72 h-72 bg-lime-400 text-gray-800">
                            <div class="flex flex-row justify-between">
                                <img src={limbs2}></img>
                            </div>
                        </div>
                        <div class="absolute bg-gray-50 -bottom-24 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span class="text-lime-400 font-bold text-sm">Studio 1</span>
                            <span class="text-gray-800 font-bold text-4xl">8Limbs Evershine</span>
                            <p class="text-black">Shop number 5,6,7 , yashwant park Vasai, near bank of India, Nalasopara East, Mumbai, Maharashtra 401209</p>
                        </div>
                    </div>

                </div >


            </div >


            <Enquery />

            <Footer />

        </>
    )
}

export default Studios