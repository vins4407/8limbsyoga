import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagram, FaMobileAlt } from 'react-icons/fa'
import { BsMailbox } from 'react-icons/bs'

function Headerlinks() {
    return (
        <div className='text-white flex flex-col md:flex-row font-manrope justify-around items-center xl:gap-16  font-semibold bg-[#17543eff] xl:h-10 '>
            <span className='flex items-center gap-2'>
                <ImFacebook2 />
                <FaInstagram />
            </span>
            <span className='flex  items-center gap-2'><FaMobileAlt /><a href="tel:+91 75586 60993">+91 75586 60993</a></span>
            <span className='flex items-center gap-2'><BsMailbox /><a href="mailto:richasingh1907@gmail.com>">richasingh1907@gmail.com</a></span>

        </div>)
}

export default Headerlinks