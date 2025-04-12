import React from 'react';
import AboutCard from './AboutCard';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
    <h1 className="about-title">About <span style={{color:"#252f2d"}}>Me</span></h1>
      <div className="about-grid">
        <AboutCard
          title="Education"
          items={[
            {
              year: '2020 - 2021',
              heading: 'Higher Secondary (HSC)',
              subtext: 'Christu Jyoti Convent Sr. Sec. School, ISC, Baghpat',
              grades:'Percentage: 90.0%'
              
            },
            {
              year: '2022 - Present',
              heading: 'Bachelor of Technology in Computer Science and Engineering',
              subtext: 'SRM University',
              grades:'CGPA: 8.0/10'
            }
          ]}
        />
        <AboutCard
          title="Experience"
          items={[
            {
              year: '2007 - 2012',
              heading: 'Creative Agency Inc.: Design Head',
              subtext: 'Led multiple design projects for various clients.'
            },
            {
              year: '2013 - Present',
              heading: 'Studio Alpha: Project Manager',
              subtext: 'Managing UI/UX projects with a team of 10+ designers.'
            }
          ]}
        />
        <AboutCard
          title="Skills"
          items={[
            { heading: 'Languages',subtext:'Java and Python' },
            { heading: 'Frontend Development' ,subtext:'React.js, React Router, HTML, CSS, JavaScript, Responsive Web Design'},
            { heading: 'Backend',subtext:'Node.js, Express.js, REST APIs' },
            { heading: 'Database',subtext:'MongoDB, MySQL, Firebase Firestore' },
            { heading: 'Authentication & Security' },
          ]}
        />
        <AboutCard
          title="Interests"
          items={[
            { heading: 'Tech Blogging' },
            { heading: 'Data Visualization' },
            { heading: 'Open Source Contribution' }
          ]}
        />
      </div>
    </section>
  );
};

export default AboutSection;
