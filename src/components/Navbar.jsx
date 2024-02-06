import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Nimlogo.svg'
import menu from '../../public/menu.svg'
import { Drawer, IconButton } from '@material-tailwind/react'
function Navbar() {

    const [open, setOpen] = useState(false);
  return (
    <div className='h-[80px] xl:h-[100px] relative bg-bg flex items-center  justify-between md:gap-[20%] xl:gap-[30%]'>
      <Image
      src={logo}
      className='h-[25px] lg:h-[30px] xl:h-[50px]'
alt="Image N1"
      />
      <div className=' text-white flex-1  gap-[6%] lg:gap-[8%] hidden md:flex'>
        
      
      <div className=' text-lg lg:text-xl xl:text-2xl '>
        Projects
      </div>
      <div className='text-lg lg:text-xl xl:text-2xl'>
        Technologies
      </div>
      <div className='text-lg lg:text-xl xl:text-2xl'>
        Contact me
      </div>
      </div>
{!open ? <svg onClick={()=>setOpen(true)}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white md:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>:<svg onClick={()=>setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white md:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
}


    <div className={open ? 'absolute right-0 top-[50px] md:hidden' : "hidden"}>
<div className='flex flex-col gap-5 p-8 pt-12 bg-bg text-white rounded drop-shadow-[0px_0px_10px_rgba(11,140,205,0.3)]'>
<div className=' text-lg lg:text-xl  border-b-2 '>
        Projects
      </div>
      <div className='text-lg lg:text-xl  border-b-2 '>
        Technologies
      </div>
      <div className='text-lg lg:text-xl xl:text-2xl border-b-2'>
        Contact me
      </div>  
</div>
    </div>
    </div>
  )
}

export default Navbar

