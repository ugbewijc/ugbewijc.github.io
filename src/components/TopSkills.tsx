import React from 'react';
import { type TopSkill } from '../data/portfolioData';

// Official branded inline SVG icons
const TechIcons: Record<TopSkill['icon'], React.JSX.Element> = {
  react: (
    <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg width="24" height="24" viewBox="0 0 180 180" fill="none">
      <mask
        id="mask0_next"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
        style={{ maskType: 'alpha' }}
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" r="90" fill="#111827" stroke="#374151" strokeWidth="6" />
        <path
          d="M149.508 157.438L69.1555 54H54V125.967H66.1537V69.4674L139.957 164.846C143.308 162.593 146.505 160.113 149.508 157.438Z"
          fill="url(#paint0_linear_next)"
        />
        <rect x="114" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_next" x1="120" y1="54" x2="120" y2="104.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  nodejs: (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2L3 9.5V24.5L16 32L29 24.5V9.5L16 2Z"
        fill="#22C55E"
        fillOpacity="0.15"
        stroke="#22C55E"
        strokeWidth="2"
      />
      <path d="M16 8L8 12.5V21.5L16 26L24 21.5V12.5L16 8Z" fill="#22C55E" />
    </svg>
  ),
  typescript: (
    <svg width="24" height="24" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path
        d="M72.9 83.4c2.8 4.7 7.2 7.7 13.5 7.7 5.6 0 9.2-2.7 9.2-6.8 0-4.5-3.6-6.1-10.4-9.3-9.9-4.5-16.1-9.5-16.1-18.8 0-11.4 9.1-19.8 22.8-19.8 8.8 0 15.5 3.1 19.8 9.5l-8.6 5.8c-2.4-3.6-5.8-5.3-11.2-5.3-4.7 0-8 2.5-8 6.1 0 4.2 3.1 5.7 9.6 8.7 11.2 5 17 9.8 17 19.6 0 12.5-9.6 20.3-24.3 20.3-10.5 0-18.8-3.7-23.7-11.2l10.3-6.5zm-33.1-29.8v47h-12.7v-47h-16.1v-10.7h45v10.7h-16.2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  postgresql: (
    <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
      <path
        d="M31.9 4C16.5 4 4 16.5 4 32c0 15.5 12.5 28 27.9 28 15.5 0 28.1-12.5 28.1-28C60 16.5 47.4 4 31.9 4z"
        fill="#336791"
      />
      <path
        d="M38.8 21.6c-1.3-.8-2.9-1.2-4.7-1.2-2.8 0-4.9.9-6.3 2.7-1.4 1.8-2 4.4-1.9 7.7.1 3.5 1 6.1 2.6 7.9 1.6 1.7 3.8 2.6 6.5 2.6 1.9 0 3.5-.4 4.8-1.3v-4.6c-1.1.7-2.4 1-3.8 1-1.4 0-2.6-.5-3.5-1.5-.9-1-1.3-2.6-1.3-4.6 0-2.1.4-3.6 1.3-4.7.9-1.1 2.1-1.6 3.6-1.6 1.3 0 2.4.3 3.4.9l-.7-2.9z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  tailwindcss: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  ),
};

const skills: TopSkill[] = [
  { name: 'React', icon: 'react', color: '#00d8ff' },
  { name: 'Next.js', icon: 'nextjs', color: '#ffffff' },
  { name: 'Node.js', icon: 'nodejs', color: '#22c55e' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178c6' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38bdf8' },
];

export default function TopSkills(): React.JSX.Element {
  return (
    <div className="container top-skills-container">
      <div className="skills-dark-pill">
        <div className="skills-row">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <span className="skill-icon-svg d-flex align-items-center">
                {TechIcons[skill.icon]}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
