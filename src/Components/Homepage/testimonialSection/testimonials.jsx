import React from 'react'

import { Carousel } from "@material-tailwind/react";
import stars from '../../../assets/mainassets/5_stars.png'


const testimonialData = [
  {
    name: 'Michael W.',
    description:
      'I was feeling really stressed and overwhelmed at work, and I didn\'t know what to do. I decided to try yoga at 8 Limbs Yoga, and it\'s been a lifesaver. The yoga classes help me to relax and de-stress, and I always leave feeling refreshed and energized. I highly recommend 8 Limbs Yoga to anyone who is feeling stressed or overwhelmed.',
    image: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Sarah J.',
    description:
      'I had never done yoga before, but I was really impressed with the experience at 8 Limbs Yoga. The teachers are so patient and supportive, and they really helped me to learn the basics of yoga. I felt so much more relaxed and energized after my first class, and I\'m hooked! I would highly recommend 8 Limbs Yoga to anyone who is interested in trying yoga for the first time.',
    image: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Tommie Ewart',
    description:
      "I've been practicing yoga at 8 Limbs Yoga for over a year now, and I'm so glad I found this studio. The teachers are amazing, and they really challenge me to improve my practice. I've also made some great friends at 8 Limbs Yoga, and I always look forward to coming to class. I highly recommend this studio to anyone who is serious about their yoga practice.",
    image: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Charlie Howse',
    description:
      "I've been practicing yoga at 8 Limbs Yoga for over five years now, and it's changed my life. Yoga has helped me to become more mindful, more flexible, and more confident. I'm so grateful for the teachers at 8 Limbs Yoga for helping me to become the best version of myself. I highly recommend this studio to anyone who is looking for a life-changing experience.",
    image: 'https://i.pravatar.cc/100?img=4',
  },
  {
    name: 'Nevada Herbertson',
    description:
      "I've been struggling with anxiety and depression for years, and I've tried everything to manage my symptoms. But nothing has worked as well as yoga. I started taking classes at 8 Limbs Yoga a few months ago, and I've noticed a significant improvement in my mental health. I'm more calm and more optimistic than I've been in years.",
    image: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Kris Stanton',
    description:
      "I was skeptical of yoga at first, but I'm so glad I gave 8 Limbs Yoga a try. The teachers are so knowledgeable and passionate about yoga, and they really make the classes fun and engaging. I've noticed a significant improvement in my flexibility, strength, and overall well-being since I started practicing yoga at 8 Limbs Yoga. I highly recommend this studio to anyone who is looking for a challenging and rewarding yoga experience.",
    image: 'https://i.pravatar.cc/100?img=6',
  },
];




const TestimonialCard = ({ name, description, image }) => {
  return (
    <div class=" w-72 mx-auto rounded-lg bg-white border border-orange-500 p-5 hover:shadow-2xl hover:shadow-sky-400 text-gray-800 font-light mb-6">
      <div class="w-full flex mb-4 items-center">
        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src={image} alt="" />
        </div>
        <div class="flex-grow pl-3">
          <h6 class="font-bold text-sm uppercase text-gray-600">{name}</h6>
        </div>
      </div>
      <div class="w-full">
        <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{description}<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
      </div>
    </div>

  );
}

export function Testimonials() {
  return (

    <section className=' flex flex-col  py-40  justify-center  items-center '>

      <div class="text-center  mx-auto">
        <h1 class="text-4xl md:text-7xl font-bold mb-5 text-gray-600">What people are saying.</h1>
        <div class="text-center mb-10">
          <span class="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
          <span class="inline-block w-40 h-1 rounded-full bg-orange-500"></span>
          <span class="inline-block w-3 h-1 rounded-full bg-orange-500 ml-1"></span>
          <span class="inline-block w-1 h-1 rounded-full bg-orange-500 ml-1"></span>
        </div>
      </div>



      <div className='  h-fit  w-[20rem] xl:px-80 md:w-fit   '>
        <Carousel transition={{ duration: 1 }} autoplay={true}
          autoplayDelay={8000}
          loop={true} className=" bg-[#dae1efff] text-[#17543eff] font-bold rounded-xl">

          <span className='justify-center items-center flex flex-col  pt-5'>
            <img className='w-40 z-30 ' src={stars} />
            <h1 className=' text-center  px-20 pt-10 '>"I was feeling really stressed and overwhelmed at work, and I didn\'t know what to do. I decided to try yoga at 8 Limbs Yoga, and it\'s been a lifesaver. The yoga classes help me to relax and de-stress, and I always leave feeling refreshed and energized. I highly recommend 8 Limbs Yoga to anyone who is feeling stressed or overwhelmed."</h1>
            <h1 className=' text-center  py-10 '>- Michael W.</h1>
          </span>
          <span className='justify-center items-center flex flex-col  pt-5'>
            <img className='w-40 z-30 ' src={stars} />
            <h1 className=' text-center  px-20 pt-10 '>"I was feeling really stressed and overwhelmed at work, and I didn\'t know what to do. I decided to try yoga at 8 Limbs Yoga, and it\'s been a lifesaver. The yoga classes help me to relax and de-stress, and I always leave feeling refreshed and energized. I highly recommend 8 Limbs Yoga to anyone who is feeling stressed or overwhelmed."</h1>
            <h1 className=' text-center  py-10 '>- Michael W.</h1>
          </span>
          <span className='justify-center items-center flex flex-col  pt-5'>
            <img className='w-40 z-30 ' src={stars} />
            <h1 className=' text-center  px-20 pt-10 '>"I was feeling really stressed and overwhelmed at work, and I didn\'t know what to do. I decided to try yoga at 8 Limbs Yoga, and it\'s been a lifesaver. The yoga classes help me to relax and de-stress, and I always leave feeling refreshed and energized. I highly recommend 8 Limbs Yoga to anyone who is feeling stressed or overwhelmed."</h1>
            <h1 className=' text-center  py-10 '>- Michael W.</h1>
          </span>

        </Carousel>
      </div>
    </section>

  );
}