import React, { useEffect, useState } from "react";
// Import Swiper React components
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import './ProjectDetails.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true)

  const project = projects[0];
  console.log(project);

  useEffect(() => {
    fetch(`https://portfolio-server-grzafnan.vercel.app/project/${id}`)
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      });
  }, [id])

  console.log();


  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <section className='font-[Poppins] my-10'>
      <div className="mt-6">
        <>
          <Swiper
            //  spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            {
              projects[0]?.image?.map((url, idx) => (<SwiperSlide
                key={idx}
              >
                <img
                  src={url}
                  alt={url}
                // className='brightness-[.7]'
                />
              </SwiperSlide>))
            }
          </Swiper>
        </>
      </div>

      <div className='mt-10 md:flex items-center justify-center gap-7'>
        <h1 className='text-4xl font-serif mb-7 md:mb-0'>Project : {projects[0]?.name}</h1>
        <a className="hover:opacity-90 border-2 border-[#ffb238] bg-[#ffb238] hover:bg-white py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " href={projects[0]?.live} target="_blank" rel="noopener noreferrer"><button>Live</button></a>
        <a className="hover:opacity-90 border-2 border-[#ffb238] bg-[#ffb238] hover:bg-white py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " href={projects[0]?.client} target="_blank" rel="noopener noreferrer"> <button> client</button></a>
        <a className="hover:opacity-90 border-2 border-[#ffb238] bg-[#ffb238] hover:bg-white py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " href={projects[0]?.server} target="_blank" rel="noopener noreferrer"><button> server</button></a>
      </div>
      <div className="w-[90%] mx-auto px-10">
        <div className='mt-10'>
          <h1 className='text-4xl font-serif mb-10'>Projects feature</h1>
          <div>
            <ul>
              {
                projects[0]?.feature?.map((item, index) => <li className='text-start mb-2 list-decimal' key={index}>{item}</li>)
              }
            </ul>
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-4xl font-serif mb-10'>Projects technologies</h1>
          <div>
            <ul>
              {
                projects[0]?.technologies?.map((item, index) => <li className='text-start mb-2 list-decimal' key={index}>{item}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;