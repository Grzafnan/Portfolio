import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Resume from '../../assets//shakil-ahmmed.pdf'


const Navbar = () => {

  const location = useLocation();

  return (
    <header class="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-6">
      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <a class="flex-none text-3xl font-semibold text-gray-900 dark:text-gray-800" href="/#home">SHAKIL</a>
          <div class="sm:hidden">
            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-semibold bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-900 dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-dark" aria-controls="navbar-dark" aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-dark" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block text-base">
          <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            {
              location.pathname === '/' ? <a class="font-semibold  text-gray-900 hover:text-primary" href="#home" aria-current="page">Home</a>
                : <Link to="/" class="font-semibold  text-gray-900 hover:text-primary" >
                  Home
                </Link>
            }
            <a class="font-semibold text-gray-900 hover:text-primary dark:text-gray-500 dark:hover:text-white" href="#projects">
              Projects</a>
            <a class="font-semibold text-gray-900 hover:text-primary dark:text-gray-500 dark:hover:text-white" href="#skills">Skills</a>

            <a class="font-semibold text-gray-900 hover:text-primary dark:text-gray-500 dark:hover:text-white" href="#about">About</a>
            <a class="font-semibold text-gray-900 hover:text-primary dark:text-gray-500 dark:hover:text-white" href="#contact">
              Contact
            </a>
            <a href={Resume} class="font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-500 dark:hover:text-white" download>Download Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;