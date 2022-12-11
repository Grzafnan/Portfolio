import React from 'react';
import Lottie from "lottie-react"
import about from '../../assets/about.json'

const About = () => {
  return (
    <section id='about' className='px-6 py-12'>
      <h1 className='text-6xl text-center capitalize font-bold py-10 font-[Poppins]'>About Me</h1>
      <div className='flex flex-col gap-10 lg:flex-row justify-center items-center'>
        <div>
          <Lottie className='max-w-[500px]' animationData={about} loop={true} />
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>Shakil Ahmmed</h1>
          <ul className='marker:text-primary list-outside list-disc px-6 text-lg font-semibold'>
            <li>
              Age: 22 Years
            </li>
            <li>
              Nationality: Bangladesh
            </li>
            <li>
              Languague: Bangla, English
            </li>
            <li>
              Address: Dhaka, Bangladesh
            </li>
            <li>
              Core Competency: JavaScript, ReactJS, ExpressJS, MongoDB, NodeJS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;