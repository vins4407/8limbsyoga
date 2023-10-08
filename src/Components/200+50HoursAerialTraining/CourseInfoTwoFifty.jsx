import React from 'react'

import Courseimg1 from '../../assets/yoga2.jpeg';
import Courseimg2 from '../../assets/yoga3.jpeg';
import Courseimg3 from '../../assets/yoga4.jpg';
import Courseimg4 from '../../assets/yoga5.jpeg';

function CourseInfoTwoFifty() {
    return (
        <div className=' px-5 md:px-20 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>
            <h1 className=' text-5xl font-semibold  pb-8'>200 Hrs Yoga Teacher Training with 50 Hrs Aerial Yoga Certification at 8 Limbs Yoga Studio in Vasai, Mumbai</h1>
            <h1 className='  text-green-800 text-xl font-bold'>Duration - 29 Days | Course Fee - Shared $1000 : Private $1200 | Certification - Yoga Alliance USA</h1>
            <strong>Training Style - Multi Style Yoga TTC</strong>
            <h1><strong>Student Reviews:</strong>8 Limbs Yoga Studio Rated 4.9 / 5 based on 147 reviews. - @ Google Maps</h1>


            <p>Embark on a transformative journey with our 200-Hour Yoga Teacher Training, featuring an additional 50-Hour Aerial Yoga Certification, at the tranquil 8 Limbs Yoga Studio in Vasai, Mumbai. Enhance your yoga skills, deepen your practice, and gain expertise in aerial yoga. Immerse yourself in the vibrant atmosphere of Mumbai as you learn from experienced instructors and connect with like-minded individuals. This comprehensive training program will empower you to become a certified yoga instructor, ready to inspire and guide others on their yoga path. Join us at 8 Limbs Yoga Studio in Vasai for this life-changing experience and unlock your full potential as a yoga teacher.</p>
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

            <h1 className=' text-4xl font-semibold '>  Elevate Your Practice with 8 Limbs Yoga Studio's Transformative Yoga Teacher Training</h1>

            <p>Are you ready to embark on a life-changing journey and unlock your full potential as a certified yoga instructor? At 8 Limbs Yoga Studio in the vibrant city of Vasai, Mumbai, we invite you to immerse yourself in our comprehensive Yoga Teacher Training program. Our training is designed to help you deepen your practice, broaden your understanding of yoga philosophy, and empower you with the skills to become an inspiring yoga teacher.</p>

            <p className=' text-green-800'><strong>Experience the Vibrancy of Mumbai</strong></p>

            <p>Set against the backdrop of the bustling metropolis of Mumbai, our yoga teacher training offers a unique blend of urban energy and spiritual growth. As you delve into the ancient teachings and practices of yoga, you'll find inspiration in the heartbeat of the city. Mumbai is known for its diversity and dynamism, making it the perfect setting for your transformational journey.</p>

            <p className=' text-green-800'><strong>Comprehensive Curriculum for Yogic Mastery</strong></p>

            <p>Our program covers a wide spectrum of topics, including yoga philosophy, asanas, pranayama, meditation, anatomy, and teaching methodologies. You'll receive expert guidance from our experienced instructors who are dedicated to your growth and development as a yoga teacher. We prioritize personalized attention, ensuring that you receive the support you need to flourish on your path.</p>

            <p className=' text-green-800'><strong>Unlock Your Potential</strong></p>

            <p>By the end of the training, you'll emerge with not only a deeper practice but also the confidence and knowledge to lead yoga classes and share your passion with others. Our internationally recognized certification will open doors to exciting teaching opportunities and personal growth, allowing you to inspire and uplift others on their yoga journey.</p>

            <p className=' text-green-800'><strong>Immerse Yourself in Vasai's Unique Charm</strong></p>

            <p>Vasai, nestled in the heart of Mumbai, offers a blend of the old and the new. You'll find historical sites, modern amenities, and a rich cultural tapestry that will enrich your experience. Explore the vibrant streets, relax on the beaches, and connect with a diverse community of like-minded individuals who share your love for yoga.</p>

            <p className=' text-green-800'><strong>Join Us for a Transformative Experience</strong></p>

            <p>Enroll now at 8 Limbs Yoga Studio and embark on a life-changing yoga training experience in the vibrant city of Vasai, Mumbai. Elevate your practice, gain valuable teaching skills, and create lasting memories in the heart of this remarkable destination. Don't miss this opportunity to transform your life and become a certified yoga instructor. Join us today and embrace the transformative power of yoga in the energetic and culturally rich environment of Vasai, Mumbai.</p>






        </div>)
}

export default CourseInfoTwoFifty