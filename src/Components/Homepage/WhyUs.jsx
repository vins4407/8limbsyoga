import React from 'react';
import image1 from '../../assets/mainassets/8 limbsstudio entry.png';
import image2 from '../../assets/mainassets/breathing_yoga.png';
const WhyUs = () => {
    return (
        <>
        <div className="mt-20 flex flex-col">
            <div className="flex flex-row items-center h-auto">
                
                <div className="w-1/2 flex justify-center">
                    <img 
                        src={image1} 
                        alt="8 Limbs Studio Entry" 
                        className="w-4/5 h-[17rem] object-cover object-left rounded-md shadow-md"
                    />
                </div>
                
                
                <div className="w-1/2 pe-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        WHY 8 LIMBS YOGA <br/> STUDIO?
                    </h2>
                    <p className="pt-7 text-base leading-relaxed text-gray-600">
                        We believe that yoga goes beyond physical practice to incorporate self-discovery and change. 
                        This foundation will help shape the diverse yoga experiences to be experienced by our beginners to our advanced students.
                        That is why we offer various yoga experiences to all of our students, from beginner to advanced practitioner. 
                        This is the reason we offer different yoga experiences that cater to all our students.
                    </p>
                </div>
            </div>
        </div>




        <div className="my-5 flex flex-col">
            <div className="flex flex-row items-center h-auto">

                <div className="w-1/2 py-10 px-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        MISSION AND VISSION
                    </h2>
                    <p className="pt-7 text-base leading-relaxed text-gray-600">
                    At 8 Limbs Yoga, we believe that yoga is more than just a physical practice. 
                    It's a journey of self-discovery and transformation. 
                    That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. 
                    That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners.
                    That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. 
                    </p>
                </div>
                
                <div className="w-1/2 flex justify-center">
                    <img 
                        src={image1} 
                        alt="8 Limbs Studio Entry" 
                        className="w-4/5 h-[17rem] object-cover object-left rounded-md shadow-md"
                    />
                </div>
            </div>
        </div>





        <div className="mb-10 flex flex-col">
            <div className="flex flex-row items-center h-auto">
                
                <div className="w-1/2 flex justify-center">
                    <img 
                        src={image2} 
                        alt="8 Limbs Studio Entry" 
                        className="w-4/5 h-[17rem] object-cover object-left rounded-md shadow-md"
                    />
                </div>
                
                
                <div className="w-1/2 py-10 pe-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        WHY CHOOSE US?
                    </h2>
                    <p className="pt-7 text-base leading-relaxed text-gray-600">
                    At 8 Limbs Yoga, we believe that yoga is more than just 
                    a physical practice. It's a journey of self-discovery and transformation.
                     That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced 
                     practitioners. That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. 
                     That's why we offer a variety of yoga experiences to meet the needs of all students, from beginners to advanced practitioners. 
                    </p>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default WhyUs;
