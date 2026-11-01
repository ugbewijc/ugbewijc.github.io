import { Mail } from 'lucide-react';
import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icon';
import { navBarMenu } from './Navbar';

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="footer-logo-row">
              <span className="brand-monogram">{personalInfo.name}</span>
            </div>
            {/* <p className="footer-tagline">
              Building digital solutions for a better tomorrow.
            </p> */}

            <div className="footer-social-links">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.email}
                className="footer-social-btn"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links & Copyright */}
          <div className="col-lg-6">
            <div className="footer-nav-links">
              {navBarMenu.map(({ id, href, label }) => (
                <a key={id} href={href} className="footer-link">{label}</a>
              ))}
            </div>

            <div className="footer-copyright card-body-text">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
