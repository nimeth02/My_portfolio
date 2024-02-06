import Image from 'next/image'
import React from 'react'
import techTree from '../../public/techTree.svg'
import { Typography } from '@material-tailwind/react'
function Technology() {
  return (
    <div className='mt-40 px-10'>
        <div className='flex justify-center '>
            <div className=' grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5 md:gap-2 md:gap-x-20'>
              <div className='px-3 py-1 bg-black text-center w-[100px] text-white rounded md:col-span-2 md:col-start-1 drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Node js 
              </div>
              <div className='px-2 py-1 flex justify-center bg-black w-[120px] text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                JavaScript
              </div>
             
              <div className='px-2 py-1 flex justify-center bg-black w-[100px] text-white rounded md:col-span-2 md:col-start-2 drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Next js 
              </div>
              <div className='px-2 py-1 flex justify-center  bg-black w-[120px] text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                React js 
              </div>
              <div className='px-2 py-1 flex justify-center  bg-black w-[100px] text-white rounded md:col-span-2 md:col-start-1 drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Nest js 
              </div>
              <div className='px-2 py-1 flex justify-center bg-black w-[120px] text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                TypeScript
              </div>
              <div className='px-2 py-1 flex justify-center md:col-span-2 md:col-start-2  w-[100px] bg-black text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Pandas
              </div>
              <div className='px-2 py-1 flex justify-center  w-[100px] bg-black text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Express  js
              </div>
              <div className='px-2 py-1  flex justify-center md:col-span-2 md:col-start-1 w-[100px] bg-black text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Flask
              </div>
              <div className='px-2 py-1 sm:col-span-2 sm:col-start-2  md:col-auto flex justify-center bg-black w-[120px] text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                Tailwind CSS 
              </div>
            </div>

        </div>
        <div className='flex justify-center '>
        <Image alt="image T" src={techTree} />
        </div>
    </div>
  )
}

export default Technology