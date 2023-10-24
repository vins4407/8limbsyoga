import React from 'react'
import floral from "../../assets/mainassets/imgbin_floral-design-vignette-flower-png.png"
import Button from '../Homepage/navbar/Button'


function CourseDescription({description,title}) {
    return (
        <div className='  relative flex flex-col  py-10 gap-5 px-4 xl:px-[32rem]  overflow-x-clip text-justify items-center'>
            <h1 className=' text-3xl font-bold text-green-900'>{title}</h1>
            <p>{description}
            </p>
            <img src={floral} className='absolute  bottom-[15rem]  w-16 2xl:w-96 -right-16 rotate-[90deg]   transform -scale-x-100'></img>
            <Button title={"Register now for workshop"}/>


        </div>
    )
}

export default CourseDescription