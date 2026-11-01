import React from 'react';
export default function AboutMe(): React.JSX.Element {
  return (
    <section id="about">
      <div className="row align-items-center gy-5">
        <div>
          <h4 className='section-title'>About Me</h4>
          <p className="about-bio">
            I'm a Software Developer who loves building modern, scalable, and user-focused web applications. I specialize in frontend development and have strong full-stack engineering experience, working with technologies such as JavaScript, TypeScript, React, Next.js, Node.js, and modern web development tools.
            <br />
            <br />
            My experience spans building responsive user interfaces, developing reusable and maintainable components, integrating APIs, implementing application architecture, optimizing performance, and developing end-to-end web applications.

            I'm passionate about writing clean, efficient, and maintainable code, solving challenging technical problems, and continuously improving the quality of the products I build.

            {/* Beyond writing code, I enjoy understanding the bigger picture of the products I work on, exploring better engineering approaches, and staying up to date with evolving technologies and industry best practices.

            I'm always open to interesting challenges, opportunities to collaborate, and projects where I can contribute my experience while continuing to grow as an engineer. */}
            {/* {personalInfo.aboutMe} */}
          </p>
        </div>
      </div>
    </section>
  );
}
