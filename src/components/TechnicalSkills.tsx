import { Database, Layers, Layout, Server, Terminal } from 'lucide-react';
import React from 'react';
import { technicalSkills, type TechnicalSkill } from '../data/portfolioData';

type CategoryIconKey = TechnicalSkill['icon'];

const categoryIcons: Record<CategoryIconKey, React.JSX.Element> = {
  code: <Layout size={22} />,
  server: <Server size={22} />,
  database: <Database size={22} />,
  terminal: <Terminal size={22} />,
  layers: <Layers size={22} />,
};


export default function TechnicalSkills(): React.JSX.Element {
  return (
    <section id="skills" className="tech-skills-section">
      <h4 className="section-title">Technical Skills</h4>
      <div className="row g-4">
        {technicalSkills.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="tech-skill-card">
              <div className='d-flex gap-2 align-items-center'>
                <div
                  // className="tech-icon-circle"
                  // style={{ backgroundColor: item.bgColor, color: item.color }}
                  style={{ color: item.color }}
                >
                  {categoryIcons[item.icon]}
                </div>
                <p className="fw-bold m-0 p-0 mb-1">{item.category}</p>

              </div>
              <p className="card-body-text">{item.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
