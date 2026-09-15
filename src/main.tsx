import React, {useState, useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {portfolio as p} from './data/portfolio';
import './style.css';

function App() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("main");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    // Anchor offsets and the menu follow the real header height, including text zoom and safe areas.
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--header-offset', `${header.getBoundingClientRect().height}px`);
    });
    observer.observe(header);
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => {
      if (!desktop.matches) return;
      if (document.activeElement === menuRef.current) header.querySelector<HTMLAnchorElement>('.brand')?.focus();
      setMenu(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => { observer.disconnect(); desktop.removeEventListener('change', closeOnDesktop); };
  }, []);
  useEffect(() => {
    if (!menu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenu(false); menuRef.current?.focus(); }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenu(false);
    };
    const close = () => setMenu(false);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('hashchange', close);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('hashchange', close);
    };
  }, [menu]);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.hero, main > section[id]'));
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = (headerRef.current?.getBoundingClientRect().height ?? 80) + 48;
      let current = 'main';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) current = section.id || 'main';
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = 'contact';
      setActiveSection(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <>
<a className="skip" href="#main">Skip to content</a>
<header ref={headerRef} onBlur={event => {
  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenu(false);
}}>
<a className="brand" href="#main" aria-label="Steven Rodriguez — home" onClick={() => setMenu(false)}>sr<span>_</span></a>
<nav id="main-navigation" className={menu ? 'is-open' : ''} onClick={event => {
  if ((event.target as Element).closest('a')) setMenu(false);
}} aria-label="Main navigation">
<a href="#main" aria-current={activeSection === "main" ? "location" : undefined}> Home</a>
<a href="#about" aria-current={activeSection === "about" ? "location" : undefined}> About</a>
<a href="#work" aria-current={activeSection === "work" ? "location" : undefined}> Work</a>
<a href="#experience" aria-current={activeSection === "experience" ? "location" : undefined}> Experience</a>
<a href="#skills" aria-current={activeSection === "skills" ? "location" : undefined}> Skills</a>
<a href="#resume" aria-current={activeSection === "resume" ? "location" : undefined}> Resume</a>
</nav>
<a className="nav-contact button" href="#contact" aria-current={activeSection === "contact" ? "location" : undefined} onClick={() => setMenu(false)}>Contact</a>
<button ref={menuRef} className="menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="main-navigation" onClick={() => setMenu(!menu)}>Menu <span aria-hidden="true">{menu ? '−' : '+'}</span></button>

</header>
<main id="main" tabIndex={-1}>
<section className="hero">
<div className="eyebrow">
<span className="square"/> STEVEN RODRIGUEZ / DATA ANALYST</div>
<h1>I turn complex data<br/>
<span className="serif">into better decisions.</span>
</h1>
<div className="hero-portrait portrait-frame"><img src="./steven-rodriguez-480.jpg" srcSet="./steven-rodriguez-480.jpg 360w, ./steven-rodriguez-960.jpg 721w" sizes="(max-width: 760px) 173px, 384px" alt="Steven Rodriguez" width="2316" height="3084" fetchPriority="high" decoding="async" /></div>
<div className="hero-bottom">
<div>
<p>I analyze data, solve business problems,<br className="desktop"/> and automate workflows.</p>
<div className="actions">
<a className="button dark" href="#work">See my work
</a>
<a className="button" href="#contact">Contact me
</a>
</div>
</div>
<div className="query">
<div className="query-top">
<span>analyst.sql</span>
<span>SQL</span>
</div>
<code>
<b>SELECT</b> name, role<br/>
<b>FROM</b> portfolio<br/>
<b>WHERE</b> role = <em>'Data Analyst'</em>;<span className="cursor"/>
</code>
<div className="query-foot">↳ 1 analyst found <span>1 row returned</span>
</div>
</div>
</div>
<div className="hero-foot">
<span>BASED IN ORANGE COUNTY, CA</span>
<a href="#about">ABOUT ME</a>
</div>
</section>
<section id="about" tabIndex={-1} className="section about">
<div className="label">01 / ABOUT</div>
<div>
<h2>A little about me.</h2>
<p>{p.bio}</p>
<p className="muted">I’m interested in how data can solve business problems. Through reporting and automation, I help teams improve efficiency, maintain data accuracy, and make informed decisions. I enjoy connecting with people in analytics, technology, and finance who share that interest.</p>
<blockquote className="about-quote"><p>“In the middle of difficulty lies opportunity.”</p><cite>— Albert Einstein</cite></blockquote>
<div className="education">
<span className="mono">EDUCATION</span>
<strong>{p.education.school}</strong>
<span>{p.education.dates} <i>·</i> {p.education.distinction}</span>
</div>
</div>
</section>
<section id="work" tabIndex={-1} className="section work">
<div className="section-heading">
<div>
<div className="label">02 / SELECTED WORK</div>
<h2>Some of<br/>my <span className="serif">work.</span>
</h2>
</div>
<p>Reports, account updates, and data cleanup.<br/>
<span className="sample-note">Selected projects & professional work</span>
</p>
</div>{p.projects.map(project=>
<article className="project" key={project.id}>
<div className={'project-visual '+project.kind} aria-label={project.type + ': ' + project.metric + ' ' + project.metricLabel + (project.kind === 'bars' ? '. Relative processing time: before 100, after 30.' : project.kind === 'cohort' ? '. Coverage: Orange, Riverside, and San Bernardino counties.' : '. Source records, 20+ field mappings, Salesforce CRM.')} role="img">
<div className="visual-label">
<span>{project.type.toUpperCase()}</span>
<span>FIG. {project.id}</span>
</div>{project.kind==='cohort'?<div className="market-figure">
<span className="mono">COVERAGE ANALYSIS</span>{['Orange County','Riverside County','San Bernardino County'].map((c,i)=>
<div key={c}>
<span className="mono">0{i+1}</span>
<strong>{c}</strong>

</div>)}<p>Client representation × population</p>
</div>:project.kind==='bars'?<div className="comparison">
<div>
<span>BEFORE</span>
<i style={{width:'100%'}}/>
<b>100</b>
</div>
<div>
<span>AFTER</span>
<i style={{width:'30%'}}/>
<b>30</b>
</div>
<p>Relative processing time · baseline = 100</p>
</div>:<div className="pipeline">
<div>
<span>01</span>
<strong>Source records</strong>
</div>
<b>↓</b>
<div>
<span>02</span>
<strong>20+ field mappings</strong>
</div>
<b>↓</b>
<div>
<span>03</span>
<strong>Salesforce CRM</strong>
</div>
</div>}<div className="visual-bottom">
<strong>{project.metric}</strong>
<span>{project.metricLabel}</span>
</div>
</div>
<div className="project-copy">
<span className="mono project-number">{project.id} / {project.type.toUpperCase()}</span>
<h3>{project.title}</h3>
<p>{project.description}</p>
<div className="tools">{project.tools}</div>
<details>
<summary><span className="case-closed">Read case study</span><span className="case-open">Close case study</span>
</summary>
<div className="case-study">
<h4>The question</h4>
<p>{project.question}</p>
<h4>What I did</h4>
<p>{project.method}</p>
<h4>The result</h4>
<p>{project.result}</p>
<p className="sample-note">Summary based on my résumé. Client data and internal systems are not shared here.</p>
</div>
</details>
</div>
</article>)}</section>
<section id="experience" tabIndex={-1} className="section experience">
<div className="experience-heading"><div className="label">03 / EXPERIENCE</div><h2>Where I’ve worked.</h2></div>
{p.experience.map(e=><article className="experience-row" key={e.company}>
<div className="experience-overview">
<div className="experience-meta"><span>{e.dates}</span><span>{e.location}</span></div>
{e.logo && <div className={e.company === "Target Corporation" ? "experience-logo target-logo" : e.company === "RentReporters" ? "experience-logo rentreporters-logo" : "experience-logo"}><img src={e.logo} alt={e.logoAlt} width={e.company === "Target Corporation" ? 225 : e.company === "RentReporters" ? 720 : 548} height={e.company === "Target Corporation" ? 225 : e.company === "RentReporters" ? 480 : 169} loading="lazy" decoding="async" /></div>}
<h3>{e.company}</h3><strong className="role">{e.role}</strong>
<div className="tools">{e.tools}</div>
</div>
<div className="experience-details"><p>{e.description}</p><ul className="accomplishments">{e.accomplishments.map(a=><li key={a}>{a}</li>)}</ul></div>
</article>)}
</section>
<section id="skills" tabIndex={-1} className="section skills">
<div className="section-heading">
<div>
<div className="label">04 / TOOLKIT</div>
<h2>Tools I use.</h2>
</div>
<code>
<b>SELECT</b> skill <b>FROM</b> toolkit;<br/>
<span className="muted">-- Always learning.</span>
</code>
</div>
<div className="skill-grid">{p.skills.map((s,i)=>
<div className="skill" key={s.name}>
<span className="mono">0{i+1}</span>
<h3>{s.name}</h3>
<ul>{s.items.map(x=>
<li key={x}>{x}</li>)}</ul>
</div>)}</div>
</section>
<section id="resume" tabIndex={-1} className="section resume">
<div>
<div className="label">05 / RÉSUMÉ</div>
<h2>My résumé.</h2>
<p>My work history, education, and skills.</p>
</div>
<div>{p.resumeAvailable?<div className="actions">
<a className="button dark" href="./resume.html">View résumé</a>
<a className="button" href="./resume.docx" download="Steven Rodriguez Resume.docx">Download Word</a>
</div>:<>
<div className="actions">
<button className="button" disabled>View résumé</button>
<button className="button" disabled>Download Word</button>
</div>
<p className="sample-note">Résumé coming soon.</p>
</>}</div>
</section>
<section id="contact" tabIndex={-1} className="section contact">
<div className="label">06 / CONTACT</div>
<h2>Want to<br/><span className="serif">get in touch?</span>
</h2>
<div className="contact-bottom">
<p>Have a question about my work or a role in mind? Send me an email.</p>
<a className="button dark" href={p.email ? 'mailto:'+p.email : p.linkedin} target={p.email?undefined:'_blank'} rel="noreferrer">{p.email?'Email me':'Connect on LinkedIn'}
</a>
</div>
<div className="socials">
<a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{p.github?<a href={p.github} target="_blank" rel="noreferrer">GitHub</a>:<span>GitHub · coming soon</span>}{!p.email&&<span>Email · coming soon</span>}</div>
</section>
</main>
<footer>© {new Date().getFullYear()} Steven Rodriguez <span className="mono">0 errors · 1 analyst found</span>
</footer>
</>}
createRoot(document.getElementById('root')!).render(<React.StrictMode>
<App/>
</React.StrictMode>);
