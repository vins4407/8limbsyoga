import React from 'react'
import Herobutton from '../Comman/Herobutton'

function KeyTakeways({title}) {
    return (
        <section className=' py-24  relative flex flex-col gap-5  font-manrope  px-4 bg-[#fcfcfc]'>
            


            <div className='flex p-5  flex-col backdrop-blur-[2px]  place-items-center  '>

                <div className=' flex flex-col xl:flex-row xl:gap-4 font-semibold  pb-8 text-2xl xl:text-5xl xl:gap-y-10 '>
                    <h1 className='  '>
                        Some KeyTakeaways for 
                    </h1>
                    <h1 className=' text-[#17543e]'>{title}</h1>

                </div>

                <div className=' text-white flex 2xl:px-72  place-items-center backdrop-blur-[2px] pt-10 flex-col xl:flex-row   gap-20  '>

                    <div className=' flex flex-1 flex-col xl:flex-row gap-4  text-justify '>

                        <span className='rounded-xl   text-center max-w-md p-5 bg-[#9eb1d0]'>
                            <h1 className='text-[#17543eff] text-2xl'>Uncover the Mind-Body Connection</h1>
                            <h1 className=' px-8 text-justify'>Explore the intricate link between your brain and body. Understand how your thoughts and emotions have a direct impact on your overall well-being. Gain insights into how this connection plays a crucial role in your mental health.</h1>
                        </span>

                        <span className='rounded-full  p-8  text-center max-w-md  bg-[#dbefebff]'>
                            <h1 className='text-[#17543eff] text-2xl'>Identifying Psychological Disorders</h1>
                            <h1 className=' text-black '>Learn to recognize the early signs and symptoms of psychological disorders. Equip yourself with the knowledge needed to identify these conditions in yourself or others. This understanding is essential for early intervention and seeking help when necessary.</h1>
                        </span>
                        <span className='rounded-xl  text-center max-w-md p-5 bg-[#9eb1d0]'>
                            <h1 className='text-[#17543eff] text-2xl'>Enhancing Mental Well-being</h1>
                            <h1>Discover practical strategies and techniques to improve and sustain your psychological well-being. Acquire valuable tools to manage stress, anxiety, and negative emotions effectively. This workshop will empower you to take control of your mental health and lead a more fulfilling life.</h1>
                        </span>

                        

                    </div>

                </div>
                
            </div>

        </section>)
}

export default KeyTakeways