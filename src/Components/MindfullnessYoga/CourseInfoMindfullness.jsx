import React from 'react'
import Courseimg1 from '../../assets/yoga2.jpeg';
import Courseimg2 from '../../assets/yoga3.jpeg';
import Courseimg3 from '../../assets/yoga4.jpg';
import Courseimg4 from '../../assets/yoga5.jpeg';

function CourseInfoMindfullness() {
    return (
        <div className=' px-5 md:px-20 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>


            <h1 class="text-5xl font-semibold pb-4">6-Day Mindfulness Retreat: <strong className=' text-green-800'>Reconnect with Body and Soul</strong>  <strong className=' text-orange-500'>at 8LimbsYoga Studio</strong></h1>
            <h1><strong>Student Reviews:</strong> 8 Limbs Yoga Studio is rated 4.9 / 5 on Google Maps, based on 147 reviews.</h1>
            <p>Discover the perfect blend of lush greenery and awe-inspiring vistas at 8LimbsYoga Studio, where we offer an exceptional mind and body retreat program. Immerse yourself in an oasis of relaxation and revitalization, allowing your soul to rejuvenate.</p>

            <p>8LimbsYoga Studio is a meticulously organized yoga center that introduces you to an integrated approach to holistic wellness for your mind and body. Our team of experts will guide you through a transformative journey of health and lifestyle changes, leaving you with a revitalized body, mind, and soul.</p>

            <p>We all cherish the gift of health bestowed upon us by the divine, but the demands of modern life and a lack of awareness often lead us down a path of neglecting our well-being. The pressures of anxiety, stress, and anger take a toll on our bodies and minds, leading us toward unhealthy habits. It's clear that there is a pressing need to shift towards a healthier lifestyle.</p>

            <p>That's where 8LimbsYoga Studio steps in with an exciting proposition – our mind-body retreat program, inviting you to embark on a journey of resetting and rekindling the inner magic within you. This program is thoughtfully designed to nurture a tranquil mind and a thriving body. It beckons you to embrace the path of healing and optimal health, bidding farewell to unhealthy routines. We assure you that after the retreat, you'll rediscover your vitality and eagerly anticipate more restorative sessions in the future.</p>

            <div className='flex  flex-wrap py-3  justify-evenly gap-8'>
                <img className='  w-96 h-96 md:w-72 md:h-60  '
                    src={Courseimg1}
                    alt="yogapose"
                />   <img className='  w-96 h-96 md:w-72 md:h-60  '
                    src={Courseimg2}
                    alt="yogapose"
                />   <img className='  w-96 h-96 md:w-72 md:h-60  '
                    src={Courseimg3}
                    alt="yogapose"
                />   <img className='  w-96 h-96 md:w-72 md:h-60  '
                    src={Courseimg4}
                    alt="yogapose"
                />
            </div>









        </div>)
}

export default CourseInfoMindfullness