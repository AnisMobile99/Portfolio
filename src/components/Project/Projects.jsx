import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import ProjectsHeader from "./ProjectsHeader";
import { projectsData, filterCategories } from "./ProjectsData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Filtrer les projets par catégorie avec suppression des doublons
  const filteredProjects = Array.from(
    new Map(
      projectsData
        .filter(
          (project) =>
            selectedCategory === "All" ||
            project.tags.includes(selectedCategory)
        )
        .map((project) => [project.id, project])
    ).values()
  );

  const projectsToShow = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 5);

  // Fonction pour ouvrir le modal
  const openModal = (project) => setSelectedProject(project);

  // Fonction pour fermer le modal
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-black pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Mes Projets
        </h2>

        {/* Header pour filtrer les projets */}
        <ProjectsHeader
          categories={filterCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Liste des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-[0px_10px_25px_rgba(0,0,0,0.4)]  transition-all duration-300 dark:hover:shadow-[0px_10px_25px_rgba(255,255,255,0.4)] "
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-blue-600 hover:underline text-sm font-medium">
                Voir plus
              </button>
            </div>
          ))}
        </div>

        {/* Bouton Voir plus / Voir moins */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {showAll ? "Voir moins" : "Voir plus"}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
