import { useEffect, useState } from 'react';
import * as FramerMotion from 'framer-motion';
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiSend,
  FiShield,
  FiTerminal,
  FiX,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './App.css';

const resumePath = '/Harshit_Shah_Resume.pdf';
const { useReducedMotion } = FramerMotion;
const githubUrl = 'https://github.com/HarshitShah6';
const linkedinUrl = 'https://www.linkedin.com/in/harshit-shah-630bb7358';

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Build', href: '#build' },
];

const skills = {
  Backend: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'RBAC', 'Microservices', 'Node.js'],
  'Data & messaging': ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
  'Frontend & delivery': ['React.js', 'Vite', 'Tailwind CSS', 'PWA', 'Docker', 'Jenkins'],
  'Engineering practice': ['SQL', 'Git', 'Maven', 'Postman', 'Swagger / OpenAPI', 'System Design', 'Design Patterns', 'Performance Optimization'],
};

const experience = [
  {
    period: 'Sep 2026 — Present',
    role: 'Software Development Engineer I',
    company: 'Zypp Electric',
    location: 'Gurugram',
    number: '01',
    points: [
      'Developing Spring Boot REST APIs and RBAC-based workflows for administrative operations, approvals, and operational reporting.',
      'Contributing to backend modules across internal ERP and operational systems, including workflow automation and API integrations.',
      'Supporting staging and production releases through backend changes, production issue resolution, and system stability work.',
    ],
    tags: ['Spring Boot', 'REST APIs', 'RBAC', 'ERP workflows'],
  },
  {
    period: 'Aug 2025 — Aug 2026',
    role: 'Software Engineer Intern',
    company: 'Zypp Electric',
    location: 'Gurugram',
    number: '02',
    points: [
      'Built and maintained production React.js applications across 8+ business-critical platforms spanning ERP Inventory, KYC, Finance, Visitor Management, SaaS, and customer-facing systems.',
      'Led performance work using code splitting, lazy loading, WebP assets, deferred loading, build optimization, and PWA improvements — lifting Lighthouse Performance from ~30 to 93.',
      'Reduced FCP from 1.8s to 0.6s and Speed Index from 8.5s to 1.4s while contributing reusable components, shared modules, state patterns, and monorepo development.',
      'Integrated React applications with Spring Boot APIs across authentication/RBAC, data flows, production troubleshooting, code reviews, and multi-environment releases.',
    ],
    tags: ['React.js', 'Spring Boot', 'Performance', 'Monorepo'],
  },
];

