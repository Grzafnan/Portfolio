import React from 'react';
import contact from '../../assets/contact.svg'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col lg:flex-row justify-between gap-10 items-center py-14 px-6'>
      <div className='w-1/2'>
        <div className='text-start'>
          <h1 className='text-6xl capitalize font-bold py-10'>Contact me.</h1>
          <p className='font-[Josefin] text-sm'>
            For any project / consultation / help / suggestion / working together - just message me😊
          </p>
          <h3 className='text-[30px] font-bold py-10'>
            Send Me A Message.
          </h3>
        </div>
        <div className=''>
          <form action="" className='flex flex-col gap-5'>
            <input type="text" class="py-3 px-4 block w-full bg-accent border border-darkGray rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Name" required />
            <input type="email" name="email" id="email" class="py-3 px-4 block w-full bg-accent border border-darkGray rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Email" />

            <textarea className='py-3 px-4 block w-full bg-accent border border-darkGray rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400' name="message" id="message" cols="20" rows="6" placeholder='Message...' required></textarea>
            <button
              type="submit"
              className='border-2 border-primary bg-primary py-2 hover:border-primary hover:bg-white text-white hover:text-dark transition-all duration-300 ease-linear font-semibold w-44 inline-block mx-auto'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className='w-1/2 jump'>
        <img src={contact} alt="" className='max-w-full lg:w-3/4' />
      </div>


    </section>
  );
};

export default Contact;