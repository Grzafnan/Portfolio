import React from 'react';
import './Banner.css'
import shakil from '../../assets/shakil-ahmmed.jpg'
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

const Banner = () => {
  return (
    <section className=''>
      <div className=' flex flex-col lg:flex-row  justify-center items-center py-14 px-6'>
        <div className='lg:w-1/2'>
          <div>
            <h1 className='text-center lg:text-start text-6xl font-bold leading-[80px]'>
              Hello!!!
              <br />

              I Am <span className='bg-secondary px-2 py-0'>Shakil</span>,
              A FrontEnd Developer

            </h1>
            <p className='font-[Josefin] py-5'>
              Goal-oriented Web Developer with fast-learning ability seeking a challenging career to utilize my skills, keep
              learning and sharing. With deep understanding of JavaScript and a love for React, ready to give my best for
              any endeavor.
            </p>
          </div>
          <div className='flex justify-center lg:justify-start gap-5'>
            <a href="https://github.com/grzafnan" target="_blank" rel="noopener noreferrer">
              <BsGithub className='w-7 h-7 hover:text-primary transition-all duration-300 ease-linear' />
            </a>
            <a href="https://www.linkedin.com/in/shakilahmmed1/"
              target="_blank" rel="noopener noreferrer"
            >
              <BsLinkedin className='w-7 h-7 hover:text-primary transition-all duration-300 ease-linear' />
            </a>
            <a href="https://www.facebook.com/GRzAfnan/"
              target="_blank" rel="noopener noreferrer"
            >
              <BsFacebook className='w-7 h-7 hover:text-primary transition-all duration-300 ease-linear' />
            </a>
          </div>
        </div>

        <div className='hero-image jump lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
          <img src={shakil} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;