import React from 'react'
import Button from '../navbar/Button'
import yogapose from "../../../assets/yoga-pose.png"
function Enquery() {
    return (
        <div className='flex flex-col  place-items-center pt-32 px-10 md:px-20 3xl:px-80  xl:flex-row'>
            <div className='  flex-1 '>

                <h1 className=' text-5xl font-semibold  pb-8'>
                    Still Have Questions About Yoga Teacher Training at <h1 className=' text-orange-500'> 8 Limbs Yoga Studio?</h1>

                </h1>
                <h1>
                    If you're considering a yoga teacher training program at 8 Limbs Yoga Studio, it's natural to have questions. Our team is here to help address any concerns you may have and provide additional information about our programs. We understand that choosing a teacher training program is a big decision, and we want to ensure that you have all the information you need to make an informed choice.

                    Don't hesitate to reach out to us with any questions you may have about our programs, our facilities, or anything else related to your yoga teacher training journey. We're here to support you every step of the way.

                </h1>

                <div className='flex py-10 gap-5'>
                    <button href="https://wa.link/z3apxg" class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden 
                                    bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105
                                     hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full 
                                     before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
                                     before:rounded-[50px] hover:before:left-0">
                        Whatsapp
                    </button>
                    <div>
                        <p>Support Number</p>
                        <a className='text-2xl text-orange-500 font-bold' href='tel:+91 75586 60993'>+91 75586 60993</a>
                    </div>
                </div>


            </div>
            <div className=' place-items-center  '>
                <img className=' w-[30rem]  flex-1'
                    src={yogapose}
                    alt="yogapose"
                />
            </div>
        </div>
    )
}

export default Enquery