const fadeUp = (reduced) => ({
  initial: { opacity: 0, y: reduced ? 0 : 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

function SectionLabel({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-note">{children}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Harshit Shah home">
        <span className="brand-mark">H<span>/</span>S</span>
        <span className="brand-name">Harshit Shah</span>
      </a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a className="nav-resume" href={resumePath} download onClick={() => setOpen(false)}>
          Resume <FiDownload />
        </a>
      </nav>
    </header>
  );
}

function SystemVisual() {
  return (
    <div className="system-visual" aria-label="A simplified view of a backend request moving through services">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-center"><FiTerminal /></div>
      <div className="visual-node node-api"><span>01</span><b>API</b></div>
      <div className="visual-node node-service"><span>02</span><b>Service</b></div>
      <div className="visual-node node-data"><span>03</span><b>Data</b></div>
      <div className="visual-line line-one" />
      <div className="visual-line line-two" />
      <p className="visual-caption">request → logic → persistence</p>
    </div>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="top" className="hero-shell">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-layout page-width">
        <FramerMotion.motion.div className="hero-copy" {...fadeUp(reduced)}>
          <p className="eyebrow"><span className="status-dot" /> Software Development Engineer · Gurugram, India</p>
          <h1>Building the <em>systems</em> behind useful products.</h1>
          <p className="hero-lede">
            I&apos;m Harshit Shah — a backend-focused full-stack engineer working across Java, Spring Boot, APIs, data, and the interfaces that bring them to life.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#build">See the build <FiArrowUpRight /></a>
            <a className="button button-quiet" href={resumePath} download>Download resume <FiDownload /></a>
          </div>
          <div className="hero-stack">
            <span>Currently building with</span>
            <strong>Java</strong><i /> <strong>Spring Boot</strong><i /> <strong>React</strong>
          </div>
        </FramerMotion.motion.div>
        <FramerMotion.motion.div className="hero-visual-wrap" {...fadeUp(reduced)} transition={{ delay: 0.15, duration: 0.8 }}>
          <SystemVisual />
          <div className="floating-terminal">
            <span className="terminal-dots"><i /><i /><i /></span>
            <code><b>GET</b> /api/operations</code>
            <span className="terminal-status"><FiCheck /> 200 · stable</span>
          </div>
        </FramerMotion.motion.div>
      </div>
      <a className="scroll-cue" href="#profile"><span>Scroll to explore</span><FiArrowDown /></a>
    </section>
  );
}

function Profile() {
  const reduced = useReducedMotion();
  return (
    <section id="profile" className="profile-section page-width section-block">
      <SectionLabel eyebrow="01 / profile" title="A practical engineering mindset." >
        The through-line is simple: understand the workflow, make the system dependable, then make it faster.
      </SectionLabel>
      <div className="profile-grid">
        <FramerMotion.motion.div className="profile-statement" {...fadeUp(reduced)}>
          <p className="large-copy">From authentication and approvals to payments and order flows, I like working where product requirements become clear, reliable systems.</p>
          <p className="body-copy">My experience spans production frontend applications and backend services — giving me the context to design APIs that work well for the people and interfaces consuming them.</p>
          <div className="principles">
            <div><FiLayers /><span>Model the workflow<br /><small>before the endpoint</small></span></div>
            <div><FiShield /><span>Protect the boundary<br /><small>with auth & access rules</small></span></div>
            <div><FiActivity /><span>Measure the result<br /><small>then remove the friction</small></span></div>
          </div>
        </FramerMotion.motion.div>
        <FramerMotion.motion.div className="signal-card" {...fadeUp(reduced)} transition={{ delay: 0.1, duration: 0.65 }}>
          <span className="card-index">SIGNAL / 001</span>
          <div className="signal-number">8<span>+</span></div>
          <p>business-critical platforms supported at Zypp Electric</p>
          <div className="signal-rule" />
          <div className="signal-detail"><span>Lighthouse Performance</span><strong>~30 <i>→</i> 93</strong></div>
          <div className="signal-detail"><span>First Contentful Paint</span><strong>1.8s <i>→</i> 0.6s</strong></div>
        </FramerMotion.motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const reduced = useReducedMotion();
  return (
    <section id="experience" className="experience-section section-block">
      <div className="page-width">
        <SectionLabel eyebrow="02 / experience" title="Production is the real classroom." >
          Work that moves from staging to production, across teams, environments, and business-critical workflows.
        </SectionLabel>
        <div className="timeline">
          {experience.map((item, index) => (
            <FramerMotion.motion.article className="timeline-item" key={item.role} {...fadeUp(reduced)} transition={{ delay: index * 0.1, duration: 0.65 }}>
              <div className="timeline-marker"><span>{item.number}</span></div>
              <div className="timeline-meta"><span>{item.period}</span><span><FiMapPin /> {item.location}</span></div>
              <div className="timeline-content">
                <p className="company">{item.company}</p>
                <h3>{item.role}</h3>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </FramerMotion.motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  const reduced = useReducedMotion();
  return (
    <section id="toolkit" className="toolkit-section section-block page-width">
      <SectionLabel eyebrow="03 / toolkit" title="The tools behind the work." >
        A focused toolkit for building, integrating, and operating real applications.
      </SectionLabel>
      <div className="toolkit-grid">
        {Object.entries(skills).map(([group, items], index) => (
          <FramerMotion.motion.div className="skill-group" key={group} {...fadeUp(reduced)} transition={{ delay: index * 0.08, duration: 0.55 }}>
            <div className="skill-group-head"><span>0{index + 1}</span><h3>{group}</h3></div>
            <div className="skill-chips">{items.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </FramerMotion.motion.div>
        ))}
      </div>
    </section>
  );
}

function Build() {
  const reduced = useReducedMotion();
  return (
    <section id="build" className="build-section section-block">
      <div className="page-width">
        <SectionLabel eyebrow="04 / selected build" title="A system, not just a screen." >
          One project that brings the backend toolkit together around a real business workflow.
        </SectionLabel>
        <FramerMotion.motion.article className="project-feature" {...fadeUp(reduced)}>
          <div className="project-visual">
            <div className="project-window">
              <div className="window-bar"><span><i /><i /><i /></span><small>tiffin-platform / architecture</small></div>
              <div className="architecture">
                <div className="arch-item arch-client"><FiCode /><span>Clients</span><small>Customer · Vendor · Admin</small></div>
                <div className="arch-arrow">→</div>
                <div className="arch-item arch-api"><FiLayers /><span>Spring Boot API</span><small>JWT · RBAC · Workflows</small></div>
                <div className="arch-arrow">→</div>
                <div className="arch-item arch-data"><FiDatabase /><span>Data layer</span><small>PostgreSQL · Redis</small></div>
              </div>
              <div className="event-strip"><span><b /> Kafka events</span><span><b /> scheduled jobs</span><span><b /> Docker services</span></div>
            </div>
          </div>
          <div className="project-copy">
            <p className="project-kicker">01 / Tiffin Management Platform</p>
            <h3>Subscriptions that become daily operations.</h3>
            <p> A subscription-based food delivery platform designed around the needs of Customers, Vendors, and Admins — with the business logic to keep daily orders moving.</p>
            <div className="project-details">
              <div><span>Security</span><strong>JWT authentication + role-based authorization</strong></div>
              <div><span>Automation</span><strong>Scheduled daily order generation for active subscriptions</strong></div>
              <div><span>Scale</span><strong>Redis caching and Kafka-based order + notification events</strong></div>
            </div>
            <div className="tag-row project-tags">{['Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Swagger / OpenAPI'].map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </FramerMotion.motion.article>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSending(true);
    emailjs.sendForm('service_ftofpeh', 'template_k2ex7d8', event.currentTarget, 'm2fLzt9Ta9QdVQiyL')
      .then(() => {
        toast.success('Message sent successfully.');
        event.currentTarget.reset();
      })
      .catch(() => toast.error('Unable to send right now. Please email me directly.'))
      .finally(() => setSending(false));
  };
  return (
    <section id="contact" className="contact-section section-block page-width">
      <div className="contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">05 / start a conversation</p>
          <h2>Have a system to<br /><em>figure out?</em></h2>
          <p>Whether it&apos;s a product idea, a backend challenge, or an opportunity to build something useful — I&apos;d like to hear about it.</p>
          <div className="contact-links">
            <a href="mailto:harshitshah159@gmail.com"><FiMail /> harshitshah159@gmail.com</a>
            <a href={githubUrl} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>Your name<input name="user_name" type="text" placeholder="How should I call you?" required /></label>
          <label>Email address<input name="user_email" type="email" placeholder="you@company.com" required /></label>
          <label>What are you building?<textarea name="message" rows="4" placeholder="Tell me a little about the problem..." required /></label>
          <button className="button button-primary" type="submit" disabled={sending}>{sending ? 'Sending...' : <>Send message <FiSend /></>}</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-width">
      <span>© {new Date().getFullYear()} Harshit Shah</span>
      <span className="footer-status"><i /> Open to building better systems</span>
      <a href="#top">Back to top <FiArrowUpRight /></a>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Toolkit />
        <Build />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
