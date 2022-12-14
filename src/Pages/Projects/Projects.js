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
        <ul className='flex flex-col items-center md:flex-row justify-center gap-10'>
          {
            categories?.map(category => <li
              key={category?.id}
            >
              <button
                onClick={() => handelProjects(`${category?.id}`)}
              >
                <NavLink
                  // to={`/category/${category?.id}`}
                  className='border-2 inline-block w-60 md:inline md:px-6 border-primary py-1.5 focus:bg-primary focus:text-white font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-linear'
                >
                  {category?.name}
                </NavLink>
              </button>

            </li>)
          }
        </ul>
      </div>

      <div class="w-full mx-auto">
        <div class="py-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mt-12 mt-10">
            {
              projectCard?.map(project => <div
                class="card"
                key={project?.id}
              >
                <img src={project?.image_url} />
                <div class="info">
                  <h1 className='text-2xl font-bold '>
                    {project?.name}
                  </h1>
                  <div className='flex w-full gap-10 mt-10'>
                    <a
                      href={project?.live}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button>Live Site</button>
                    </a>
                    <Link to={`project/${project?.id}`}>
                      <button>Details</button>
                    </Link>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </section >
  );
};

export default Projects;