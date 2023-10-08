import React from 'react'
import Courseimg1 from '../../assets/yoga2.jpeg';
import Courseimg2 from '../../assets/yoga3.jpeg';
import Courseimg3 from '../../assets/yoga4.jpg';
import Courseimg4 from '../../assets/yoga5.jpeg';



function CourseInfoStress() {
    return (
        <div className=' px-5 md:px-20 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>
            <h1 class="text-5xl font-semibold pb-4">Reclaim Peace and Balance: <strong className=' text-green-800'>Stress-Free</strong> Training at <strong className=' text-orange-500'>8LimbsYoga Studio</strong></h1>
            <h1><strong>Student Reviews:</strong> 8 Limbs Yoga Studio is rated 4.9 / 5 on Google Maps, based on 147 reviews.</h1>

            <p>Modern life often leads to hectic schedules and stressful days, leaving us feeling overwhelmed and irritable. The daily grind can take a toll on our well-being due to factors like sitting postures, multitasking, work pressure, long hours at a computer, irregular eating habits, and more. At times, we all need a break and a dose of comfort both at home and in the office.</p>

            <p>8LimbsYoga Studio offers a holistic solution to corporate stress, helping you transform your mood from dull to joyful. Our Stress-Free Training program provides access to a world of healthy and peaceful healing solutions for all your corporate-related issues. We offer a range of corporate yoga classes that come with numerous benefits, including:</p>

            <ul className=' flex flex-col gap-4'>
                <li><strong>Experienced Professionals:</strong> Our dedicated instructors bring years of experience to the table, ensuring you receive expert guidance.</li>
                <li><strong>Flexible Timings:</strong> Enjoy daily yoga classes with flexible timings that fit seamlessly into your busy schedule.</li>
                <li><strong>Stress Reduction Techniques:</strong> Learn effective stress reduction and meditation techniques to regain your inner balance.</li>
                <li><strong>Yoga for Well-Being:</strong> Discover yoga practices tailored to reduce stress, improve health, and promote overall well-being.</li>
                <li><strong>Postural Benefits:</strong> Gain insights into various postures that enhance posture, flexibility, and vitality.</li>
            </ul>

            <p>Our Stress-Free Training at 8LimbsYoga Studio aims to introduce you to the fundamental principles of yoga and seamlessly integrate them into your daily routine. This program offers a comprehensive understanding of yoga's various facets and highlights its significant benefits in everyday life. Our experienced instructors ensure that participants progress from basic to advanced levels, making their journey towards a stress-free life more accessible and enjoyable.</p>

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

export default CourseInfoStress