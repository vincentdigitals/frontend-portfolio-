"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";

const experiences = [
  {
    company: "Auvra",
    role: "Frontend Developer",
    copy: "I work on the frontend of Auvra, building and improving a cultural platform focused on resource coordination and project workflows. My work involves turning product requirements into responsive, interactive interfaces and connecting the frontend to the underlying application through APIs.",
    skills: "React.js, Tailwind CSS, Vite, Framer Motion, APIs, Git, GitHub",
  },
  {
    company: "Enactus Tai Solarin University of Education",
    role: "Project Manager & Product Engineer - Claive",
    copy: "I work across product development and team coordination on Claive, an education workspace being developed for university students. My work sits between product research, product decisions, frontend development, and team coordination.",
    skills: "Product Research, Frontend Development, Product Discovery, Team Coordination",
  },
  {
    company: "EdTech Center of Excellence",
    role: "Frontend Developer",
    copy: "Worked on education-focused digital products, translating requirements and designs into responsive web interfaces.",
    skills: "Frontend Development, JavaScript, React, Responsive Design",
  },
];

const projects = [
  ["01", "AUVRA", "Cultural Resource Coordination Platform.", "React.js, Tailwind CSS, Vite, Framer Motion, APIs"],
  ["02", "MIXLR", "Progressive Web Audio Recorder.", "React, TypeScript, PWA"],
  ["03", "READPDF", "PDF-to-Speech Web Application.", "JavaScript, PDF.js, Web Speech API"],
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>{children}</motion.div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav-shell">
        <a className="wordmark" href="#home"><span className="wordmark-first">Omoseebi</span><span className="wordmark-last">Vincent</span></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {["Home", "Experience", "Projects", "Approach", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item === "Home" ? "( Home )" : item}</a>)}
        </div>
        <a className="button button-solid nav-cta" href="/omoseebi-vincent-cv.html" download>Download CV <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero section-grid" id="home">
        <Reveal className="hero-intro"><p className="eyebrow">Frontend / Product</p><h1>Frontend Developer.<br /><em>Product-minded.</em></h1><p className="hero-copy">I build responsive, usable web products with React, Next.js, and JavaScript. I care about more than getting an interface to look right - I think about the people using it, the problem the product is solving, and how the frontend can make that experience clearer and more effective.</p><div className="action-row"><a className="button button-outline" href="#projects">View my work <ArrowUpRight size={15} /></a><a className="text-link" href="/omoseebi-vincent-cv.html" download>Download my CV <ArrowUpRight size={15} /></a></div></Reveal>
        <div className="portrait-wrap"><div className="portrait-ring"><img src="/portrait.jpg" alt="Portrait of Omoseebi Vincent" /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="portrait-label">Build with intent.</span></div>
        <Reveal className="hero-note"><span>01 / 03</span><p>A frontend developer who builds the interface, understands the product behind it, and thinks about the problem the interface is actually solving.</p></Reveal>
        <div className="hero-footer"><span>Based in Lagos, Nigeria</span><span>Scroll to explore <span className="scroll-line" /></span></div>
      </section>

      <section className="section section-rule" id="experience"><div className="section-heading"><span>02</span><h2>Experience</h2><p>Selected roles and the work behind them.</p></div><div className="experience-list">{experiences.map((item, index) => <Reveal className="experience-item" key={item.company}><div className="item-index">0{index + 1}</div><div><p className="item-company">{item.company}</p><h3>{item.role}</h3><p className="item-copy">{item.copy}</p><p className="skill-line">{item.skills}</p></div></Reveal>)}</div></section>

      <section className="section skills-band"><div className="section-heading"><span>03</span><h2>Skills stack</h2><p>The tools I use to turn product thinking into useful interfaces.</p></div><div className="skills-grid">{[["Frontend Development", "JavaScript · React · Next.js · HTML · CSS · Tailwind CSS · Responsive Design"], ["Development Tools", "Git · GitHub · Vite · Vercel · Firebase"], ["Working Knowledge", "TypeScript · REST APIs · PWA Development"], ["Product & Collaboration", "Product Thinking · User Research · Product Discovery · Team Collaboration · Project Management"]].map(([title, copy]) => <div className="skill-block" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

      <section className="section section-rule" id="projects"><div className="section-heading"><span>04</span><h2>Selected projects</h2><p>A few products, experiments, and problems I have worked through.</p></div><div className="projects-list">{projects.map(([number, title, copy, skills]) => <Reveal className="project-item" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p><small>{skills}</small><ArrowUpRight className="project-arrow" /></Reveal>)}</div></section>

      <section className="section approach section-rule" id="approach"><div className="section-heading"><span>05</span><h2>Approach & about</h2></div><div className="approach-content"><Reveal><p className="display-copy">I care about what we&apos;re building, <em>not just how it looks.</em></p></Reveal><div><p>I&apos;m Omoseebi Vincent. I&apos;m a frontend developer interested in building useful web products and understanding the problems behind them. My work sits at the intersection of frontend development and product thinking.</p><p>Frontend development is where I spend most of my time, but I don&apos;t see the interface as something separate from the product. I&apos;m interested in what the product is helping someone accomplish, where the experience becomes difficult, and whether the interface actually supports the problem we&apos;re trying to solve.</p></div></div></section>

      <section className="contact section-rule" id="contact"><Reveal><p className="eyebrow">06 / Start a conversation</p><h2>Have a frontend<br /><em>problem to solve?</em></h2><p>I&apos;m interested in working on products where I can contribute to the frontend, collaborate with a team, and continue getting better through real product work.</p><a className="button button-solid" href="mailto:omoseebivincent@gmail.com">Get in touch <Mail size={15} /></a></Reveal><div className="contact-meta"><p>Beyond frontend engineering</p><a href="https://www.omoseebivincent.site/" target="_blank" rel="noreferrer">Check out my broader ventures, speaking engagements, and initiatives <ArrowUpRight size={15} /></a><div className="socials"><a href="https://www.linkedin.com/in/omoseebi-vincent/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={17} /></a><a href="https://github.com/vincen-coder" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={17} /></a><a href="mailto:omoseebivincent@gmail.com" aria-label="Email"><Mail size={17} /></a></div></div></section>
      <footer><span>Omoseebi Vincent © 2025</span><span>Designed and built with care</span></footer>
    </main>
  );
}
