import React from 'react';
import '../styles/ProjectsSection.css';

const projects = [
  {
    title: 'PaperHaven',
    subtitle: 'MERN Stack + Firebase Web App',
    description: 'Platform for accessing college question papers. Firebase Auth + Storage, Vercel + Render deployment.',
    tags: ['Web', 'MERN'],
    image: '/images/PaperHaven.png',
    link: 'https://paperhavenn.com/'
  },
  {
    title: 'SchoolMan',
    subtitle: 'MERN Stack School Comparison Portal',
    description: 'Online form submission, dynamic filters, Maps integration. Built with MERN stack.',
    tags: ['Web', 'MERN'],
    image: '/images/schoolman.png',
    link: 'https://schoolman.netlify.app'
  },
  {
    title: 'WebApp To-Do List',
    subtitle: 'Basic Productivity Tool',
    description: 'Minimal and responsive web app to manage tasks. CRUD features with local storage.',
    tags: ['Web', 'Mini'],
    image: '/images/keep.png',
    link: 'https://github.com/HarshitShah6/To-do-list'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
