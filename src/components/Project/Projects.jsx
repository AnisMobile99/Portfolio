import React, { useState, useRef } from "react";
import ProjectModal from "./ProjectModal";
import ProjectsHeader from "./ProjectsHeader";
import { projectsData, filterCategories } from "./ProjectsData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollRef = useRef(null); // Référence pour la section scrollable

  // Fonction pour basculer les catégories avec flèches
  const handleCategoryChange = (direction) => {
    const currentIndex = filterCategories.indexOf(selectedCategory);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filterCategories.length;
    } else {
      newIndex =
        (currentIndex - 1 + filterCategories.length) % filterCategories.length;
    }

    setSelectedCategory(filterCategories[newIndex]);
    scrollToCategory(newIndex); // Défilement horizontal
  };

  // Fonction pour faire défiler vers une catégorie spécifique
  const scrollToCategory = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = scrollContainer.clientWidth * index;
      scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Filtrer les projets par catégorie
  const filteredProjects = Array.from(
    new Map(
      projectsData
        .filter((project) =>
          selectedCategory === "All"
            ? true
            : project.tags.includes(selectedCategory)
        )
        .map((project) => [project.id, project]) // Supprime les doublons
    ).values()
  );

  const projectsToShow = filteredProjects;

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-black pt-20">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Mes Projets
        </h2>

        {/* Header des catégories */}
        <ProjectsHeader
          categories={filterCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          nextCategory={() => handleCategoryChange("next")}
          prevCategory={() => handleCategoryChange("prev")}
        />

        {/* Scrollable Projects Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar mt-6"
          style={{
            scrollSnapType: "x mandatory",
            padding: "20px",
          }}
        >
          {projectsToShow.map((project, index) => (
            <div
              key={`${selectedCategory}-${project.id}`}
              style={{ scrollSnapAlign: "start" }}
              className={`flex-none w-72 bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg p-4 
              cursor-pointer hover:scale-105 hover:z-10 relative 
              transition-all duration-300 animate-fade-in`}
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
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
