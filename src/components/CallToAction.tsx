import { ArrowRight, Users2 } from 'lucide-react';
import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function CallToAction(): React.JSX.Element {
  return (
    <div className="container cta-banner-wrapper my-4">
      <div className="cta-banner-dark">
        <div className="row align-items-center gy-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-4">
              <div className="cta-collab-icon d-none d-sm-flex">
                <Users2 size={28} />
              </div>
              <div>
                <h5 >Interested in working together?</h5>
                <p className="cta-subtext">
                  I'm currently open to remote opportunities and would love to
                  discuss how I can contribute to your team.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-lg-end">
            <a href={`mailto:${personalInfo.socials.email}`} className="btn g-2 btn-primary fw-bold">
              Get in touch {' '}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
