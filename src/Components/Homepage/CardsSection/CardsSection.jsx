import React from 'react'
import { CardDefault } from './card'

function CardsSection() {
    return (
        <div className="flex flex-col  justify-center py-10  gap-8" >
            <div className='xl:py-32  xl:px-80 '>

                <h1 className=' text-2xl font-semibold  pb-8'>
                Transform Your Life with Authentic & Premium Yoga Teacher Training at 8 Limbs Yoga Studio
                </h1>
                <h1>
                Are you passionate about yoga and want to share your love of the practice with others? Consider becoming a yoga teacher at 8 Limbs Yoga Studio, a leading yoga school in Bhiwandi, India.

                Our comprehensive teacher training program is led by experienced and certified yoga teachers who will guide you on a journey of self-discovery and transformation. You will learn all aspects of yoga, including:

                Asanas (yoga postures)
                Pranayama (breathwork)
                Meditation
                Yoga philosophy
                Anatomy
                Teaching methodology
                In addition to the core curriculum, we also offer specialized modules in Aerial Yoga, Yoga for Beginners, and Yoga for Special Populations.
                </h1>

            </div>


            <div className='flex flex-wrap justify-center px-40 gap-8'>

                <CardDefault/>
                <CardDefault/>
                <CardDefault/>
                <CardDefault/>

                <CardDefault/>
                <CardDefault/>

            </div>
        </div>
    )
}

export default CardsSection