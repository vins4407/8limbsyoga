import React from 'react'
import stars from "../../../assets/4star.png"

import cardimg from "../../../assets/yoga4.jpg"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const cardData = [
    {
        title: '100 Hours Yoga Teacher Training',
        description: '8 Limbs Yoga Studio offers a comprehensive 100 Hour Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.',
        image: cardimg,
        link: '/100-hour-yoga-teacher-training',
    },
    {
        title: '200 HOURS YOGA TEACHER TRAINING',
        description: '200 Hour Multi Style Yoga Teacher Training Course that is perfect for anyone who wants to deepen their personal yoga practice, learn about yoga philosophy and tradition, or become a yoga teacher.',
        image: cardimg,
        link: '/200-hour-yoga-teacher-training',
    },
    {
        title: '300 HOURS YOGA TEACHER TRAINING',
        description: 'The 300 Hours Ashtanga & Vinyasa Teacher Training Course an intensive program meticulously crafted to deepen your understanding and practice of both Ashtanga and Vinyasa yoga styles.',
        image: cardimg,
        link: '/300-hour-yoga-teacher-training',
    },
    {
        title: '200 HOURS + 50 HRS AERIAL YOGA TEACHER TRAINING',
        description: 'A comprehensive program of 200-Hour Yoga Teacher Training, featuring an additional 50-Hour Aerial Yoga Certification...',
        image: cardimg,
        link: '/200+50-hour-yoga+aerial-teacher-training',
    },
    {
        title: '50 HOURS AERIAL YOGA TEACHER TRAINING',
        description: 'An exclusive 50-hour aerial yoga teacher training program an specialized program is tailored for yoga enthusiasts who aspire to master the art of aerial yoga ',
        image: cardimg,
        link: '/50-hour-aerial-yoga-teacher-training',
    },
    {
        title: 'PRENATAL & POSTNATAL YOGA TEACHER TRAINING',
        description: 'A comprehensive program for supporting and guiding pregnant women on their beautiful journey towards motherhood...',
        image: cardimg,
        link: '/prenatal-and-postnatal-yoga-teacher-training',
    },


    // Add more card data as needed
];

const CardDefault = ({ title, description, image, link }) => {
    return (
        <Card className="mt-6 w-96 bg-[#f1ece0ff]">
            <CardHeader color="blue-gray" className="relative  h-56">
                <img
                    class="  object-bottom	"
                    src={image}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <img className=" h-8"
                    src={stars}
                    alt="card-image"
                />
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={link}>
                    <button class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden 
      bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105
       hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full 
       before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
       before:rounded-[50px] hover:before:left-0">
        COURSE DETAIL
                    </button>
                </Link>
            </CardFooter>
        </Card>
    );
};


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
                {cardData.map((card, index) => (
                    <CardDefault key={index} {...card} />
                ))}



            </div>
        </div>
    )
}

export default CardsSection