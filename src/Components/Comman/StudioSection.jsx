import React from 'react'
import limbs1 from '../../assets/mainassets/hero3.jpg'
import limbs2 from '../../assets/mainassets/hero.jpg'
import limbs3 from '../../assets/mainassets/studio3.png'
import Centerbg from '../../assets/mainassets/imgbin_wedding-green-png.png'

function StudioSection() {
  return (
    <div className=' flex flex-col justify-center relative bg-[#dbefebff] items-center overflow-hidden  gap-10 py-20'>
                <h1 className='text-[#17543eff] text-3xl xl:text-5xl   font-bold'> Our Branches</h1>
                {/* <img src={Centerbg} className='absolute  w-[35rem]  -left-[20rem]  rotate-[-25deg] transform -scale-x-100'></img> */}
                <img src={Centerbg} className='absolute  w-[35rem]  -left-[28rem]  rotate-[-25deg] transform -scale-x-100'></img>
                {/* <img src={Centerbg} className='absolute  w-[35rem]  -right-[20rem]  rotate-[-25deg] transform -scale-x-100'></img> */}
                <img src={Centerbg} className='absolute  w-[35rem]  -right-[28rem]  rotate-[-25deg] transform -scale-x-100'></img>


                <div className=' flex flex-col xl:flex-row justify-center gap-20 items-center'>

                    <div className="relative group  cursor-pointer group overflow-hidden  text-gray-50 h-72 w-72 md:w-96  rounded-2xl hover:duration-700 duration-700">
                        <div className=" w-72 md:w-96 h-72 bg-lime-400 text-gray-800">
                            <div className="flex flex-row justify-between">
                                <img src={limbs1}></img>
                            </div>
                        </div>
                        <div className="absolute bg-gray-50  -bottom-28  md:-bottom-20 w-72 md:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-sm">Studio 1</span>
                            <span className="text-gray-800 font-bold text-4xl">8Limbs Vasai</span>
                            <a target='blank' href="https://maps.app.goo.gl/vHf6qKibeMq6zmUs7">
                                <p className="text-black hover:text-lime-600" >Shop number 5,6,7 , yashwant park Vasai, near bank of India, Nalasopara East, Mumbai, Maharashtra 401209</p>
                            </a>
                        </div>
                    </div>


                    <div className="relative group  cursor-pointer group overflow-hidden  text-gray-50 h-72  w-72 md:w-96  rounded-2xl hover:duration-700 duration-700">
                        <div className=" w-72 md:w-96 h-72 bg-lime-400 text-gray-800">
                            <div className="flex flex-row justify-between">
                                <img src={limbs2}></img>
                            </div>
                        </div>
                        <div className="absolute bg-gray-50 bottom-[-90px] md:-bottom-14  w-72 md:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-sm">Studio 2</span>
                            <span className="text-gray-800 font-bold text-4xl">8Limbs Evershine</span>
                            <a target='blank' href="https://maps.app.goo.gl/SL6kyJemsynHjRf87"  >
                                <p className="text-black hover:text-lime-600" >E-C 114/001 Aries co.op Society, Evershine City, Vasai East, Mumbai, Maharashtra 401208</p>
                            </a>
                        </div>
                    </div>



                    <div className="relative group  cursor-pointer group overflow-hidden  text-gray-50 h-72  w-72 md:w-96  rounded-2xl hover:duration-700 duration-700">
                        <div className=" w-72 md:w-96 h-72 bg-lime-400 text-gray-800">
                            <div className="flex flex-row justify-between">
                                <img src={limbs3}></img>
                            </div>
                        </div>
                        <div className="absolute bg-gray-50 -bottom-28 md:-bottom-20  w-72 md:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                            <span className="text-lime-400 font-bold text-sm">Studio 3</span>
                            <span className="text-gray-800 font-bold text-4xl">8 Limbs Branch-3</span>
                            <a target='blank' href="https://maps.app.goo.gl/raR9Np1Zix19Aagv7">
                                <p className="text-black hover:text-lime-600" >Shop No 13, Topaz Center, Tulinj Rd, near Radha Krishna Hotel, Nalasopara East, Mumbai, Maharashtra 401209</p>
                            </a>
                        </div>
                    </div>

                </div >


            </div >  )
}

export default StudioSection