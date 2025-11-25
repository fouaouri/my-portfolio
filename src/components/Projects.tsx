import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import travexiaImage from '../../dist/assets/travexia.png';
import travexiaImage1 from '../../dist/assets/travexia1.png';
import travexiaImage2 from '../../dist/assets/travexia2.png';
import travexiaImage3 from '../../dist/assets/travexia3.png';
import dragon from '../../dist/assets/dragon-1.png';
import dragon1 from '../../dist/assets/dragon-3.png';
import dragon2 from '../../dist/assets/dragon-5.png';


interface ProjectsProps {
  onNavigate: (section: string) => void;
}

const projects = [
  {
    title: 'TRAVEXIA',
    description:
      'Travexia is a platform built for a public works company to manage and store essential business data. It functions as an ERP system developed using TypeScript, React, and Django with JWT authentication. During this project, I also explored new tools such as NLP with spaCy.',
    tech: ['React.js', 'Typescript', 'Django', 'JWT Authentication'],
    images: [travexiaImage, travexiaImage1, travexiaImage2, travexiaImage3],
  },
  {
    title: 'Dragon’s ping pong Website',
    description:
      'Led the front-end development of a full-stack web application for a 1337 school project, focusing on user interface design and dynamic user interactions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    images: [dragon, dragon1, dragon2],
  },
  {
    title: 'INCEPTION',
    description:
      'The Inception project involved setting up and running a small infrastructure of services to create a functional WordPress website using Docker, Nginx, and MariaDB.',
    tech: ['Docker'],
    images: [],
  },
  {
    title: 'WEBSERVER',
    description:
      'Developed a C++98-compatible HTTP web server from scratch, supporting GET, POST, DELETE, static files and CGI, using epoll for concurrency.',
    tech: ['C++', 'HTTP'],
    images: [],
  },
];

function Projects({ onNavigate }: ProjectsProps) {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-20 relative">
      <div className="max-w-7xl w-full space-y-16">

        {/** --- Title Section --- */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            REALISATIONS
          </h2>
          <div className="w-32 border-t-2 border-white"></div>
        </div>

        {/** --- Projects Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-white p-8 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-light tracking-wide">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={24}
                    className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => setOpenProject(index)}
                  />
                </div>

                <div className="w-16 border-t-2 border-current"></div>

                <p className="text-lg leading-relaxed group-hover:text-black text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm tracking-wider border border-current px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/** --- Scroll Down Arrow --- */}
      <button
        onClick={() => onNavigate('contact')}
        className="absolute bottom-12 animate-bounce hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={48} strokeWidth={1} />
      </button>

      {/** --- Project Modal --- */}
      {openProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-8">

            {/** Close Button */}
            <button
              onClick={() => setOpenProject(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition-transform"
            >
              ×
            </button>

            <h3 className="text-3xl font-light text-white mb-6 tracking-wide text-center">
              {projects[openProject].title}
            </h3>

            {/** Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects[openProject].images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Project screenshot"
                  className="w-full h-auto border border-white cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setZoomedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/** --- Zoomed Image Lightbox --- */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[60] cursor-pointer"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            className="max-w-4xl w-[90%] max-h-[90%] rounded-md shadow-xl transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
