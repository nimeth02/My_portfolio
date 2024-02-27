import Image from 'next/image'
import React from 'react'
import gitlogo from '../../public/gitlogo.svg'
import styles from './productcard.module.css';
import Link from 'next/link'

function ProjectCard({image, title, description, isLive, frontend, backend, frontendlink, backendlink, livelink }) {
    return (
        <>
            {/* <div className=' flex flex-col md:flex-row px-4 sm:px-20 md:gap-10'> */}
            <div className='   md:w-[800px] rounded-lg flex items-center justify-center  bg-gray-600'>
                <Image alt="Image G" src={image} className=' rounded '/>
            </div>
            <div className='bg-[rgb(138,132,128,0.6)] transparent text-white  p-4 text-justify rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)] flex flex-col justify-between gap-10'>
                <div className='font-bold text-xl'>{title}</div>
                {description}
                <div className='pl-6'>
                    <ul className="list-disc">

                        <li>frontend - {frontend}</li>

                        <li>backend - {backend}</li>
                    </ul>
                </div>

                <div className='flex items-center gap-5'>

                    {isLive && <Link className='flex items-center text-bt font-semibold' href={livelink || " "}>
                        <div className='underline'>Live</div>
                        <div className={`w-4 h-4 rounded-full bg-bt ${styles['animate-pulse']} mx-2`}>

                        </div>
                    </Link>}

                    <Link className='flex items-center gap-2' href={frontendlink || " "}>
                        <div className='underline'>frontend</div>
                        <Image alt="Image G" src={gitlogo} className='h-8 w-8 ' />

                    </Link>
                    <Link className='flex items-center gap-2' href={backendlink || " "}>
                        <div className='underline'>backend</div>
                        <Image alt="Image G" src={gitlogo} className='h-8 w-8 ' />

                    </Link>
                </div>



            </div>

            {/* </div> */}
        </>
    )
}

export default ProjectCard