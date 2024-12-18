import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import ProjectsHeader from "./ProjectsHeader";
import { projectsData, filterCategories } from "./ProjectsData";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const isMobile = useDeviceDetection(); // Détection du type d'appareil

  const resetScrollPosition = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleCategoryChange = (direction) => {
    const currentIndex = filterCategories.indexOf(selectedCategory);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filterCategories.length
        : (currentIndex - 1 + filterCategories.length) %
          filterCategories.length;

    setSelectedCategory(filterCategories[newIndex]);
    resetScrollPosition();
  };

  useEffect(() => {
    resetScrollPosition();
  }, [selectedCategory]);

  const filteredProjects = Array.from(
    new Map(
      projectsData
        .filter((project) =>
          selectedCategory === "All"
            ? true
            : project.tags.includes(selectedCategory)
        )
        .map((project) => [project.id, project])
    ).values()
  );

  const scrollProjects = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-black pt-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Mes Projets
        </h2>

        <ProjectsHeader
          categories={filterCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => {
            setSelectedCategory(category);
            resetScrollPosition();
          }}
          nextCategory={() => handleCategoryChange("next")}
          prevCategory={() => handleCategoryChange("prev")}
        />

        {!isMobile && (
          <>
            <button
              onClick={() => scrollProjects("left")}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollProjects("right")}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar mt-6"
          style={{
            scrollSnapType: "x mandatory",
            padding: "10px",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={`${selectedCategory}-${project.id}`}
              className="flex-none w-72 md:w-96 lg:w-[30rem] bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg p-4
              cursor-pointer hover:scale-105 hover:z-10 relative 
              transition-all duration-300 animate-fade-in"
              style={{ scrollSnapAlign: "start" }}
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

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
