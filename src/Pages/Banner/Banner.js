import React from 'react';
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
              <span>
                I Am Shakil, A FrontEnd Developer
              </span>
            </h1>
            <p className='font-[Josefin] py-5'>
              Goal-oriented Web Developer with fast-learning ability seeking a challenging career to utilize my skills, keep
              learning and sharing. With deep understanding of JavaScript and a love for React, ready to give my best for
              any endeavor.
            </p>
          </div>
          <div className='flex justify-center lg:justify-start gap-5'>
            <BsGithub className='w-8 h-8 hover:text-blue-400 transition-all duration-300 ease-linear cursor-pointer' />
            <BsLinkedin className='w-8 h-8 cursor-pointer' />
            <BsFacebook className='w-8 h-8 cursor-pointer' />
          </div>
        </div>

        <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
          <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" alt="" className='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;