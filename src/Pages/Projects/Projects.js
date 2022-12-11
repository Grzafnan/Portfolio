import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Projects.css'



const Projects = () => {

  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState();
  const [projectCard, setProjectCard] = useState([]);

  console.log(projectCard);

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    fetch(`projects.json`)
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setProjectCard(data)
      })
  }, [])

  const handelProjects = (category) => {
    if (category !== '1') {
      const filter = projects.filter(p => p.category_id
        === category);
      setProjectCard(filter)
    }
    else {
      setProjectCard(projects)
    }

  }


  return (
    <section id='projects' className='px-6 py-14'>
      <h1 className='text-6xl text-center capitalize font-bold py-10 font-[Poppins]'>MY PROJECTS</h1>

      <div>
        <ul className='flex justify-center gap-10'>
          {
            categories?.map(category => <li
              key={category?.id}
            >
              <button
                onClick={() => handelProjects(`${category?.id}`)}
              >
                <Link
                  // to={`/category/${category?.id}`}
                  className='border-2 px-6 border-primary py-1.5 font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-linear'
                >
                  {category?.name}
                </Link>
              </button>

            </li>)
          }
        </ul>
      </div>

      <div class="w-full mx-auto">
        <div class="py-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mt-12 mt-10">
            {
              projectCard?.map(project => <div class="card">
                <img
                  src={project?.image_url}
                  alt={project?.name}
                  className='absolute w-full h-full object-cover rounded-[15px] top-0 left-0'
                />
                <div class="info text-white w-full h-2/4 relative z-20 opacity-0 transform translate-y-[30px] transition duration-300 hover:opacity-100 hover:translate-y-0">
                  <h1 className='text-xl font-semibold'>
                    {project?.name}
                  </h1>
                  <div className='flex justify-between'>
                    <Link>
                      <button className='px-4 py-1.5 border-none outline-none text-[#000] font-semibold transition duration-200 bg-white hover:bg-primary hover:text-white rounded'>
                        Live Site
                      </button>
                    </Link>
                    <Link>
                      <button className='px-4 py-1.5 border-none outline-none text-[#000] font-semibold transition duration-200 bg-white hover:bg-primary hover:text-white rounded'>
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>




    </section>
  );
};

export default Projects;