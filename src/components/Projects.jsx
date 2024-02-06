import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='mt-20'>
     <div className='  tracking-wide text-lg lg:text-2xl xl:text-3xl text-white '>
        Projects
      </div>
      <div className='flex flex-col  gap-20 mt-5 md:mt-10 '>
        <div className="flex flex-col md:flex-row px-4 sm:px-20 md:gap-10 md:pl-[20%] md:pr-2">
        <ProjectCard />
        </div>
        <div className=" flex flex-col md:flex-row-reverse px-4 sm:px-20 md:pr-[20%] md:gap-10 md:pl-2 ">
        <ProjectCard />
        </div>
        <div className=" flex flex-col md:flex-row  px-4 sm:px-20 md:gap-10 md:pl-[20%] md:pr-2 ">
        <ProjectCard />
        </div>
        <div className=" flex flex-col md:flex-row-reverse md:pr-[20%] px-4 sm:px-20 md:gap-10 md:pl-2">
        <ProjectCard />
        </div>
      </div>
      
    </div>
  )
}

export default Projects