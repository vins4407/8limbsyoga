import React from 'react'
import { CardDefault } from './card'
import cardimg from "../../../assets/yoga4.jpg"



const cardData = [
    {
      title: '100 Hours Yoga Teacher Training',
      description: 'A comprehensive program for aspiring yoga teachers...',
      image: 'image1.jpg', // Replace with your image URL
      link: '/100-hour-yoga-teacher-training',
    },
    // Add more card data as needed
  ];
  
function CardsSection() {
    return (
        <div className="flex flex-col  justify-center py-10  pb-40 p-5  gap-16" >
            <div className=' 3xl:pt-24  3xl:px-80 px-5  '>

                <h1 className=' text-5xl font-semibold  pb-8'>
                    Transform Your Life with Authentic & Premium Yoga Teacher Training at<h1 className=' text-orange-500'> 8 Limbs Yoga Studio</h1>
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


            <div className='flex flex-wrap justify-center 3xl:px-40 gap-8'>

                <CardDefault />
                <CardDefault />
                <CardDefault />
                <CardDefault />

                <CardDefault />
                <CardDefault />

            </div>
        </div>
    )
}

export default CardsSection