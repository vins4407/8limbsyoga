import React from 'react'

import Courseimg1 from '../../assets/yoga2.jpeg';
import Courseimg2 from '../../assets/yoga3.jpeg';
import Courseimg3 from '../../assets/yoga4.jpg';
import Courseimg4 from '../../assets/yoga5.jpeg';

export default function Accomodation() {
  return (
    <div className=' px-5 md:px-20 ] 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>
    <h1 className='text-2xl xl:text-5xl font-semibold   pb-8'>Accomodation</h1>
    <p>Just as a healthy body thrives in a nurturing environment, our physical well-being relies on a safe and hygienic space. At the Rishikesh Yoga Haven, we understand the importance of providing an environment that fosters both inner and outer health. Our tranquil haven is nestled amidst serene landscapes, enveloped by lush green mountains and expansive fields.</p>
    <p>We've taken special care to design our accommodations with your yoga teacher training course in mind. Our spacious rooms are meticulously crafted to ensure ample ventilation, allowing fresh mountain air to flow through. We're committed to maintaining the highest standards of cleanliness and hygiene. Our dedicated management team is always at your service, ensuring your rooms are kept impeccably clean and sanitized, creating a nurturing space for your physical and spiritual growth.</p>

    <div className='flex bg-white flex-wrap py-3   justify-evenly gap-8'>
        <img className=' border-[10px] border-[#f1ece0ff]  w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg1}
            alt="yogapose"
        />   <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg2}
            alt="yogapose"
        />   <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg3}
            alt="yogapose"
        />   <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg4}
            alt="yogapose"
        />
    </div>


    <div className='flex  bg-white flex-wrap py-3  justify-evenly gap-8'>
        <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg1}
            alt="yogapose"
        />   <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg2}
            alt="yogapose"
        />   <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg3}
            alt="yogapose"
        />   <img className=' border-[10px] border-[#f1ece0ff] w-96 h-96 md:w-72 md:h-60  '
            src={Courseimg4}
            alt="yogapose"
        />
    </div>










</div>
  )
}
