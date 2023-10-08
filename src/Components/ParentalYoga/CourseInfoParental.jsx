import React from 'react'
import Courseimg1 from '../../assets/yoga2.jpeg';
import Courseimg2 from '../../assets/yoga3.jpeg';
import Courseimg3 from '../../assets/yoga4.jpg';
import Courseimg4 from '../../assets/yoga5.jpeg';


function CourseInfoParental() {
    return (
        <div className=' px-5 md:px-20 3xl:px-80  overflow-hidden py-20  flex flex-col  gap-6'>
            <h1 className=' text-5xl font-semibold  pb-8'>Residential Prenatal and Postnatal Yoga Teacher Training</h1>
            <h1 className='  text-green-800 text-xl font-bold'>Duration - 7 DAYS | Training Style - PRE-NATAL & POST-NATAL YOGA | Certification - Yoga Alliance USA | Course Fee - Shared :$ 499 & Private $ 699</h1>
            <h1><strong>Student Reviews:</strong> 8 Limbs Yoga Studio is rated 4.8 / 5 on Google Maps, based on 85 reviews.</h1>
            <p>Prenatal and postnatal yoga practices play a crucial role in the lives of pregnant women. When a woman becomes pregnant, it changes her lifestyle and mindset, and she thus needs to adopt several meditation and relaxation techniques to make her first trimester happy. Our Prenatal and Postnatal Yoga program will allow mothers to stay active during pregnancy and can help them stay comfortable as they grow through each trimester. It will be going to teach them, to introduce calm, relaxation, happiness, and strength in their motherhood journey.</p>

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


            <p > Join 8 Limbs Yoga Studio for our comprehensive 85-hour Prenatal and Postnatal Yoga Teacher Training in Vasai, Mumbai, India. Our program is thoughtfully designed to empower you with the knowledge and skills needed to support and guide pregnant women on their beautiful journey towards motherhood.</p>

            <p className='text-green-800 text-xl font-bold'>Prenatal Yoga Training:</p>
            <p>During our prenatal yoga training, you will learn:</p>
            <ul>
                <li>◘ Focusing on breathing techniques.</li>
                <li>◘ Moving different areas of the body, such as arms and neck, etc.  </li>
                <li>◘ Moving the body into different postures and positions.</li>
                <li>◘ Developing strength, flexibility, and balance.</li>
                <li>◘ Relaxing the body and restoring the resting heart rate and breathing rhythm.</li>
            </ul>

            <p className='text-green-800 text-xl font-bold'>Postnatal Yoga Training:</p>
            <p>Our postnatal yoga training will teach you how to:</p>
            <ul>
                <li> ◘ Increase calmness.</li>
                <li> ◘ Decrease anxiety and depression.</li>
                <li> ◘ Reduce irritability and rage.</li>
                <li> ◘ Increase energy.</li>
                <li> ◘ Maintain normal blood pressure.</li>
                <li> ◘ Relax your muscles.</li>
                <li> ◘ Meditate and relax the body.</li>
            </ul>

            <p>At 8 Limbs Yoga Studio, we understand that pregnancy can bring both excitement and anxiety. Our training equips you with the skills to provide emotional and physical support to pregnant women, helping them manage mood swings and feelings during this transformative time.</p>

            <p>We invite you to be a crucial part of a pregnant woman's yoga journey by enrolling in our 85-hour prenatal and postnatal yoga teacher training course. This course is available both online and offline, and it's designed to enhance your yoga skills and deepen your foundational knowledge.</p>





        </div>
        
        )
}

export default CourseInfoParental