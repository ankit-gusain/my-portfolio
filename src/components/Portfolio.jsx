import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project6 from "../assets/project6.png";
import a1 from "../assets/a1.png";
import Reveal from './Reveal';

const projects = [
  {
    img: a1,
    title: "Project #1",
    description: "GlobeHub",
    links: {
      github: "https://github.com/ankit-gusain/GlobeHub",
    },
  },
  {
    img: project6,
    title: "Project #2",
    description: "Banking Management System",
    links: {
      github: "https://github.com/ankit-gusain/banking-management-system",
    },
  },
  {
    img: project2,
    title: "Project #3",
    description: "Collection of mini projects",
    links: {
      github: "https://github.com/ankit-gusain/js-and-projects",
    },
  },
  {
    img: project1,
    title: "Project #4",
    description: "WearSimulator-X (Virtual Shirt try-On).",
    links: {
      github: "https://github.com/ankit-gusain/ankit-and-pypy",
    },
  },
  {
    img: project4,
    title: "Project #5",
    description: "University Management System ",
    links: {
      github: "https://github.com/ankit-gusain/university-management-system",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <div className="mb-8 flex flex-col items-center text-center">
        <h3 className="text-5xl font-bold text-gray-300 mb-4">
          Port <span className="text-primary-color">folio</span>
        </h3>
        <hr className="border-t-2 border-primary-color w-32 mx-auto mb-6" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className="group relative flex flex-col justify-center items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              {/* Image with Hover Effect */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-sm"
              />
              {/* Hover Content (Info Box) */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center p-4 transition-opacity duration-300">
                <p className="text-white text-center">{project.description}</p>
              </div>
              {/* Link to GitHub */}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              ></a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
