import React from 'react'
import Courseimg1 from '../../assets/yoga2.jpeg';
import Courseimg2 from '../../assets/yoga3.jpeg';
import Courseimg3 from '../../assets/yoga4.jpg';
import Courseimg4 from '../../assets/yoga5.jpeg';

function CourseInfoBreadth() {
    return (
        <div className=' px-5 md:px-20 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>


            <h1 class="text-5xl font-semibold pb-4">RecBreathe and Thrive: <strong className=' text-green-800'>Breath and Work Training</strong> Training at <strong className=' text-orange-500'>8LimbsYoga Studio</strong></h1>
            <h1><strong>Student Reviews:</strong> 8 Limbs Yoga Studio is rated 4.9 / 5 on Google Maps, based on 147 reviews.</h1>

            <p>While everyone knows how to breathe, have you ever explored the transformative power of conscious breathing? The act of intentional breathing can have a profound impact on your physical, mental, and emotional well-being. It's a practice that can be done anywhere, anytime – at home, in the office, while traveling, or even during a leisurely walk. If you're eager to incorporate the benefits of breathwork into your daily routine, look no further than 8LimbsYoga Studio.</p>

            <p>At our studio, we offer a specialized Breath and Work Training program designed especially for corporate employees, providing them with invaluable tools to navigate the demands of modern life and relieve stress.</p>

            <p>Our Breath and Work Training program is tailored to address the unique needs of the corporate environment. Throughout this course, we will guide you in mastering various breathwork techniques that directly enhance mental clarity and foster a sense of tranquility. As you delve into these practices, you'll discover a natural remedy for the stress, anxiety, anger, and irritability that often accompany the daily grind. Furthermore, this program will introduce you to the profound benefits of self-love, happiness, and heightened self-awareness.</p>

            <p>We are committed to ensuring that our Breath and Work Training equips you with the most effective breathing and working patterns across various styles, making it easily adaptable to your daily life. As a result, you'll experience improved focus, enhanced productivity, and the key to unlocking lasting happiness.</p>

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

export default CourseInfoBreadth