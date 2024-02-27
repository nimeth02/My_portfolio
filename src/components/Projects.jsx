import React from 'react'
import ProjectCard from './ProjectCard'
import ecom from '../../public/ecom.png'
import password from '../../public/password.png'
import chat from '../../public/chat.png'
import home from '../../public/home.svg'
import iphone from '../../public/iphone.svg'
function Projects() {
  return (
    <div className='mt-20' id="projects">
      <div className='px-4  tracking-wide text-lg lg:text-2xl xl:text-3xl text-white font-bold flex flex-col'>

        <div className=" w-[150px] md:w-[250px] lg:w-[350px]  px-4 py-2 bg-gradient-to-r from-[rgb(138,132,128,0.6)] to-bg rounded-lg" >
          Projects
        </div>

      </div>
      <div className='flex flex-col  gap-20 mt-5 md:mt-10 '>
        <div className="flex flex-col md:flex-row px-4 sm:px-20 md:gap-10 md:pl-[20%] md:pr-2">
          <ProjectCard
           title="E-commerce admin application" 
           description=" E-commerce admin app simplifies online store management. Super admins oversee POS, product, category, and supplier tasks. Other managers focus on POS and product management. Each manager enjoys a personalized dashboard for efficient task handling." 
           image={ecom}
           frontend={"react js, typescript,antd,redux toolkit"}
           backend={"node js,express js, mongodb"}
           frontendlink={"https://github.com/nimeth02/e-com-admin-frontend"}
           backendlink={"https://github.com/nimeth02/e-com-admin-backend"}
           livelink={"https://e-com-admin-frontend.onrender.com"}
           isLive={true}
           />
        </div>
        <div className=" flex flex-col md:flex-row-reverse px-4 sm:px-20 md:pr-[20%] md:gap-10 md:pl-2 ">
          <ProjectCard 
          title="Account manager" 
          description={"Developing an account details manager, our app allows users to organize their account information across various categories such as emails, bank accounts, and house-related details.store all account details in one place  "} 
          image={password}
          frontend={"next js,material-tailwind"}
           backend={"nodejs,nest js, mongodb"}
           frontendlink={"https://github.com/nimeth02/password-frontend"}
           backendlink={"https://github.com/nimeth02/password-backend"}
           livelink={"https://password-frontend-x7q1.vercel.app/"}
           isLive={true}
          />
        </div>
        <div className=" flex flex-col md:flex-row  px-4 sm:px-20 md:gap-10 md:pl-[20%] md:pr-2 ">
          <ProjectCard title="Home price prediction application" description={"Developing a home price prediction application that utilizes machine learning, our app estimates home prices based on key factors like the number of rooms and the area of the house. Users can input these details, and our model will provide an accurate prediction"}
          image={home}
          frontend={"next js,tailwind css"}
          backend={"flask , ml-model pandas, sklearn"}
          frontendlink={"https://github.com/nimeth02/banglore_home_price_predict"}
          backendlink={"https://github.com/nimeth02/banglore_home_price_predict"}
          />
        </div>
        <div className=" flex flex-col md:flex-row-reverse md:pr-[20%] px-4 sm:px-20 md:gap-10 md:pl-2">
          <ProjectCard title="Iphone price prediction application" description={"Creating an iPhone price prediction application for the Sri Lankan market, our app utilizes machine learning to estimate prices based on factors such as the iPhone version, memory capacity, and other features. This tool aims to provide users with accurate price predictions"} 
          image={iphone}
          frontend={"react js"}
          backend={"flask , ml-model pandas, sklearn"}
          frontendlink={"https://github.com/nimeth02/apple_mobileapp_price_predict_fullstack_application"}
          backendlink={"https://github.com/nimeth02/apple_mobileapp_price_predict_fullstack_application"}
          />
        </div>
        <div className=" flex flex-col md:flex-row  px-4 sm:px-20 md:gap-10 md:pl-[20%] md:pr-2 ">
          <ProjectCard title="Realtime chat application" description={"Real-time chat application that allows users to chat individually and in groups with instant messaging. Our app enables realtime communication, offering a dynamic platform for both personal and group conversations."} 
          image={chat}
          frontend={"react js,chakra ui"}
          backend={"nodejs,express js, mongodb,socket.io"}
          frontendlink={"https://github.com/nimeth02/chat-max-realtime-chat-appliacation"}
          backendlink={"https://github.com/nimeth02/chat-max-realtime-chat-appliacation"}
          livelink={"https://chatmax-realtime.onrender.com"}
          isLive={true}
          />
        </div>
      </div>

    </div>
  )
}

export default Projects