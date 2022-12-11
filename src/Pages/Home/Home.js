import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div className='max-w-[85rem] mx-auto'>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;