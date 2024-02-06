import React from 'react'
import gitlogo from '../../public/gitlogo.svg'
import Image from 'next/image'
function Git() {
    return (
        <div className='flex flex-col sm:flex-row  mt-40 mx-20 items-center gap-5 md:gap-20 '>
            <div className='flex flex-col gap-2'>
                <div className='text-bt text-lg '>
                    nimeth02
                </div>
                <div className="flex gap-5">
                    <div className=" w-[150px] md:w-[250px] lg:w-[350px] h-[10px] lg:h-[15px] bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>
                    <div className=" w-[20px] h-[10px] lg:h-[15px]   bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>

                </div>
            </div>
            <div>
                <Image src={gitlogo} className='h-10 w-10 md:h-20 md:w-20  ' />
            </div>
        </div>
    )
}

export default Git