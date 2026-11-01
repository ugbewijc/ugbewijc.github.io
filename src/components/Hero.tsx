import { Download, Mail } from 'lucide-react';
import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icon';

export default function Hero(): React.JSX.Element {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="col-lg-7">
            <span className="hero-eyebrow">{personalInfo.role}</span>
            <h1 className="hero-title">
              <span className="h3">
                {personalInfo.headline}{' '}
              </span>
              <span className="highlight-name">{personalInfo.highlightName}</span>
            </h1>
            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            <div className="hero-buttons">
              {/* <a href="#projects" className="btn btn-hero-primary">
                View My Projects
                <ArrowRight size={16} />
              </a> */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-hero-outline"
              >
                <Download size={18} />
                Request Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="X (Twitter) Profile"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.email}
                className="social-icon-btn"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image with abstract background & Remote badge */}
          <div className="col-lg-5">
            <div className="hero-image-wrapper">
              <div className="hero-blob-bg"></div>
              <div className="hero-img-card">
                <img
                  src={`${import.meta.env.BASE_URL}workspace-portrait.png`}
                  alt={personalInfo.name}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80";
                  }}
                />
              </div>

              {/* Floating "Available for Remote Opportunities" Badge */}
              <div className="remote-badge">
                <div className="pulse-dot"></div>
                <div className="badge-text">
                  <span className="text-top">Available for</span>
                  <span className="text-bottom">Remote Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
