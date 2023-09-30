import React from 'react'
import yoga1 from "../../../assets/yoga-pose.png"
import yoga2 from "../../../assets/yoga2.jpeg"
import yoga3 from "../../../assets/yoga3.jpeg"
import yoga4 from "../../../assets/yoga4.jpg"
import yoga5 from "../../../assets/yoga5.jpeg"

function Experience() {
    return (
        <div className='flex flex-col place-items-center '>

            <div className='  xl:px-80  pt-32 px-4 xl:pl-80 gap-y-10 '>
                <h1 className=' text-5xl font-semibold  pb-8'>
                    8 Limbs Yoga: <h1 className=' text-orange-500'>Where your yoga journey begins</h1>
                </h1>
                <h1>
                    At 8 Limbs Yoga, we believe that yoga is more than just a physical practice. It's a journey of self-discovery and transformation. That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners.
                    Whether you're looking to improve your flexibility, reduce stress, or simply connect with your inner self, we have the perfect class for you. Our experienced and qualified teachers will guide you through each pose with care and compassion, helping you to achieve your goals and experience the true benefits of yoga.

                </h1>
            </div>
            <div className=' flex place-items-center flex-col xl:flex-row   gap-20  '>
                <div className='relative   overflow-hidden bg-cover bg-no-repeat'>
                    <img  className='transition duration-300 ease-in-out hover:scale-110' src={yoga1} />
                </div>
                <div className='flex flex-col gap-4'>

                    <div className='flex gap-4 flex-col xl:flex-row' >
                        <div class="relative   w-72 h-72 overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={yoga2}
                                class="  w-72 h-72 transition duration-300 ease-in-out hover:scale-110"
                                alt="Louvre" />
                        </div>
                        <div class="relative   w-72 h-72 overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={yoga3}
                                class="  w-72 h-72 transition duration-300 ease-in-out hover:scale-110"
                                alt="Louvre" />
                        </div>
                    </div>
                    


                    <div className='flex gap-4 flex-col xl:flex-row'>
                        <div class="relative   w-72 h-72 overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={yoga4}
                                class="  w-72 h-72 transition duration-300 ease-in-out hover:scale-110"
                                alt="Louvre" />
                        </div>
                        <div class="relative   w-72 h-72 overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={yoga5}
                                class="  w-72 h-72 transition duration-300 ease-in-out hover:scale-110"
                                alt="Louvre" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experience