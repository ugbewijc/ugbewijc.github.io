import { ArrowRight, ChevronRight, Code } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { personalInfo, projectCategories, projects, type Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const ITEMS_PER_PAGE = 6;
export default function Projects(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo<Project[]>(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.categoryType.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  // const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  const paginatedProjects = useMemo<Project[]>(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleCardKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    project: Project
  ): void => {
    if (e.key === 'Enter') setSelectedProject(project);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end justify-content-between g-4 section-header">
          <div className="col-lg-6">
            <h4 className="section-title">Featured Projects</h4>
            <p className="section-subtitle">
              A selection of projects I've worked on.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="category-filter-pills justify-content-lg-end">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="row g-4">
          {paginatedProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div
                className="project-card"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleCardKeyDown(e, project)}
              >
                <div className="project-thumbnail">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>

                <div className="project-card-body">
                  <div className="card-top-row">
                    <span className={`category-badge ${project.badgeColor}`}>
                      {project.category}
                    </span>
                    <span className="card-arrow-circle">
                      <ChevronRight size={16} />
                    </span>
                  </div>

                  <h6>{project.title}</h6>
                  <p >{project.description}</p>

                  <div className="project-tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="col-md-6 col-lg-4">
            <div className="work-together-card">
              <div className="callout-icon-circle">
                <Code size={24} />
              </div>
              <h6>Interested in working together?</h6>
              <p className=" mb-2">
                I'm open to remote opportunities and would love to discuss how I
                can contribute to your team.
              </p>
              <a href={`mailto:${personalInfo.socials.email}`} className="btn g-2 btn-primary fw-bold">
                Get in touch {' '}
                <ArrowRight size={12} />
              </a>
              {/* <a href={personalInfo.resumeUrl} className="btn-view-resume-dark" download>
                <Download size={16} />
                View Resume
              </a> */}
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        {/* <div className="pagination-controls justify-content-center justify-content-md-start">
          <button
            type="button"
            className="page-arrow-btn"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="pagination-dots">
            {Array.from({ length: Math.max(totalPages, 5) }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to page ${page}`}
                  className={`dot-indicator border-0 p-0 ${currentPage === page ? 'active' : ''}`}
                  onClick={() => {
                    if (page <= totalPages) setCurrentPage(page);
                  }}
                />
              );
            })}
          </div>

          <button
            type="button"
            className="page-arrow-btn"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage >= totalPages}
            aria-label="Next Page"
          >
            <ChevronRight size={18} />
          </button>
        </div> */}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
