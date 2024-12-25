import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project6,
    title: "Project #1",
    description: "Banking Management System",
    links: {
      github: "https://github.com/ankit-gusain/banking-management-system",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "Collection of mini projects",
    links: {
      github: "https://github.com/ankit-gusain/js-and-projects",
    },
  },
  {
    img: project1,
    title: "Project #3",
    description: "WearSimulator-X (Virtual Shirt try-On).",
    links: {
      github: "https://github.com/ankit-gusain/ankit-and-pypy",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "University Management System ",
    links: {
      github: "https://github.com/ankit-gusain/university-management-system",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">

      <div className="mb-8 flex flex-col items-center text-center">
        <h3 className="text-5xl font-bold text-gray-300 mb-4 ">
          Port <span className="text-primary-color">folio</span>
        </h3>
        <hr className="border-t-2 border-primary-color w-32 mx-auto mb-6" />
      </div>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex justify-center'>
                <a href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                  <AiOutlineGithub className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
