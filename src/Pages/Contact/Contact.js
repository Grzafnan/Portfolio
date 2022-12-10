import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div>
        <div className='text-center'>
          <h1 className='text-6xl capitalize font-bold py-10'>Contact me.</h1>
          <p className='font-[Josefin]'>
            For any project / consultation / help / suggestion / working together - just message me😊
          </p>
          <h3 className='text-[30px] font-bold py-10'>
            Send Me A Message.
          </h3>
        </div>
        <div className='w-3/4 mx-auto'>
          <form action="" className='flex flex-col gap-5'>
            <input className='p-2 border' type="text" name="name" id="name" placeholder='Name' required />
            <input className='p-2 border' type="email" name="email" id="email" placeholder='Email' required />
            <textarea className='p-2 border' name="message" id="message" cols="20" rows="10" placeholder='Message...' required></textarea>
            <button
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>



    </section>
  );
};

export default Contact;