import React from 'react'
import Image from 'next/image'
import dp from '../public/file.jpg'
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {
  return (
      <div className='bg-black flex flex-col h-auto sm:h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed'>
        <div className='text-white flex flex-col p-10 items-center'>
        <Image
            priority
            height={200}
            width={200}
            aria-label='abdullahs'
            src={dp}
            alt='abdullah'
            className='rounded-full h-full m-8'
        />
        <h1 className='font-mono font-bold text-4xl text-yellow-300 mb-2'>Abdullah Zahid</h1>
        <h2 className='font-mono font-semibold text-2xl mb-2'>Software Engineer</h2>
        <p className='font-mono mb-2'>Intermediate (FSc), Punjab College of Information Technology (2018-2020)</p>
        <p className='font-mono mb-2'>Bachelor of Software Engineering, Bahria University (2020-2024)</p>
        <div className='text-center mb-4 mt-4'>
            <h3 className='text-2xl mb-2'>Contact me</h3>
            <div className='flex flex-row justify-center gap-2'>
                  <a className='icons-contact-me' href='https://www.facebook.com/profile.php?id=100021378457823'><FaFacebookSquare /></a>
                  <a className='icons-contact-me' href="https://twitter.com/TraderSpades"><FaTwitterSquare /></a>
                  <a className='icons-contact-me' href="https://github.com/spades02"><FaGithubSquare /></a>
                  <a className='icons-contact-me' href="https://www.linkedin.com/in/abdullah-zahid-53bbb426a/"><FaLinkedin /></a>
            </div>
        </div>
        </div>
    </div>
  )
}
