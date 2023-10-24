import React from 'react'
import Courseimg1 from '../../../assets/yoga2.jpeg';
import Courseimg2 from '../../../assets/yoga3.jpeg';
import Courseimg3 from '../../../assets/yoga4.jpg';
import Courseimg4 from '../../../assets/yoga5.jpeg';

export default function CourseInfoOne() {
    return (
        <div className=' px-5 md:px-20 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>
            <h1 className=' text-5xl font-semibold  pb-8'>100 Hours Yoga Teacher Training Course</h1>
            <h1 className='  text-green-800 text-xl font-bold'>Duration: 100 Hours | Course Fee: Shared $500 | Private $650 | Training Style: Multi-Style Yoga TTC</h1>
            <h1><strong>Student Reviews:</strong> 8 Limbs Yoga Studio is rated 4.8 / 5 on Google Maps, based on 85 reviews.</h1>
            <p>8 Limbs Yoga Studio offers a comprehensive <strong>100 Hour Multi Style Yoga Teacher Training</strong> Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
            <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
            <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>

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

            <p>8 Limbs Yoga Studio provides clean and comfortable accommodation for all students. The rooms are equipped with all the necessary amenities to make your stay comfortable and convenient. The accommodations are located in Vasai, which is a quiet and peaceful area.</p>
            <p>8 Limbs Yoga Studio provides three healthy and delicious vegetarian meals a day, prepared with organic and locally sourced ingredients. The sattvic diet is an essential aspect of yoga practice that promotes physical, mental, and spiritual well-being.</p>
            <p>8 Limbs Yoga Studio is a leading yoga studio in Vasai, India, with a team of experienced and certified yoga teachers. The studio offers a variety of yoga classes for all levels, from beginners to advanced. 8 Limbs Yoga Studio is committed to providing students with a high-quality yoga education and experience.</p>
            

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

            <p>Upon completion of the course, students receive a certificate of completion from Yoga Alliance USA, which is a globally recognized credential that gives you a competitive edge in the yoga industry. The certification also makes you eligible to register with Yoga Alliance as Registered Yoga Teachers (RYT), which is an internationally recognized credential.</p>
            <p>The 100 Hour Multi Style Yoga Teacher Training Course at 8 Limbs Yoga Studio is a transformative experience that deepens your understanding of yoga and prepares you to become a competent and confident yoga teacher. The course curriculum, experienced teachers, serene location, and nutritious food make it an ideal choice for anyone looking to embark on their yoga teacher training journey.</p>
            <p>If you are interested in learning more about the 100 Hour Multi Style Yoga Teacher Training Course at 8 Limbs Yoga Studio, please visit our website or contact us today.</p>



        </div>
    )
}
