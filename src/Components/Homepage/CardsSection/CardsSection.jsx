import React from 'react'
import stars from "../../../assets/mainassets/5_stars.png"

import cardimg from "../../../assets/yoga4.jpg"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
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
        <Card className="mt-6 w-96 bg-white    hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
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
                <img className=" h-8 pb-2"
                    src={stars}
                    alt="card-image"
                />
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex  ">
                <Link to={link}>
                    <button class="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden 
      bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 border-orange-500  border-[1px]
       hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full 
       before:bg-gradient-to-r before:from-orange-500 before:to-orange-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
       before:rounded-[50px]   {
        title: '100 Hours Yoga Teacher Training',
        description: '8 Limbs Yoga Studio offers a comprehensive 100 Hour Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.',
        image: cardimg,
        link: '/100-hour-yoga-teacher-training',
    }, hover:before:left-0">
        COURSE DETAIL
                    </button>
                </Link>
            </CardFooter>
        </Card>
    );
};


function CardsSection() {
    return (
        <div className="flex flex-col bg-[#dbefebff] justify-center  py-24   gap-16" >
          <h1 className=' text-center text-xl xl:text-5xl text-[#17543eff] font-bold  font-serif'> Featured Courses </h1>


            <div className='flex flex-wrap justify-center px-5 3xl:px-40 gap-8'>
                {cardData.map((card, index) => (
                    <CardDefault key={index} {...card} />
                ))}

                

            </div>
        </div>
    )
}

export default CardsSection