import { CheckCircle2, ExternalLink } from 'lucide-react';
import React from 'react';
import { type Project } from '../data/portfolioData';
import { GithubIcon } from './Icon';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps): React.JSX.Element {
  return (
    <div
      className="modal fade show d-block project-modal"
      tabIndex={-1}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
      }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <h5 className="fw-bold mb-0">{project.title}</h5>
              {/* <span className={`category-badge ${project.badgeColor}`}>
                {project.category}
              </span> */}
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <img
              src={project.image}
              alt={project.title}
              className="modal-project-img img-fluid"
            />

            <h6 className="modal-section-heading">Overview</h6>
            <p className="text-secondary mb-3">
              {project.longDescription || project.description}
            </p>

            {project.features.length > 0 && (
              <>
                <p className="modal-section-heading">
                  Key Features & Architecture
                </p>
                <ul className="list-unstyled mb-4">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start gap-2 mb-2"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="modal-section-heading">Technologies Used</p>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-footer d-flex justify-content-between">
            <div className="d-flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2"
                >
                  <GithubIcon size={16} />
                  Source Code
                </a>
              )}
            </div>
            <button type="button" className="btn btn-light btn-sm" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
