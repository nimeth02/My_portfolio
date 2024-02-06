import React from 'react'

function ProjectCard() {
    return (
        <>
            {/* <div className=' flex flex-col md:flex-row px-4 sm:px-20 md:gap-10'> */}
                <div className='  border-2 border-red-500  h-[200px] md:w-[600px] rounded-lg '>
                </div>
                <div className='bg-[rgb(138,132,128,0.6)] transparent text-white  p-4 text-justify rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.5)]'>
                    It easy to make mistakes configuring radial gradients manually, but unfortunately Tailwind does provide utility classes for it at the moment (maybe because radial gradients are too diverse?). So I wrote a plugin for it.
                </div>

            {/* </div> */}
             </>
    )
}

export default ProjectCard