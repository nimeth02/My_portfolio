import React, { useRef, useState } from 'react'
import gitlogo from '../../public/gitlogo.svg'
import linkedin from '../../public/linkedin.svg'
import phone from '../../public/phone.svg'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import { ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'

function Contactme() {
    const form = useRef();

    const validateForm = () => {
        let isValid = true;
        let errors = "";

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.yourMessage.value.trim();

        switch (true) {
            case !name:
                errors = 'Name is required';
                isValid = false;
                break;
            case !email:
                errors = 'Email is required';
                isValid = false;
                break;
            case !/\S+@\S+\.\S+/.test(email):
                errors = 'Invalid email address';
                isValid = false;
                break;
            case !message:
                errors = 'Message is required';
                isValid = false;
                break;
            default:
                break;
        }


        return { isValid, errors };
    };


    const handleSend = () => {
        const { isValid, errors } = validateForm()
        if (isValid) {
            emailjs.sendForm('service_n5glj5l', 'template_mdlg3td', form.current, {
                publicKey: 'NEc93PyXyw1L4XDLt',
            }).then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email sent successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,

                    });
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Something went wrong', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                },
            );
        }
        else {
            toast.error(errors, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    }
    return (
        <div className='flex flex-col md:flex-row items-center gap-10 mt-20 mx-20 '>
            <div className='bg-bt opacity-80  text-white flex-1 p-4 rounded py-10'>
                <div className='text-lg'>
                    Get in Touch
                </div>
                <div className='text-md mt-20'>
                    I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.
                </div>
                <div className='mt-20  flex flex-col gap-2'>
                    <div className='flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                        </svg>
                        0706585632
                    </div>
                    <div className='flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>

                        nimeth20011002@gmai.com
                    </div>

                </div>
                <div className='mt-20 flex gap-5'>
                    <Link href="https://www.linkedin.com/in/nimeth-nimdinu-231396213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <Image src={linkedin} className='h-10 w-10' />
                    </Link>
                    <Link href="https://github.com/nimeth02">
                        <Image src={gitlogo} className='h-10 w-10' />
                    </Link>

                </div>
            </div>
            <form ref={form} className='flex flex-col gap-10 flex-1  w-full'>
                <input class="bg-gray-600 placeholder-gray-400 rounded w-full py-2 px-4 text-white leading-tight outline-none  "
                    placeholder='Name'
                    name="name"
                />
                <input class="bg-gray-600 placeholder-gray-400 rounded w-full py-2 px-4 text-white leading-tight outline-none  "
                    placeholder='Email'
                    name="email"
                />
                <input class="bg-gray-600 placeholder-gray-400 rounded w-full py-2 px-4 text-white leading-tight outline-none  "
                    placeholder='Subject'
                    name="subject"
                />
                <textarea class="bg-gray-600 h-[200px] placeholder-gray-400 rounded w-full py-2 px-4 text-white leading-tight outline-none  "
                    placeholder='Your messsage'
                    name="yourMessage"
                />
                <div onClick={handleSend} className='text-white bg-bt px-4 py-2 w-[150px] rounded'>
                    Send Message
                </div>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />

        </div>
    )
}

export default Contactme