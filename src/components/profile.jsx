import React from 'react'
import profile from '../../public/profile.svg'
import Image from 'next/image'
import { Typography } from '@material-tailwind/react'

function Profile() {
    return (
        <div>
            <div className="lg:mt-5">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                    <div className="flex justify-center ">
                        <Image src={profile} className="h-[300px] md:h-[500px]" />
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-10 p-4 ">
                        <div className="font-semibold tracking-wide text-lg lg:text-2xl xl:text-3xl text-white">
                            HI, MY NAME IS
                        </div>
                        <div className="text-bt font-semibold   text-3xl lg:text-5xl  xl:text-6xl   w-[230px]  lg:w-[360px] xl:w-[450px] ">
                            Nimeth Nimdinu  I am a Software Developer
                        </div>
                        <div className="flex gap-5">
                            <div className=" h-[10px] lg:h-[15px] w-[200%]  bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>
                            <div className=" h-[10px] lg:h-[15px] w-[10%]  bg-gradient-to-r from-cyan-500 to-blue-500  rounded drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]" ></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile