import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid'
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='h-[110vh] bg-[url("/images/banner.jpg")] bg-cover bg-center '>
        <Particle/>
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center' >
            <div> 
                <h1 className='text-[35px] md:text-[50px] text-white font-bold'> 
                    Hi, I am  <span className='text-yellow-400'> Jose</span>
                </h1>
                <TextEffect/>
                <p className='mt-[1.5rem] text-[18px] text-[#ffffff92] '>
                Kaanaan oru look illanney ullu… bhayankara budhiya.
                </p>
                <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                    <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                        <p>Download doc</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black '/>
                    </button>
                    <button className='flex items-center space-x-2'>
                        <FaGithub  className='w-[4rem] h-[rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] '/>
                        <p className='text-[20px] font-semibold text-white'>
                            Github
                        </p>
                    </button>

                </div>
            </div>
            <div  className='w-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]' >
                <Image src="/images/u1.jpeg" alt="user" layout="fill" className="object-cover rounded-full"/>
            </div>
        </div>
    </div>
  )
}

export default Hero