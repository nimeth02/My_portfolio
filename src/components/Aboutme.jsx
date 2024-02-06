import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react"; 

function Aboutme() {
  return (
    <div className='mt-20 '>
    <div className=' text-xl lg:text-xl   xl:text-2xl text-white '>
       About me
     </div>
        <div className='flex justify-center '>
        <div className="w-[25rem] mt-10   ">
      <Timeline className=' flex justify-center items-center'>
        <TimelineItem className="h-32 w-[280px] sm:w-[360px]  md:w-[500px] ">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl  bg-gray-600 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]">
            <div className="flex  gap-10">
            <TimelineIcon className='bg-bt'>
            </TimelineIcon>
            <div>
              <div className='text-md md:text-lg sm:w-[300px] text-lg'>
                A/L in Physical sceince stram
              </div>
              <div  className="text-sm md:text text-white">
                2018 - 2020
              </div>
              </div>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-40 w-[280px] sm:w-[360px] md:w-[500px]">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="relative rounded-xl   bg-gray-600  py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]">
          <div className="flex  gap-10">
            
            <TimelineIcon className=' bg-bt' >
            </TimelineIcon>
            <div className="">
            <div className='text-md md:text-lg  sm:w-[300px] text-lg'>
                Trainee  Software Develeoper at Donext Pvt.Ltd
              </div>
              <div  className="text-sm md:text text-white">
                2022-Februaray  2022-June
              </div>
            </div>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28 w-[280px] sm:w-[360px] md:w-[500px]">
          <TimelineHeader className="relative  rounded-xl bg-gray-600  py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]">
          <div className="flex  gap-10">
            <TimelineIcon className='bg-gradient-to-b from-bt to-white'>
            </TimelineIcon>
            <div>
              <div className='text-md md:text-lg w-[200px] sm:w-[300px] md:w-[400px]'>
              Bsc.(hons) Information Technology in University of Moratuwa
              </div>
              <div  className="text-sm md:text-md text-white">
              2022 - 2025
              </div>
              </div>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
        </div>
    </div>
  )
}

export default Aboutme