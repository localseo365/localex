import React, { useState } from 'react';
import { projects } from '../data';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Proyectos recientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Descubre la transformación que aportamos a los locales comerciales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`p-4 md:p-6 rounded-lg cursor-pointer transition-colors ${
                  activeProject.id === project.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                onClick={() => setActiveProject(project)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`text-sm md:text-base ${activeProject.id === project.id ? 'text-gray-800' : 'text-gray-400'}`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="relative">
              <img
                src={activeProject.beforeImage}
                alt="Antes"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-black text-yellow-400 px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
                Antes
              </span>
            </div>
            <div className="relative">
              <img
                src={activeProject.afterImage}
                alt="Después"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-black text-yellow-400 px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
                Después
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}