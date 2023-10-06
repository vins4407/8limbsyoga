import React from 'react'
import Button from '../navbar/Button'
import yogapose from "../../../assets/yoga-pose.png"
function Enquery() {
    return (
        <div className='flex flex-col  place-items-center pt-32 px-5 md:p-20 3xl:px-80  xl:flex-row'>
            <div className='  px-4 flex-1 '>

                <h1 className=' text-5xl font-semibold  pb-8'>
                    Still Have Questions About Yoga Teacher Training at <h1 className=' text-orange-500'> 8 Limbs Yoga Studio?</h1>

                </h1>
                <h1>
                    If you're considering a yoga teacher training program at 8 Limbs Yoga Studio, it's natural to have questions. Our team is here to help address any concerns you may have and provide additional information about our programs. We understand that choosing a teacher training program is a big decision, and we want to ensure that you have all the information you need to make an informed choice.

                    Don't hesitate to reach out to us with any questions you may have about our programs, our facilities, or anything else related to your yoga teacher training journey. We're here to support you every step of the way.

                </h1>

                <div className='flex py-10'>
                    <Button/>
                </div>


            </div>
            <div className=' place-items-center  '>
                <img className= ' w-[30rem]  flex-1'
                    src={yogapose}
                    alt="yogapose"
                />
            </div>
        </div>
    )
}

export default Enquery